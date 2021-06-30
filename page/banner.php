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
  <header>
    This is the banner
  </header>
<?php
}
?>
