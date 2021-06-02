<?php
/**
 * Description: Flexible tagline
 * 
 * @package WordPress
 * @subpackage Natoli
 */
$images = get_sub_field("images", $currentId);
?>
<div id="<?=natoli_get_unique_id()?>" class="gallery flexible-content">
	<?php
	foreach($images as $image)
	{
	?>
	<div class="image">
		<img alt="<?= $image["alt"] ?>" src="<?= $image["sizes"]["small_sidebar"] ?>" />
	</div>
	<?php
	}
	?>
	<div style="clear:both;"></div>
</div>
