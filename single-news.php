<?php
/**
 * @package WordPress
 * @subpackage natoli
 */
if( isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest' && isset($_REQUEST['ajax']) )
{
	the_post();
	include( TEMPLATEPATH."/news/single.php" );
	return;
}

$categoryId = "";
if( isset($_COOKIE["news_category"]) )
{
	$categoryId = $_COOKIE["news_category"];
}

//
// Save aside our post
//
$firstPost = get_queried_object();

$args = array( "post_type"=>"news", "posts_per_page"=>-1 );

if( $categoryId != "" )
{
	$args["tax_query"] = array( array( "taxonomy"=>"news_category", "terms"=>$categoryId ) );
}

query_posts( $args );

$thisIsReallyASinglePage = true;

include( TEMPLATEPATH."/archive-news.php" );
