<?php
/**
 * Description: Flexible tagline
 * 
 * @package WordPress
 * @subpackage Natoli
 */
$image = get_sub_field("image", $currentId);
?>
<div id="<?=natoli_get_unique_id()?>" class="image flexible-content">
	<div class="image">
		<img alt="<?= $image["alt"] ?>" src="<?= $image["sizes"]["medium"] ?>" />
	</div>
</div>
