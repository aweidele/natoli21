<?php
/**
 * @package WordPress
 * @subpackage Natoli
 */
get_header();

$leftDelay = get_field("left_initial_delay", "options");
$leftTimeout = get_field("left_slide_delay", "options");
$leftSpeed = get_field("left_transition_speed", "options");
$rightDelay = get_field("right_initial_delay", "options");
$rightTimeout = get_field("right_slide_delay", "options");
$rightSpeed = get_field("right_transition_speed", "options");
$taglineDelay = get_field("tagline_initial_delay", "options");
$taglineTimeout = get_field("tagline_slide_delay", "options");
$taglineSpeed = get_field("tagline_transition_speed", "options");
?>
	<script>
		jQuery(function(){
			jQuery("#leftSlideShow").natoliSlideShow({
				delay : <?= $leftDelay ?>,
				timeout : <?= $leftTimeout ?>,
				speed: <?= $leftSpeed ?>,
				slides: "> .slide-wrap"
			});
			jQuery("#rightSlideShow").natoliSlideShow({
				delay : <?= $rightDelay ?>,
				timeout : <?= $rightTimeout ?>,
				speed: <?= $rightSpeed ?>,
				slides: "> .slide-wrap"
			});
			jQuery("#taglineSlideShow").natoliSlideShow({
				delay : <?= $taglineDelay ?>,
				timeout : <?= $taglineTimeout ?>,
				speed: <?= $taglineSpeed ?>,
				slides: "> .tagline-wrap"
			});
			jQuery("#outerSlideShow").natoliSlideSize();
			jQuery(".slide-wrap img").natoliImageConstrain();
		});
	</script>
	<div id="outerSlideShow">
		<div id="leftSlideShow">
			<?php
				while( has_sub_field("left_slides", "options") )
				{
					$image = get_sub_field("image");
					$imageLandscape = get_sub_field("image_landscape");
					$focalX = get_sub_field("focal_x");
					$focalY = get_sub_field("focal_y");

					$landscapeFocalX = get_sub_field("landscape_focal_x");
					$landscapeFocalY = get_sub_field("landscape_focal_y");

					if( !$imageLandscape )
					{
						$imageLandscape = $image;
						$landscapeFocalX = $focalX;
						$landscapeFocalY = $focalY;
					}
					$ratio = $image["height"] / $image["width"];
					$ratioLandscape = $imageLandscape["height"] / $imageLandscape["width"];
					$project = get_sub_field("project");
					?>
					<div class="slide-wrap">
						<img alt="<?= $image["alt"] ?>" src="<?=$image["url"]?>" class="portrait" data-ratio="<?= $ratio ?>" data-focalx="<?= $focalX ?>" data-focaly="<?= $focalY ?>"/>
						<img alt="<?= $imageLandscape["alt"] ?>"  src="<?=$imageLandscape["url"]?>" class="landscape" data-ratio="<?= $ratioLandscape ?>"  data-focalx="<?= $landscapeFocalX ?>" data-focaly="<?= $landscapeFocalY ?>"/>
						<?php
						if( $project )
						{
							?>
							<a href="<?= get_permalink($project->ID) ?>" class="go-to-project">
								<div class="project-title"><?= $project->post_title ?></div>
								Go to Project &gt;
							</a>
							<?php
						}
						?>
					</div>
					<?php
				}
			?>
		</div>
		<div id="rightSlideShow">
			<div id="taglineSlideShow">
				<?php
					while( has_sub_field("taglines", "options") )
					{
						$tagline = get_sub_field("tagline");
						$link = get_sub_field("link");
						$linkObject = get_sub_field("link_object");
						?>
						<div class="tagline-wrap">
							<div class="tagline">
								<div class="inner">
									<?= $tagline ?>
									<a href="<?= $linkObject ?>" class="call-to-action">
										<?= $link ?>
									</a>
								</div>
							</div>
						</div>
						<?php
					}
				?>
			</div>
			<?php
				while( has_sub_field("right_slides", "options") )
				{
					$image = get_sub_field("image");
					$overlay = get_sub_field("overlay");
					$imageLandscape = get_sub_field("image_landscape");
					$focalX = get_sub_field("focal_x");
					$focalY = get_sub_field("focal_y");

					$landscapeFocalX = get_sub_field("landscape_focal_x");
					$landscapeFocalY = get_sub_field("landscape_focal_y");

					if( !$imageLandscape )
					{
						$imageLandscape = $image;
						$landscapeFocalX = $focalX;
						$landscapeFocalY = $focalY;
					}
					$ratio = $image["height"] / $image["width"];
					$ratioLandscape = $imageLandscape["height"] / $imageLandscape["width"];
					?>
					<div class="slide-wrap">
						<img alt="<?= $image["alt"] ?>" src="<?=$image["url"]?>" class="portrait" data-ratio="<?= $ratio ?>" data-focalx="<?= $focalX ?>" data-focaly="<?= $focalY ?>"/>
						<img alt="<?= $imageLandscape["alt"] ?>" src="<?=$imageLandscape["url"]?>" class="landscape" data-ratio="<?= $ratioLandscape ?>" data-focalx="<?= $landscapeFocalX ?>" data-focaly="<?= $landscapeFocalY ?>"/>
						<div class="tagline" style="background-color:<?= $overlay ?>;background-color:rgba(<?= hexdec(substr($overlay, 1,2)) ?>,<?= hexdec(substr($overlay, 3,2)) ?>, <?= hexdec(substr($overlay, 5,2)) ?>, 0.2);">
						</div>
					</div>
					<?php
				}
			?>
		</div>
	</div>
	<div style="clear:both;"></div>
	<div class="mobile-hp">
		<div class="mobile-hp-left">
		<?php while( has_sub_field("left_slides", "options") ) {
			$image = get_sub_field("image");
			$project = get_sub_field("project");
		?>
			<figure>
				<img alt="<?= $image["alt"] ?>" src="<?=$image["url"]?>">
			</figure>
			<?php
			if( $project )
			{
				?>
				<div class="mobile-hp-project-link">
					<a href="<?= get_permalink($project->ID) ?>" class="go-to-project">
						<div class="project-title"><?= $project->post_title ?></div>
						Go to Project &gt;
					</a>
				</div>
				<?php
			}
			?>
		<?php
			break;
		} ?>
		</div>
		<div class="mobile-hp-right">
		<?php while( has_sub_field("right_slides", "options") ) {
			$image = get_sub_field("image");
		?>
			<figure>
				<img alt="<?= $image["alt"] ?>" src="<?=$image["url"]?>">
			</figure>
		<?php
			break;
		}
		while( has_sub_field("taglines", "options") ) {
			$tagline = get_sub_field("tagline");
			$link = get_sub_field("link");
			$linkObject = get_sub_field("link_object");
		?>
			<div class="mobile-hp-tagline">
				<div>
					<?= $tagline ?>
				</div>
				<div>
					<a href="<?= $linkObject ?>" class="call-to-action">
						<?= $link ?>
					</a>
				</div>
			</div>
		<?php
			break;
		} ?>
		</div>
	</div>
	<?php wp_nav_menu( array( 'theme_location' => 'mobileFooter', 'container' => 'nav', 'container_class' => 'mobile-link', 'depth' => 1 ) ); ?>
<?php
get_footer();
?>
