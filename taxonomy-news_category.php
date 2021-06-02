<?php
/**
 * @package WordPress
 * @subpackage natoli
 */
$categoryId = get_queried_object_id();
 
//
// Check for default content in a page
//
$pages = get_pages( array( "meta_key"=>"news_category", "meta_value"=>$categoryId, "number"=>1 ) );

if( count($pages) > 0 )
{
	$firstPost = $pages[0];	
}

include( TEMPLATEPATH."/archive-news.php" );