<?php
/**
 * Description: Inner default template
 *
 * @package WordPress
 * @subpackage Natoli
 */
include( TEMPLATEPATH."/page/components/banner.php" );
?>
<div class="page__wrapper">
  <div class="page__left">
    <?php include( TEMPLATEPATH."/page/components/tagline.php" ); ?>
  </div>
  <div class="page__middle">
    <?php include( TEMPLATEPATH."/page/components/copy.php" ); ?>
  </div>
  <div class="page__right">
    <?php include( TEMPLATEPATH."/page/components/flexible.php" ); ?>
  </div>
</div>
