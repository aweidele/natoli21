<?php
/**
 * @package WordPress
 * @subpackage natoli
 */
$noDetail = get_field("no_detail", get_queried_object_id());

if( $noDetail )
{
	header('Location: ' . get_post_type_archive_link("project") );
}
 
get_header();

the_post();

$locations = wp_get_post_terms( $post->ID, "location");

$slideshow = get_field("slideshow");
$gallery = get_field("gallery");

function natoli_render_text_field($field, $label)
{
	$content = get_field($field);
	
	if($content)
	{
		echo "<div class='section-wrap'>";
		echo "<h2 class='secondary'>$label</h2>";
		echo "<div>$content</div>";
		echo "</div>";
	}
}

function natoli_render_terms($postId, $tax, $label, $inline = false)
{
	$terms = wp_get_post_terms( $postId, $tax);
	
	if($terms && count($terms) > 0 )
	{
		echo "<div class='section-wrap'>";
		echo "<h2 class='secondary'>$label</h2>";
		
		$first = true;
		foreach($terms as $term)
		{
			$url = get_term_link($term);
			
			if( $inline )
			{
				if( $first )
				{
					$first = false;
				}
				else
				{
					echo "&#160;|&#160;";
				}
			}
			else
			{
				echo "<div>";
			}
			
			echo "<a href='$url' class='filter-link'>$term->name</a>";
			
			if( !$inline )
			{
				echo "</div>";
			}
		}
		echo "</div>";
	}
}

function natoli_render_links($field, $label, $checkNoDetail = false)
{
	$posts = get_field($field);
	
	if( $posts )
	{
		echo "<div class='section-wrap'>";
		echo "<h2 class='secondary'>$label</h2>";
		
		$noDetail = false;
		
		foreach($posts as $p)
		{
			if($checkNoDetail)
			{
				$noDetail = get_field("no_detail", $p->ID);
			}			
			
			$url = get_permalink($p);
			echo "<div>";
			if( !$noDetail )
			{
				echo "<a href='$url'>";
			}
			echo $p->post_title;
			if( !$noDetail )
			{
				echo "</a>";
			}
			
			echo "</div>";
		}
		echo "</div>";
	}
}
if( $slideshow )
{
	echo "<div id='mobile_images'>";
	
	foreach( $slideshow as $slide )
	{
	?>
		<img alt="<?= $slide["alt"] ?>" src="<?= $slide["sizes"]["project"] ?>" />
	<?php
	}
	echo "</div>";
}
?>
<div class="wrapper no-banner">
	<div class="project-detail-left">
	<?php
	if( $slideshow )
	{
		echo "<div id='slide_show' class='mobile-hide'>";
		echo "<div class='cycle-prev'><div class='wrap'><div class='icon'></div></div></div>";
		echo "<div class='cycle-next'><div class='wrap'><div class='icon'></div></div></div>";
		
		foreach( $slideshow as $slide )
		{
			$ratio = $slide["sizes"]["project-height"] / $slide["sizes"]["project-width"];
		?>
			<img alt="<?= $slide["alt"] ?>" class="cycle-next" src="<?= $slide["sizes"]["project"] ?>" style="display: none" data-ratio="<?= $ratio ?>"/>
		<?php
		}
		echo "</div>";
		if( count($slideshow) > 1 )
		{
			echo "<script>jQuery(function(){jQuery('#slide_show').natoliProjectSlideShow();});</script>";
			echo "<div id='pager' class='project-thumbs mobile-hide'>";
			foreach( $slideshow as $slide )
			{
			?>
				<img alt="<?= $slide["alt"] ?>" src="<?= $slide["sizes"]["project_thumb"] ?>"/>
			<?php
			}
			echo "<div style='clear: left;'></div>";
			echo "</div>";
		}
	}
	if( $gallery )
	{
		echo "<div class='project-gallery mobile-hide'>";
		foreach( $gallery as $image )
		{
		?>
			<img alt="<?= $image["alt"] ?>" src="<?= $image["sizes"]["project"] ?>" />
		<?php
		}
		echo "</div>";
	}
	?>
	</div>
	<div class="project-detail-right side-fixed">
		<h1 class="secondary"><?php the_title(); ?></h1>
		<?php
		if( count($locations) > 0 )
		{
			$location = $locations[0];
			$locationUrl = get_term_link($location);
			echo "<div class='location'><a href='$locationUrl'>$location->name</a></div>";
		}
		?>
		<?php
			if( isset($_COOKIE['back_to_project']) )
			{
				$backUrl = $_COOKIE['back_to_project'];
			}
			else
			{
				$backUrl = get_post_type_archive_link("project");
			}
			
			$nextUrl = false;
			$prevUrl = false;
			$prevId = "";
			if( isset($_COOKIE['next_project_order']) )
			{
				$order = explode(",", $_COOKIE['next_project_order']);
				
				if( count($order) > 0 )
				{
					$found = false;
					
					foreach($order as $id)
					{
						if( $found )
						{
							$nextUrl = get_permalink(intval($id));
							break;
						}
						
						if( $id == $post->ID )
						{
							$found = true;
							
							if( $prevId )
							{
								$prevUrl = get_permalink(intval($prevId));
							}
							else
							{
								$prevUrl = get_permalink($order[count($order) - 1]);
							}
						}
						$prevId = $id;
					}
					
					if(!$nextUrl)
					{
						$nextUrl = get_permalink($order[0]);
					}
				}
			}
			else
			{
				$nextPost = get_next_post();
			
				if( $nextPost )
				{
					$nextUrl = get_permalink($nextPost);
				}
			}
		?>
		<div class="section-wrap wysiwyg-content">
			<?php the_content(); ?>
		</div>
		<?php
		natoli_render_text_field("completion", "Completion");
		natoli_render_text_field("area", "Area");
		natoli_render_terms($post->ID, "project_type", "Market");
		natoli_render_terms($post->ID, "scope", "Scope");
		natoli_render_links("news", "News");
		natoli_render_links("awards_link", "Awards");
		
		natoli_render_terms($post->ID, "post_tag", "Tags", true);
		
		natoli_render_links("related_projects", "Related Projects on Website", true);
		
		$terms = wp_get_post_terms( $post->ID, "project_type");
		
		$hiddenTypes = get_field("hidden_types", "options");
		$term = false;		
		if($terms && count($terms) > 0 )
		{
			foreach($terms as $t){
				if( in_array($t->term_id, $hiddenTypes ) )
				{
					continue;
				}
				$term = $t;
				break;
			}	
		}
		
		if( $term )
		{
			echo "<div class='section-wrap'>";
			echo "<h2 class='secondary'>Other Related Projects</h2>";
			
			$url = get_term_link($terms[0]) . "?view=list";
				
			echo "<div>";
			echo "<a href='$url' class='filter-link'>View List</a>";
			echo "</div>";
			echo "</div>";
		}
		?>
		<div class="project-navigation">
			<a href="<?= $backUrl ?>" class="project">
				Back to Projects
			</a>
			<?php
			if( $nextUrl )
			{
			?>
				<a href="<?= $nextUrl ?>" class="next">
					Next Project
				</a>
			<?php
			}
			?>
		</div>
	</div>
	<script>
		jQuery(function(){
			jQuery(".touch-device #main_content").swipe( {
					swipeLeft:function(){location.href = '<?= $nextUrl ?>'},
					swipeRight:function(){location.href = '<?= $prevUrl ?>'},
					allowPageScroll:"auto"} );
		})
	</script>
	<div style='clear: both;'></div>
</div>
<?php
get_footer();
?>