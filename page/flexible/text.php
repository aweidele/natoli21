<?php
/**
 * Description: Flexible tagline
 * 
 * @package WordPress
 * @subpackage Natoli
 */
$content = get_sub_field("content", $currentId);
?>
<div id="<?= natoli_get_unique_id() ?>" class="wysiwyg-content flexible-content"><?= do_shortcode($content) ?></div>