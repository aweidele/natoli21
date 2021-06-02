<?php
/**
 * Template Name: Redirect Parent Page
 * Description: No content, just redirects to first child page.
 * 
 * @package WordPress
 * @subpackage Natoli
 */
$page = get_queried_object();

$childPages = get_pages( array(
		'sort_column' => 'menu_order',
		'parent' => $page->ID, 
		'number' => 1
	));
	
if (sizeof($childPages) > 0) {
	header('Location: ' . get_permalink($childPages[0]));
} else {
	header('Location: /');
}
?>
