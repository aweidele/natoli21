<?php
/**
 * @package WordPress
 * @subpackage natoli
 */
add_action("init", "natoli_load_post_types");
 
function natoli_build_labels( $singular, $plural )
{
	return array(
        'name'                          => $plural,
        'singular_name'                 => $singular,
        'search_items'                  => "Search $plural",
        'popular_items'                 => "Popular $plural",
        'all_items'                     => "All $plural",
        'parent_item'                   => "Parent $singular",
        'edit_item'                     => "Edit $singular",
        'update_item'                   => "Update $singular",
        'add_new_item'                  => "Add New $singular",
        'new_item'  		            => "New $singular",
        'view_item'  		            => "View $singular",
        'not_found'						=> "No $plural found",
        'not_found_in_trash'			=> "No $plural found in trash",
        'separate_items_with_commas'    => "Separate $plural with commas",
        'add_or_remove_items'           => "Add or remove $plural",
        'choose_from_most_used'         => "Choose from most used $plural"
    );
}
 
function natoli_load_post_types() {
	natoli_load_biography();
	natoli_load_news();
	natoli_load_project();
}

function natoli_load_biography(){
	
	$biography_args = array(
        'label'                         => 'Biography',
        'labels'                        => natoli_build_labels('Biography', 'Biographies'),
        'public'                        => true,
        'hierarchical'                  => false,
        'show_ui'                       => true,
        'menu_position'					=> 22,
        'rewrite'                       => array( 'slug' => 'biography', 'with_front' => true ),
        'has_archive'					=> false,
        'supports'						=> array( 'title', 'editor'),
        'show_in_nav_menus'				=> true
    );

	register_post_type( 'biography', $biography_args );
}

function natoli_load_news(){
    $news_category_args = array(
        'label'                         => 'News Categories',
        'labels'                        => natoli_build_labels('News Category', 'News Categories'),
        'public'                        => true,
        'hierarchical'                  => true,
        'show_ui'                       => true,
        'show_in_nav_menus'             => true,
        'query_var'                     => false,
        'show_admin_column'				=> true,
        'rewrite'						=> array( 'slug' => 'news/type', 'with_front' => false ),
    );

    register_taxonomy( 'news_category', 'news', $news_category_args );
    
    $news_args = array(
        'label'                         => 'News',
        'labels'                        => natoli_build_labels('News', 'News'),
        'public'                        => true,
        'hierarchical'                  => false,
        'show_ui'                       => true,
        'menu_position'					=> 24,
        'rewrite'                       => array( 'slug' => 'news', 'with_front' => true ),
        'has_archive'					=> true,
        'supports'						=> array( 'title', 'editor', 'thumbnail'),
        'show_in_nav_menus'				=> false
    );

	register_post_type( 'news', $news_args );	
}

function natoli_load_project(){
    $project_type_args = array(
        'label'                         => 'Types',
        'labels'                        => natoli_build_labels('Type', 'Types'),
        'public'                        => true,
        'hierarchical'                  => true,
        'show_ui'                       => true,
        'show_in_nav_menus'             => false,
        'query_var'                     => false,
        'show_admin_column'				=> true,
    );

    register_taxonomy( 'project_type', 'project', $project_type_args );
    
    $project_phase_args = array(
        'label'                         => 'Phase',
        'labels'                        => natoli_build_labels('Phase', 'Phases'),
        'public'                        => true,
        'hierarchical'                  => true,
        'show_ui'                       => true,
        'show_in_nav_menus'             => false,
        'query_var'                     => false,
        'show_admin_column'				=> true,
    );

    register_taxonomy( 'phase', 'project', $project_phase_args );
    
    $project_scope_args = array(
        'label'                         => 'Scope',
        'labels'                        => natoli_build_labels('Scope', 'Scopes'),
        'public'                        => true,
        'hierarchical'                  => true,
        'show_ui'                       => true,
        'show_in_nav_menus'             => false,
        'query_var'                     => false,
        'show_admin_column'				=> true,
    );

    register_taxonomy( 'scope', 'project', $project_scope_args );
    
    $project_location_args = array(
        'label'                         => 'Location',
        'labels'                        => natoli_build_labels('Location', 'Locations'),
        'public'                        => true,
        'hierarchical'                  => true,
        'show_ui'                       => true,
        'show_in_nav_menus'             => false,
        'query_var'                     => false,
        'show_admin_column'				=> true,
    );

    register_taxonomy( 'location', 'project', $project_location_args );
     
    $project_tag_args = array(
        'label'                         => 'Tag',
        'labels'                        => natoli_build_labels('Tag', 'Tags'),
        'public'                        => true,
        'hierarchical'                  => false,
        'show_ui'                       => true,
        'show_in_nav_menus'             => false,
        'query_var'                     => false,
        'show_admin_column'				=> false,
    );

    register_taxonomy( 'project_tag', 'project', $project_tag_args );
    
    $project_args = array(
        'label'                         => 'Projects',
        'labels'                        => natoli_build_labels('Project', 'Projects'),
        'public'                        => true,
        'hierarchical'                  => false,
        'show_ui'                       => true,
        'menu_position'					=> 15,
        'rewrite'                       => array( 'slug' => 'projects', 'with_front' => true ),
        'has_archive'					=> true,
        'supports'						=> array( 'title', 'editor', 'thumbnail'),
        'show_in_nav_menus'				=> false
    );

	register_post_type( 'project', $project_args );	
}
?>