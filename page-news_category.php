<?php
/**
 * Template Name: News Category Content
 * Description: Default content for a news category
 * 
 * @package WordPress
 * @subpackage Natoli
 */
$pageId = get_queried_object_id();
$term = get_field("news_category", $pageId);

if ($term) {
	header('Location: ' . get_term_link($term));
} else {
	header('Location: /');
}
?>
