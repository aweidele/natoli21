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

	$options = [
		"container" => "#".$id,
		"items" => 1,
		"slideBy" => "page",
		"autoplay" => true,
		"mouseDrag" => true,
		"mode" => "gallery",
		"controls" => false,
		"animateDelay" => 3000
	];
?>
  <header>
		<div class="banner" style="max-height: <?php echo $bannerSize; ?>px">
			<div class="natoli-slider" id="<?php echo $id; ?>" data-options='<?php echo JSON_ENCODE($options); ?>'>
				<?php foreach($slides as $slide) { ?>
					<div><figure><img src="<?php echo $slide["url"]; ?>" alt="<?php echo $slide["alt"]; ?>"></figure></div>
				<?php } ?>
			</div>
		</div>

		<!-- <pre><?php //print_r($slides); ?></pre> -->
  </header>
<?php
}
?>
