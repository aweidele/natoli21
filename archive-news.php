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
      <div class="news__list">
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
      </div>
      <div class="news__main">
        Main.
      </div>
    </div>
  <div>
</main>
<?php get_footer(); ?>
