<?php
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
  add_action( 'wp_enqueue_scripts', 'add_scripts_and_styles' );


  register_nav_menus( array( 'mainMenu' => __( 'Main menu', 'Natoli' )
		 , 'subMenu' => __( 'Sub menu', 'Natoli' )
		 , 'mobileFooter' => __( 'Mobile footer menu', 'Natoli' )
  		 )
  );


  function icon($name) {
    get_template_part('assets/icons/icon', $name.'.svg');
  }
