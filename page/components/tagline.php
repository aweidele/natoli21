<?php
/**
 * Description: Flexible tagline
 *
 * @package WordPress
 * @subpackage Natoli
 */
$tagline = get_field("tagline", $page->ID);
?>
  <div class="page__tagline">
    <h2><?php echo $tagline; ?></h2>
  </div>
