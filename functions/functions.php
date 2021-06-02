<?php
/**
 * @package WordPress
 * @subpackage natoli
 */
global $natoli_unique_index;
$natoli_unique_index = 0;

function natoli_get_unique_id() {
	global $natoli_unique_index;
	return "id_".$natoli_unique_index++;
}

add_action("pre_get_posts", natoli_pre_get_posts);
function natoli_pre_get_posts($query) {
	if( !is_admin() && $query->is_main_query() )
	{
		$isProject = is_post_type_archive("project") || is_tax("project_type") || is_tax("phase") || is_tax("scope") || is_tax("location");
		$isNews = is_post_type_archive("news") || is_tax("news_category");
		 
		//
		// Get all posts for news or projects
		//
		if( $isProject || $isNews )
	    {
			$query->set( 'posts_per_page', -1 );
	    }
	}
	
	return $query;
}

function natoli_get_alt($attachment_id)
{
	$alt = trim(strip_tags( get_post_meta($attachment_id, '_wp_attachment_image_alt', true) ));
	
	if( empty( $alt ) )
	{
		$attachment = get_post($attachment_id);
		$alt = trim(strip_tags( $attachment->post_excerpt )); // If not, Use the Caption

		if( empty( $alt ) )
		{
			$alt = trim(strip_tags( $attachment->post_title )); // Finally, use the title
		}
	}
	
	return $alt;
}
?>