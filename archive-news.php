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
        <?php
          $news = new WP_Query([
            "post_type"=>"news",
            "posts_per_page"=>1
          ]);
          if( $news->have_posts() ) : while( $news->have_posts() ) : $news->the_post();
          $featuredId = get_post_thumbnail_id( $post->ID );
          $publicationName = get_field("publication_name");
          $publicationUrl = get_field("publication_url");
          $relatedProjects = get_field("related_projects");
        ?>
        <article class="news__article">
          <?php
          if( $featuredId ) {
            $url = wp_get_attachment_image_src( $featuredId, "large" );
            $alt = natoli_get_alt( $featuredId );
            ?>
          <div class="news__image">
            <img src="<?= $url[0] ?>" alt="<?= $alt ?>" />
          </div>
            <?php
          }
          ?>
          <h1 class="h2"><?php the_title(); ?></h1>
          <div class="news__tags">
            <span><?php the_time( get_option( 'date_format' ) ); ?></span>
            <?php
              if( $publicationName ) {
                if( $publicationUrl ) {
            ?>
            <span><a href="<?php echo $publicationUrl; ?>" target="_blank"><?php echo $publicationName; ?></a></span>
            <?php } else { ?>
            <span><?php echo $publicationName; ?></span>
            <?php
                }
              } ?>
          </div>
          <div class="copy">
            <?php echo the_content(); ?>
          </div>
          <?php if( $relatedProjects ) { ?>
          <h2 class="h3">Related Projects</h2>
          <ul>
            <?php
              foreach( $relatedProjects as $project ) {
                $noDetail = get_field("no_detail", $project->ID);
            ?>
            <li><?php if( $noDetail ) { echo get_the_title($project); } else { ?><a href="<?= get_the_permalink($project) ?>"><?php echo get_the_title($project); ?></a><?php } ?></li>
            <?php } ?>
          </ul>
          <?php } ?>
        </article>
        <?php
          endwhile;
          endif;
        ?>
      </div>
    </div>
  <div>
</main>
<?php get_footer(); ?>
