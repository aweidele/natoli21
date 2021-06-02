<?php
/**
 * @package WordPress
 * @subpackage natoli
 */
$pages = get_posts(array(
        'post_type' => 'page',
		'meta_key' => '_wp_page_template',
		'meta_value' => 'page-biography.php',
		'posts_per_page' => -1
));

if( count($pages) > 0 )
{
	header('Location: ' . get_permalink($pages[0]));
}else
{
	header('Location: /');
}