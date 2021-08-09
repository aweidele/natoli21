<?php
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
    <span><a href="<?php echo $publicationUrl;
    ?>" target="_blank"><?php echo $publicationName; ?></a></span>
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
