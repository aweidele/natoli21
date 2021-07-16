<?php
/**
 * @package WordPress
 * @subpackage natoli
 */

 get_header();

 if( !isset($categoryId) )
 {
 	$categoryId = "";
 }
 setcookie("news_category",$categoryId,0,"/");

 $terms = get_terms("news_category");
 ?>
<main class="main" id="main">
  <div class="news">
    <div class="news__wrap">
      <div class="news__left">
        <nav class="news__filters">
          <ul>
            <li><a href="<?= get_post_type_archive_link("news") ?>" class="<?= $categoryId == "" ? "selected" : ""?>">All</a>
            <?php
              foreach($terms as $term) {
                $plural = get_field("plural_name", $term->id);

      					if( !$plural ) {
      						$plural = $term->name;
      					}
            ?>
            <li><a href="<?= get_term_link($term, "news_category") ?>" class="<?= $categoryId == $term->term_id ? "selected" : ""?>"><?= $plural ?></a></li>
            <?php } ?>
          </ul>
        </nav>
        <div class="news__list">
          <?php
          while(have_posts()) {
            the_post();
            $publication = get_field("publication_name");
				    $terms = wp_get_post_terms( $post->ID, "news_category" );
            $signature = get_field("signature");
          ?>
          <article class="news__item<?php if( $signature ) { echo " signature"; } ?>">
            <div class="news__tax">
              <?php foreach($terms as $term) { ?>
              <a href="<?= get_term_link($term) ?>"><?= $term->name ?></a>
              <?php } ?>
            </div>
            <h2><a href="<?= get_the_permalink() ?>"><?php the_title(); ?></a></h2>
            <div class="news__tags">
              <span><?php the_time( get_option( 'date_format' ) ); ?></span>
              <?php if( $publication ) { ?>
              <span><?php echo $publication; ?></span>
              <?php } ?>
            </div>
          </article>
          <?php } ?>
        </div>
      </div>
      <div class="news__main">
        <article class="news__article">
          The main article goes here.
        </div>
      </div>
    </div>
  <div>
</main>
<?php get_footer(); ?>
