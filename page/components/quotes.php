<?php
/**
 * Description: Flexible tagline
 *
 * @package WordPress
 * @subpackage Natoli
 */
$slideshow = get_sub_field("slideshow", $currentId);
$quotes = get_sub_field("quotes", $currentId);
$id = natoli_get_unique_id();

if($slideshow) {
  $delay = get_sub_field("initial_delay", $currentId);
	$timeout = get_sub_field("slide_delay", $currentId);
	$speed = get_sub_field("transition_speed", $currentId);

  $options = [
    "container" => "#".$id,
    "items" => 1,
		"slideBy" => "page",
		"autoplay" => true,
		// "mode" => "gallery",
		"controls" => false,
		"autoplayTimeout" => $timeout,
		"speed" => $speed,
    "autoHeight" => false
  ];
}
?>
<div class="quotes">
  <?php if($slideshow) { ?>
  <div id="<?php echo $id; ?>" class="natoli-slider" data-options='<?php echo JSON_ENCODE($options); ?>'>
  <?php } ?>
  <?php foreach($quotes as $quote) { ?>
    <div class="quotes__quote">
      <blockquote cite="<?php echo $quote["author"]; ?>">
        <p>“<?php echo $quote["quote"]; ?>”</p>
        <div class="quotes__author">— <?php echo $quote["author"]; ?></div>
      </blockquote>
    </div>
  <?php } ?>
  <?php if($slideshow) { ?>
  </div>
  <?php } ?>
</div>
