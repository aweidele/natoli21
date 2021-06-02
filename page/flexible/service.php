<?php
/**
 * Description: Flexible tagline
 * 
 * @package WordPress
 * @subpackage Natoli
 */
$service = get_sub_field("service_type", $currentId);
$details = get_sub_field("details", $currentId);
?>
<div id="<?=natoli_get_unique_id()?>" class="service flexible-content">
	<h2 class="secondary"><?= $service ?></h2>
	<?= $details ?>
</div>
