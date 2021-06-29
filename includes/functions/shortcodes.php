<?php
/**
 * @package WordPress
 * @subpackage natoli
 */
function natoli_current_year()
{
	return date("Y");
}
add_shortcode('Year', 'natoli_current_year');

function natoli_site_map_link()
{
	return "<a href='#'>Site Map</a>";
}
add_shortcode('SiteMap', 'natoli_site_map_link');
?>