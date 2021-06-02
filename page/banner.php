<?php
/**
 * Description: Flexible page rendered.  3 columns
 * 
 * @package WordPress
 * @subpackage Natoli
 */
$type = get_field("banner_type", $page->ID);
$id = "banner_" . $page->ID;

$bannerSize = get_field("banner_height", $page->ID);
if(!$bannerSize)
{
	$bannerSize = 400;
}

if( $type == "slideshow" )
{
	$delay = get_field("initial_delay", $page->ID);
	$timeout = get_field("slide_delay", $page->ID);
	$speed = get_field("transition_speed", $page->ID);
	$slides = get_field("slides", $page->ID);
	
?>
	<script>
		jQuery(function(){
			jQuery("#<?= $id ?>").natoliSlideShow({
				delay : <?= $delay ?>,
				timeout : <?= $timeout ?>,
				speed: <?= $speed ?>
			});
		});
	</script>
	<div id="<?= $id ?>" class="banner" style="max-height: <?= $bannerSize ?>px;">
		<?php
			
			foreach( $slides as $image )
			{
				?>
				<img alt="<?= $image["alt"] ?>" src="<?=$image["url"]?>" />
				<?php
			}
		?>
	</div>
<?php
}
else if( $type == "map" )
{
	$map = get_field("map", $page->ID);
?>
	<div id="banner_map" class="banner mobile-sticky" style="height: <?= $bannerSize ?>px;"></div>
	<script>jQuery(function(){jQuery('#banner_map').natoliMap(<?= $map['lat'] ?>, <?= $map['lng'] ?>);});</script>
<?php
}
else
{
	$image = get_field("banner_image", $page->ID);
?>
	<div id="<?= $id ?>" class="banner" style="max-height: <?= $bannerSize ?>px;">
		<img alt="<?= $image["alt"] ?>" src="<?= $image["url"] ?>" />
	</div>	
<?php
}
?>