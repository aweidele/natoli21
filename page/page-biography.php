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
      <?php
      	$args = array('post_type'=>'biography', 'posts_per_page'=>-1);
      	$query = new WP_Query($args);

        while($query->have_posts() ) {
      		$query->the_post();
          $position = get_field("position");
          $currentId = $post->ID;
      ?>
      <div class="bio">
        <div class="bio__main">
          <h1 class="h3"><?php echo the_title(); ?></h1>
          <?php if($position) { ?>
          <div class="bio__title"><?php echo $position; ?></div>
          <?php } ?>
          <div class="copy">
            <?php the_content(); ?>
          </div>
        </div>
        <div class="bio__right mobile-hide">
          <?php include( TEMPLATEPATH."/page/components/flexible.php" ); ?>
        </div>
      </div>
      <?php
        }
      ?>
    </div>
  </div>
</div>
