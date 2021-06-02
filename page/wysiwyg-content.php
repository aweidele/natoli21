<?php
/**
 * Description: Flexible tagline
 * 
 * @package WordPress
 * @subpackage Natoli
 */
$content = get_field("content", $page->ID);
?>
<div id="<?= natoli_get_unique_id() ?>" class="wysiwyg-content flexible-content"><?= do_shortcode($content) ?></div>
