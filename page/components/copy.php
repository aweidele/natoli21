<?php
/**
 * Description: Flexible tagline
 *
 * @package WordPress
 * @subpackage Natoli
 */
$content = get_field("content", $page->ID);
?>
<div class="page__copy"><?= do_shortcode($content) ?></div>
