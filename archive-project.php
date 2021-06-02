<?php
/**
 * @package WordPress
 * @subpackage Natoli
 */
$view = get_query_var("view");

if(!$view)
{
	if( isset($_COOKIE["project_view"]) )
	{
		$view = $_COOKIE["project_view"];
	}
}

if($view != "list")
{
	$view = "grid";
}

$hiddenTypes = get_field("hidden_types", "options");

if(!$hiddenTypes)
{
	$hiddenTypes = array();
}

setcookie("project_view",$view,0,"/");
setcookie("back_to_project","$_SERVER[REQUEST_URI]",0,"/");

get_header();
?>
<div class="mobile-filters mobile-show">
	Filter Projects
</div>
<div class="mobile-filters-background"></div>
<div id="project_index" class="wrapper-full no-banner">
	<div class="view-toggle middle-content-full mobile-hide">
		<h2 class="secondary-small">
			<a href="<?= add_query_arg( "view", "grid" ) ?>" class="grid-view-icon <?= $view == "grid" ? "selected" : "" ?>"><span></span>Grid</a> 
			<a href="<?= add_query_arg( "view", "list" ) ?>" class="list-view-icon <?= $view == "list" ? "selected" : "" ?>"><span></span>List</a>
		</h2>
	</div>
	<div id="project-filters" class="project-filters left-third-plus side-fixed">
		<div class="inner-filters">
	<?php
		function natoli_project_render_taxonomy($tax, $label)
		{
			$terms = get_terms($tax);

			if( count($terms) > 0 )
			{
				?>
				<h2 class="secondary-small">Filter By <?= $label ?></h2>
				<ul class="filter">
					<?php
					foreach($terms as $term)
					{
						if( is_tax( $tax, $term->slug ) )
						{
							$selected = "selected";
							$url = get_post_type_archive_link("project");
						}
						else
						{
							$selected = "";
							$url = get_term_link($term);
						}
						
						echo "<li><a href='$url' class='filter-link $selected'>$term->name</a></li>";	
					}
					?>
				</ul>
				<?php
			}
		}
		
		natoli_project_render_taxonomy("project_type", "Type");
		//natoli_project_render_taxonomy("phase", "Phase");
		natoli_project_render_taxonomy("scope", "Scope");
	?>
		<a href="<?= get_post_type_archive_link( "project" ) ?>" class="<?= is_post_type_archive("project") ? 'selected' : '' ?>">View All Projects</a>
		</div>
	</div>
	<?php
	if( $view == "grid" )
	{
		echo "<div id='project-grid' class='project-grid middle-content-full'>";
		
		while(have_posts())
		{
			the_post();
			
			$noDetail = get_field("no_detail");
			$summaryDisplay = get_field("summary_display");
			
			if( $summaryDisplay == "list" )
			{
				continue;
			}
			
			$featuredId = get_post_thumbnail_id( $post->ID );
			?>
			<div class="grid-project">
			<?php			
			$signature = get_field("signature");
			
			if( $signature )
			{
				echo "<div class='signature-marker'></div>";
			}
			
			if( $featuredId )
			{
				$imageUrl = wp_get_attachment_image_src( $featuredId, "thumbnail" );
				$alt = natoli_get_alt( $featuredId );
				
				if( !$noDetail )
				{
					$overlayText = get_field("overlay_text");
					if( !$overlayText )
					{
						$overlayText = "View Project";
					}
					?>
					<a href="<?= get_the_permalink() ?>" class="project-link next-link" data-project-id="<?= $post->ID ?>">
						<img alt="<?= $alt ?>" src="<?= $imageUrl[0] ?>" />
						<div class="overlay mobile-hide"><div class="cell"><?= $overlayText ?></div></div>
					</a>
					<?php
				}
				else
				{
					?>
					<div class="project-link">
						<img alt="<?= $alt ?>" src="<?= $imageUrl[0] ?>" />
					</div>
					<?php
				}
			}	
			$types = wp_get_post_terms( $post->ID, "project_type");
			$locations = wp_get_post_terms( $post->ID, "location");
			
			$first = true;
			?>
			<div class="excerpt">
				<div class="title">
					<?php
					if( !$noDetail )
					{
					?>
						<a href="<?= get_the_permalink() ?>"><?= get_the_title() ?></a>
					<?php
					}
					else
					{
						the_title();
					}
					?>
				</div>
				<?php
				if( count($locations) > 0 )
				{
					$location = $locations[0];
					$locationUrl = get_term_link($location);
					echo "<a href='$locationUrl'>$location->name</a>";
					$first = false;
				}
				
				foreach($types as $type)
				{
					if( in_array($type->term_id, $hiddenTypes ) )
					{
						continue;
					}
					
					if($first)
					{
						$first = false;
					}
					else
					{
						echo "&#160;|&#160;";
					}
					$url = get_term_link($type);
					echo "<a href='$url' class='filter-link'>$type->name</a>";
				}
				?>
			</div>
		</div>
		<?php
		}
		
		echo "</div>";
	}
	else
	{
		$sort = isset($_COOKIE["project-sort"]) ? $_COOKIE["project-sort"] : "name";
		$descending = isset($_COOKIE["project-sort-direction"]) ? $_COOKIE["project-sort-direction"] : "descending";  
		?>
		<div id="project-list" class="project-list middle-content mobile-hide">
			<table>
				<thead>
					<th class="list-name"><a href="#" class="<?= $sort == "name" ? "selected ".$descending : "" ?>" data-sort-by="name">Project Name</a></th>
					<th class="list-location"><a href="#" class="<?= $sort == "location" ? "selected ".$descending : "" ?>" data-sort-by="location">Location</a></th>
					<th class="list-type"><a href="#" class="<?= $sort == "project-type" ? "selected ".$descending : "" ?>" data-sort-by="project-type">Type</a></th>
					<th class="list-scope"><a href="#" class="<?= $sort == "scope" ? "selected ".$descending : "" ?>" data-sort-by="scope">Scope</a></th>
				</thead>
				<tbody>
				<?php
				function natoli_render_taxonomy_cell($terms, $tax, $skipList = array())
				{
					$response = "";
					foreach($terms as $term)
					{
						if( in_array($term->term_id, $skipList ) )
						{
							continue;
						}
					
						$url = get_term_link($term);
						$response .= "<a href='$url' class='filter-link'>$term->name</a><br/>";
					}
					return $response;
				}
								
				function natoli_get_names($term){
					return $term->name;
				}
				
				while(have_posts())
				{
					the_post();
					
					$noDetail = get_field("no_detail");
					$summaryDisplay = get_field("summary_display");
					
					if( $summaryDisplay == "grid" )
					{
						continue;
					}
					
					$locations = wp_get_post_terms($post->ID, "location");
					$types = wp_get_post_terms($post->ID, "project_type");
					$scopes = wp_get_post_terms($post->ID, "scope");
					?>
					<tr data-sort-name="<?= get_the_title() ?>" 
						data-sort-location="<?= implode(" ", array_map("natoli_get_names", $locations)) ?>"
						data-sort-project-type="<?= implode(" ", array_map("natoli_get_names", $types)) ?>"
						data-sort-scope="<?= implode(" ", array_map("natoli_get_names", $scopes)) ?>"
						>
						<td style="position: relative">
							<?php
							$signature = get_field("signature");
							
							if( $signature )
							{
								echo "<div class='signature-marker-small'></div>";
							}
							
							if( !$noDetail )
							{
							?>
								<a href="<?= get_the_permalink() ?>" class="next-link" data-project-id="<?= $post->ID?>"><?= get_the_title() ?></a>
							<?php
							}
							else
							{
								the_title();
							}
							?>
						</td>
						<td><?= natoli_render_taxonomy_cell($locations, "location") ?></td>
						<td><?= natoli_render_taxonomy_cell($types, "project_type", $hiddenTypes) ?></td>
						<td><?= natoli_render_taxonomy_cell($scopes, "scope") ?></td>
					</tr>
					<?php						
				}
				?>
				</tbody>
			</table>
		</div>
		<script>
		jQuery("#project-list").natoliMobileRedirect( "<?= add_query_arg( "view", "grid", get_post_type_archive_link("project") ) ?>" );
		</script>
		<?php	
	}
	
	$url = "null";
	if( $view != "grid" )
	{
		$url = "'" . add_query_arg( "view", "grid" ) . "'";
	}
	?>
	<script>
	jQuery("#project_index .view-toggle").natoliProjectMobileWatch( <?= $url ?> );
	</script>
	</div>
</div>
<?php
get_footer();
?>