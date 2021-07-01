<?php
/**
 * Description: Flexible tagline
 *
 * @package WordPress
 * @subpackage Natoli
 */
$content = get_sub_field("content", $currentId);
?>
<div class="page__copy"><?= do_shortcode($content) ?></div>
