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
?>
<div id="<?=$id?>" class="quotes flexible-content">
	<?php
	foreach($quotes as $quote)
	{
	?>
	<div class="quote">
		"<?= $quote["quote"] ?>"
		<div class="quote-author">
			&ndash;<?= $quote["author"] ?>
		</div>
	</div>
	<?php
	}
	?>
</div>
<?php
if( $slideshow )
{
	$delay = get_sub_field("initial_delay", $currentId);
	$timeout = get_sub_field("slide_delay", $currentId);
	$speed = get_sub_field("transition_speed", $currentId);
	?>
	<script>
		jQuery(function(){
			jQuery("#<?= $id ?>").natoliSlideShow({
				delay : <?= $delay ?>,
				timeout : <?= $timeout ?>,
				speed: <?= $speed ?>,
				slides: "> div",
				autoHeight: "calc"
			});
		});
	</script>
	<?php
}