<?php

add_action( 'wp_enqueue_scripts', 'add_scripts_and_styles' );
add_action( 'widgets_init', 'twentyten_remove_recent_comments_style' );
add_action( 'admin_init','customize_meta_boxes' );
add_action( 'wp_before_admin_bar_render', 'remove_admin_bar_links' );
add_action( 'wp_dashboard_setup', 'hide_wp_welcome_panel' );

remove_filter( 'the_content', 'capital_P_dangit' ); // Get outta my Wordpress codez dangit!
remove_filter( 'the_title', 'capital_P_dangit' );
remove_filter( 'comment_text', 'capital_P_dangit' );

register_nav_menus( array( 'mainMenu' => __( 'Main menu', 'Natoli' )
						 , 'subMenu' => __( 'Sub menu', 'Natoli' )
						 , 'mobileFooter' => __( 'Mobile footer menu', 'Natoli' )
				  		 )
				  );


update_option('thumbnail_size_w', 340); // Used for project list view
update_option('thumbnail_size_h', 250);
update_option('thumbnail_crop', 1);

add_image_size('small_sidebar', 150, 150, 1);// Used for certification logos

update_option('medium_size_w', 330); // Used for right sidebar full width
update_option('medium_size_h', 9999);
update_option('medium_crop', 0);

update_option('large_size_w', 530); // User for news half sidebar
update_option('large_size_h', 9999);
update_option('large_crop', 0);

add_image_size('project', 640, 9999, 0);// Used for project detail
add_image_size('project_thumb', 80, 80, 1);// Used for project detail

if( is_admin() && !current_user_can('manage_options') ) {
	add_action('wp_dashboard_setup', 'remove_dashboard_widgets'); // Add action to hide dashboard widgets
	add_action('admin_head', 'configure_dashboard_menu'); // Add action to hide admin menu items
	add_action( "add_meta_boxes", "remove_redirect_box", 1000 );
} else if ( is_admin() ) {
	add_action('admin_head', 'configure_dashboard_menu_admin'); // Add action to hide admin menu items
}

add_theme_support('post-thumbnails');

add_editor_style("css/editor-style.css");

// Scripts and Styles
function add_scripts_and_styles() {
  wp_enqueue_style( 'main_style',
    get_stylesheet_directory_uri() . '/assets/css/site.css',
    '',
    wp_get_theme()->get('Version')
  );
  wp_enqueue_script( 'main_script',
    get_stylesheet_directory_uri() . '/assets/js/site.js',
    array('jquery'),
    wp_get_theme()->get('Version'),
    true
  );
}

function twentyten_remove_recent_comments_style() {
	global $wp_widget_factory;
	remove_action( 'wp_head', array( $wp_widget_factory->widgets['WP_Widget_Recent_Comments'], 'recent_comments_style' ) );
}

function customize_meta_boxes() {
	// Remove support from posts
	remove_post_type_support("post", "custom-fields");
	remove_post_type_support("post", "comments");
	remove_post_type_support("post", "trackbacks");
	remove_post_type_support("post", "author");
	// Remove support from pages
	remove_post_type_support("page", "custom-fields"); //Remove custom-fields Support
	remove_post_type_support("page", "comments");
	remove_post_type_support("page", "trackbacks");
	remove_post_type_support("page", "author");

	add_meta_box( 'tagsdiv-post_tag', 'Page Tags', 'post_tags_meta_box', 'page', 'side', 'low');
}

function remove_redirect_box() {
	remove_meta_box("edit-box-ppr", "page", "normal");
}

function remove_admin_bar_links() {
	global $wp_admin_bar;
	$wp_admin_bar->remove_menu('wp-logo');
	$wp_admin_bar->remove_menu('updates');
	$wp_admin_bar->remove_menu("appearance");
	//$wp_admin_bar->remove_menu('my-account');
	//$wp_admin_bar->remove_menu('site-name');
	//$wp_admin_bar->remove_menu('my-sites');
	//$wp_admin_bar->remove_menu('get-shortlink');
	//$wp_admin_bar->remove_menu('edit');
	//$wp_admin_bar->remove_menu('new-content');
	$wp_admin_bar->remove_menu('comments');
	//$wp_admin_bar->remove_menu('search');
}

