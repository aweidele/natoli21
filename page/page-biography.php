<?php
/**
 * Description: Inner default template
 * 
 * @package WordPress
 * @subpackage Natoli
 */
include( TEMPLATEPATH."/page/banner.php" );
?>
<div id="wrapper_<?= $currentId ?>" class="wrapper page-content">
	<div class="left-third flexible">
<?php
	include( TEMPLATEPATH."/page/tagline.php" );
?>
	</div>
	<div class="middle-right-thirds">
<?php
	$args = array('post_type'=>'biography', 'posts_per_page'=>-1);
	$query = new WP_Query($args);
	
	$count = 0;
	while($query->have_posts() )
	{
		$query->the_post();
		
		$currentId = $post->ID;
		$count++;

		$position = get_field("position");
		?>
		<div class="flexible <?= $query->post_count == $count ? '' : 'biography-wrapper' ?>">
			<div class="middle-third">
				<div class="flexible-content">
					<h1 class="primary uppercase"><?= the_title() ?></h1>
					<?php
					if( $position ) 
					{
						echo "<h2 class='secondary'>$position</h2>";
					}
					?>
					<span class="wysiwyg-content">
						<?php the_content(); ?>
					</span>
					<?php					
					while (has_sub_field("sections"))
					{
						switch( get_row_layout() )
						{
							case "key_projects":
								$projects = get_sub_field("projects");
								
								if($projects)
								{
									echo "<br/><h2 class='secondary'>Key Projects</h2>";
									
									foreach($projects as $project)
									{
										$noDetail = get_field("no_detail", $project->ID);
										
										if( $noDetail )
										{
											echo get_the_title($project);
											echo "<br/>";
										}
										else
										{
											?>
											<a href="<?= get_the_permalink($project) ?>">
												<?=	get_the_title($project) ?>
											</a>
											<br/>
											<?php
										}
									}
								}
								break;
							case "press":
								$first = true;
								while(has_sub_field("items"))
								{
									if( $first )
									{
										echo "<br/><h2 class='secondary'>Press</h2>";
										$first = false;
									}
									$news = get_sub_field("news");
									?>
									<a href="<?= get_the_permalink($news) ?>">
										<?=	get_the_title($news) ?>
									</a>
									<br/>
									<?php
								}
								break;
							case "text":
								$title = get_sub_field("title");
								$content = get_sub_field("content");
								
								if( $title || $content )
								{
									echo "<br/>";
								
									if( $title ) 
									{
										echo "<h2 class='secondary'>$title</h2>";
									}
									
									if( $content )
									{
										echo "<span class='wysiwyg-content'>" . do_shortcode($content) . "</span>";
									}
								}
								break;
						}
					}
					?>
				</div>
			</div>
			<div class="right-third mobile-hide">
				<?php
				include( TEMPLATEPATH."/page/flexible/flexible.php" );
				?>
			</div>
			<div class="bordered" style="clear:both;"></div>
		</div>		
		<?php
	}
	wp_reset_postdata();
?>
	</div>
	<div style="clear:both;"></div>
</div> 
