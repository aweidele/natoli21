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

$leftOptions = [
  "container" => "#left-slider",
  "items" => 1,
  "slideBy" => "page",
  "autoplay" => true,
  "mode" => "gallery",
  "controls" => false,
  "autoplayTimeout" => 10000,
  "speed" => 1000
];
?>
<main class="front-page">
  <div class="front-page__container">
    <div class="front-page__container-left">
      <!-- LEFT SLIDER -->
      <div class="front-page__slider" id="left-slider" data-options='<?php echo JSON_ENCODE($leftOptions); ?>'>
      <?php
				while( has_sub_field("left_slides", "options") ) {
          $image = get_sub_field("image");
					$imageLandscape = get_sub_field("image_landscape");
					$focalX = get_sub_field("focal_x");
					$focalY = get_sub_field("focal_y");

					$landscapeFocalX = get_sub_field("landscape_focal_x");
					$landscapeFocalY = get_sub_field("landscape_focal_y");
      ?>
        <div class="front-page__slide">
          <?php if( $imageLandscape ) { ?>
          <img alt="<?= $image["alt"] ?>" src="<?=$image["url"]?>" class="portrait">
          <img alt="<?= $imageLandscape["alt"] ?>" src="<?=$imageLandscape["url"]?>" class="landsape">
          <?php } else { ?>
          <img alt="<?= $image["alt"] ?>" src="<?=$image["url"]?>">
          <?php } ?>
          <div class="front-page__slide-caption">
            HellOo!
          </div>
        </div>
      <?php
        }
      ?>
      </div>
    </div>
    <div class="front-page__container-right">
      Hello.
    </div>
  </div>
</main>
<?php
get_footer();
