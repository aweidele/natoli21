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


function natoli_render_text_field($field, $label)
{
	$content = get_field($field);

	if($content)
	{
		echo "<section>";
		echo "<h2 class='h4'>$label</h2>";
		echo "<div>$content</div>";
		echo "</section>";
	}
}

function natoli_render_terms($postId, $tax, $label, $inline = false)
{
	$terms = wp_get_post_terms( $postId, $tax);

	if($terms && count($terms) > 0 )
	{
		echo "<section>";
		echo "<h2 class='h4'>$label</h2>";

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
		echo "</section>";
	}
}

function natoli_render_links($field, $label, $checkNoDetail = false)
{
	$posts = get_field($field);

	if( $posts )
	{
		echo "<section>";
		echo "<h2 class='h4'>$label</h2>";

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
		echo "</section>";
	}
}

?>
<main class="main" id="main">
  <div class="project-detail">
    <div>
      <div class="project-detail__left">
        <?php
          if($slideshow) {
            $options = [
          		"container" => "#project-slider",
          		"items" => 1,
          		"slideBy" => "page",
          		"autoplay" => true,
          		"mode" => "gallery",
          		"controls" => true,
          		"autoplayTimeout" => 3000,
              "navAsThumbnails" => true
          	];

          ?>
          <div class="project-detail__slideshow">
            <div class="natoli-slider desktop-only" id="project-slider" data-options='<?php echo JSON_ENCODE($options); ?>'>
              <?php foreach($slideshow as $slide) { ?>
                <div><img alt="<?= $slide["alt"] ?>" src="<?= $slide["sizes"]["project"] ?>"></div>
              <?php } ?>
            </div>
            <div class="natoli-slider-nav project-detail__slideshow-nav mobile-hide">
              <?php foreach($slideshow as $slide) { ?>
              <button><img alt="<?= $slide["alt"] ?>" src="<?= $slide["sizes"]["project_thumb"] ?>"/></button>
              <?php } ?>
            </div>
          </div>
        <?php } ?>
        <?php if($gallery) { ?>
        <div class="project-detail__gallery mobile-hide">
        <?php foreach($gallery as $image) { ?>
          <img alt="<?= $image["alt"] ?>" src="<?= $image["sizes"]["project"] ?>" />
        <?php } ?>
        </div>
        <?php } ?>
      </div>
      <div class="project-detail__right">
        <div class="copy">

          <h1 class="h2"><?php the_title(); ?></h1>
          <?php
      		if( count($locations) > 0 ) {
      			$location = $locations[0];
      			$locationUrl = get_term_link($location);
      			echo "<div class='location'><a href='$locationUrl'>$location->name</a></div>";
      		}
      		?>
          <?php the_content(); ?>
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
      			echo "<section>";
      			echo "<h2 class='h4'>Other Related Projects</h2>";

      			$url = get_term_link($terms[0]) . "?view=list";

      			echo "<div>";
      			echo "<a href='$url' class='filter-link'>View List</a>";
      			echo "</div>";
      			echo "</section>";
      		}
      		?>

          <div class="project-detail__navigation">
            <a href="<?= $backUrl ?>">
              Back to Projects
            </a>
            <?php
            if( $nextUrl )
            {
            ?>
              <a href="<?= $nextUrl ?>">
                Next Project
              </a>
            <?php
            }
            ?>
          </div>

        </div>
      </div>
    </div>
  </div>
 </main>
<?php
get_footer();
