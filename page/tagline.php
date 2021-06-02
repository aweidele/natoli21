<?php
/**
 * Description: Flexible tagline
 * 
 * @package WordPress
 * @subpackage Natoli
 */
$tagline = get_field("tagline", $page->ID);
?>
<div id="<?=natoli_get_unique_id()?>" class="tagline flexible-content"><?= $tagline ?></div>
