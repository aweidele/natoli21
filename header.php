<?php
/**
 * @package WordPress
 * @subpackage natoli
 */

  $facebookUrl = get_field("facebookUrl", "options");
	$twitterUrl = get_field("twitterUrl", "options");
	$tagline = get_field("tagline", "options");
	$logoImageId = get_field("logo", "options");
?>
<!DOCTYPE HTML>
<html>
<head>
  <title><?php
  	/*
  	 * Print the <title> tag based on what is being viewed.
  	 */
  	global $page, $paged;

  	wp_title( '|', true, 'right' );

  	// Add the blog name.
  	bloginfo( 'name' );

  	// Add the blog description for the home/front page.
  	$site_description = get_bloginfo( 'description', 'display' );
  	if ( $site_description && ( is_home() || is_front_page() ) )
  		echo " | $site_description";

  	// Add a page number if necessary:
  	if ( $paged >= 2 || $page >= 2 )
  		echo ' | ' . sprintf( __( 'Page %s', 'natoli' ), max( $paged, $page ) );

  	?></title>
    <meta name="author" content="">
  	<!--  Mobile Viewport Fix -->
  	<meta id="viewport" name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">

  	<!-- Place favicon.ico and apple-touch-icons in the images folder -->
  	<!-- <link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/images/favicon.ico"> -->

  	<link rel="profile" href="http://gmpg.org/xfn/11" />
  	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
<?php wp_head(); ?>
</head>
<body>
  <header class="main-header">
    <div>
      <div class="main-header__logo">
        <h1>
          <a href="<?php echo esc_url( home_url( '/' ) ); ?>">
            <?php
  						$logo = wp_get_attachment_image_src($logoImageId, "full");
  					?>
  					<img src="<?=$logo[0]?>" alt="<?= $alt ?>" />
            <span class="sr-only"><?php bloginfo( 'name' ); ?></span>
          </a>
        </h1>
      </div>
      <div class="main-header__content">
        <div class="main-header__top-bar">
          <div class="main-header__tagline"><?= $tagline ?></div>
          <form method="get" id="searchform" class="main-header__search" action="<?php echo esc_url( home_url( '/' ) ); ?>" role="search">
						<?php
						$search = esc_attr( get_search_query() );
						?>
						<input type="text" name="s" value="<?= $search ?>" id="s" placeholder="Search"/>
					</form>
          <?php if($facebookUrl) { ?><a href="<?= $facebookUrl ?>" class="facebook"><?php icon('facebook'); ?><span class="sr-only">Facebook</span></a><?php } ?>
          <?php if($twitterUrl) { ?><a href="<?= $twitterUrl ?>" class="twitter"><?php icon('twitter'); ?><span class="sr-only">Twitter</span></a><?php } ?>
        </div>
        <button data-action="main-menu-bar" class="main-header__toggle" aria-label="Menu">
          <span></span>
        </button>
        <div id="main-menu-bar" class="main-header__menu-bar">
          <?php wp_nav_menu( array( 'theme_location' => 'mainMenu', 'container' => 'nav', 'container_class' => 'main-menu', 'depth' => 1 ) ); ?>
      		<?php wp_nav_menu( array( 'theme_location' => 'subMenu', 'container' => 'nav', 'container_class' => 'secondary-menu' ) ); ?>
        </div>
      </div>
    </div>
  </header>