function admin_bar_replace_howdy($wp_admin_bar) {
    $account = $wp_admin_bar->get_node('my-account');
    $replace = str_replace('Howdy,', 'Welcome,', $account->title);
    $wp_admin_bar->add_node(array('id' => 'my-account', 'title' => $replace));
}

function remove_dashboard_widgets() {
	global $wp_meta_boxes;

	unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_plugins']); // Plugins widget
	unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_primary']); // WordPress Blog widget
	unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_secondary']); // Other WordPress News widget
	unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_incoming_links']); // Incoming Links widget
	unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_recent_comments']); // Recent Comments widget
}

function configure_dashboard_menu() {
	global $menu,$submenu;

	global $current_user;
	get_currentuserinfo();

	remove_menu_page('index.php');
	remove_menu_page('edit.php');
	remove_menu_page('edit-comments.php');
	remove_menu_page('themes.php');

	//unset($menu[2]); // Dashboard
	//unset($menu[5]); // Posts
	//unset($menu[15]); // Links
	//unset($menu[25]); // Comments

	//unset($submenu['themes.php'][5]); // Themes
	//unset($submenu['themes.php'][12]); // Editor
}

function configure_dashboard_menu_admin() {
	global $menu,$submenu;

	global $current_user;
	get_currentuserinfo();

	//
	// Hide unused fields jetpack screws with index, use remove_menu_page instead
	//
	remove_menu_page('edit.php');
	remove_menu_page('edit-comments.php');
	//unset($menu[5]); // Posts
	//unset($menu[15]); // Links
	//unset($menu[25]); // Comments
}

function custom_menu_order($menu_ord) {
    if (!$menu_ord) return true;

    return array(
        'index.php', // Dashboard
        'separator1', // First separator
        'upload.php', // Media
        'edit.php?post_type=page', // Pages
        'edit.php?post_type=biography', // Biographies
        'edit.php?post_type=project', // Projects
        'edit.php?post_type=news', // News
        // Let the rest default to standard order
    );
}
add_filter('custom_menu_order', 'custom_menu_order'); // Activate custom_menu_order
add_filter('menu_order', 'custom_menu_order');

function hide_wp_welcome_panel() {
	if ( current_user_can( 'edit_theme_options' ) )
		$ah_clean_up_option = update_user_meta( get_current_user_id(), 'show_welcome_panel', false );
}

if( function_exists("register_options_page") )
{
	register_options_page("Options");
	register_options_page("Front Page");
}


add_filter( 'wp_nav_menu_objects', 'submenu_selected_only', 10, 2 );

function submenu_selected_only( $items, $args ) {

    if ( empty($args->submenuOnly) )
        return $items;

	$parent_id = array_pop( wp_filter_object_list( $items, array('current_item_parent'=>true), 'and', 'ID') );

	if( $parent_id == null )
	{
		$parent_id = array_pop( wp_filter_object_list( $items, array('current'=>true), 'and', 'ID') );

		if($parent_id == null )
		{
			return array();
		}
	}
    $children  = submenu_get_children_ids( $parent_id, $items );

    foreach ( $items as $key => $item ) {
        if ( ! in_array( $item->ID, $children ) )
            unset($items[$key]);
    }

    return $items;
}

function submenu_get_children_ids( $id, $items ) {

    $ids = wp_filter_object_list( $items, array( 'menu_item_parent' => $id ), 'and', 'ID' );

    foreach ( $ids as $id ) {

        $ids = array_merge( $ids, submenu_get_children_ids( $id, $items ) );
    }

    return $ids;
}

add_filter("query_vars", natoli_query_vars);
function natoli_query_vars($vars)
{
	$vars[] = "view";
	return $vars;
}
