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
  <div class="page__row">
    <div class="page__left col">
      <?php include( TEMPLATEPATH."/page/components/tagline.php" ); ?>
    </div>
    <div class="page__middle col">
      <?php include( TEMPLATEPATH."/page/components/copy.php" ); ?>
    </div>
    <div class="page__right col mobile-hide">
      <?php include( TEMPLATEPATH."/page/components/flexible.php" ); ?>
    </div>
  </div>
</div>
