<?php
/**
 * Description: Flexible processor
 * 
 * @package WordPress
 * @subpackage Natoli
 */
while( has_sub_field('right_flexible', $currentId) )
{
	switch( get_row_layout() )
	{
		case "gallery":
			include( TEMPLATEPATH."/page/flexible/gallery.php" );
			break;
		case "quotes":
			include( TEMPLATEPATH."/page/flexible/quotes.php" );
			break;
		case "image":
			include( TEMPLATEPATH."/page/flexible/image.php" );
			break;
		case "service":
			include( TEMPLATEPATH."/page/flexible/service.php" );
			break;
		case "text":
			include( TEMPLATEPATH."/page/flexible/text.php" );
			break;
	}
}
?>