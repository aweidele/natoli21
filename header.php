<?php
/**
 * @package WordPress
 * @subpackage natoli
 */
?><!DOCTYPE html>
<!--[if lt IE 7 ]> <html <?php language_attributes(); ?> class="ie6"> <![endif]-->
<!--[if IE 7 ]>    <html <?php language_attributes(); ?> class="ie7"> <![endif]-->
<!--[if IE 8 ]>    <html <?php language_attributes(); ?> class="ie8"> <![endif]-->
<!--[if IE 9 ]>    <html <?php language_attributes(); ?> class="ie9"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--> <html <?php language_attributes(); ?>> <!--<![endif]-->

<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta http-equiv="X-UA-Compatible" content="chrome=1">
	
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
	<link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/images/favicon.ico">
	
	<link rel="profile" href="http://gmpg.org/xfn/11" />
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
	
	<?php wp_head(); ?>
		<script>
			jQuery(function(){
		    	var $window = jQuery(window);
				jQuery('#menu-main-menu').slicknav({
				    prependTo: "#header .wrapper",
				    label: "",
				    joinMenu: "#menu-sub-menu",
				    open: function(trigger){
				    	var $me = jQuery(".slicknav_nav");
				    	
				    	function resizeMe(){
				    		$me.css("height", $window.height() - jQuery("#header").outerHeight() );
				    	}
				    	$window.on("resize.slicknav", resizeMe);
				    	resizeMe();
				    	
				    	jQuery(".mobile-filters").addClass("lower-me");
				    },
				    close: function(trigger){
				    	$window.off("resize.slicknav");
				    	jQuery(".mobile-filters").removeClass("lower-me");
				    }
				});
			});
		</script>
		<!--[if lt IE 9]>
	    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	    <?php
	    if( is_front_page() || is_page( "contact" ) )
	    {
	    ?>
	    <script src="<?php echo get_template_directory_uri(); ?>/js/respond.min.js"></script>
	    <?php
	    }
	    else
	    {
	    ?>
	    <script src="<?php echo get_template_directory_uri(); ?>/js/css3-mediaqueries.js"></script>
	    <?php
	    }
	    ?>
	    <![endif]-->
	</head>
	<?php
		$facebookUrl = get_field("facebookUrl", "options");
		$twitterUrl = get_field("twitterUrl", "options");
		$tagline = get_field("tagline", "options");
		$logoImageId = get_field("logo", "options");
		$univers55 = get_field("univers55", "options") ? 'univers-55' : '';
		
		$detect = new Mobile_Detect;
		$bodyClass = $detect->isMobile() ? 'touch-device ' : '';
	?>
	<body <?php body_class($bodyClass . $univers55); ?>>
		<header class="fixed-header">
			<div class="pre-header mobile-hide">
				<div class="wrapper">
					<div class="header-tagline"><?= $tagline ?></div>
					<form method="get" id="searchform" action="<?php echo esc_url( home_url( '/' ) ); ?>" role="search">
						<?php
						$search = esc_attr( get_search_query() );
						?>
						<input type="text" name="s" value="<?= $search ?>" id="s" placeholder="Search"/>
					</form>
					<a href="<?= $twitterUrl ?>" class="twitter"></a>
					<a href="<?= $facebookUrl ?>" class="facebook"></a>
				</div>
			</div>
			<div id="header" class="header">
				<div class="wrapper">
					<a id="logo" href="<?php echo esc_url( home_url( '/' ) ); ?>">
						<?php
							$logo = wp_get_attachment_image_src($logoImageId, "full");
							$alt = natoli_get_alt($logoImageId);
						?>
						<img src="<?=$logo[0]?>" alt="<?= $alt ?>" />
					</a>
					<?php wp_nav_menu( array( 'theme_location' => 'mainMenu', 'container' => 'nav', 'container_class' => 'main-menu mobile-hide', 'depth' => 1 ) ); ?>
					<?php wp_nav_menu( array( 'theme_location' => 'subMenu', 'container' => 'nav', 'container_class' => 'secondary-menu mobile-hide' ) ); ?>
				</div>
			</div>
			<div class="subheader mobile-hide">
				<div class="wrapper">
					<?php wp_nav_menu( array( 'theme_location' => 'mainMenu', 'container' => 'nav', 'container_class' => 'child-menu', 'submenuOnly' => 1 ) ); ?>
					<div style="clear: both;"></div>
				</div>
			</div>
		</header>
		<div id="main_content" class="main-content full-size-height">