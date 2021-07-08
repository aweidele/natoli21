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
			include( TEMPLATEPATH."/page/components/gallery.php" );
			break;
		case "quotes":
			include( TEMPLATEPATH."/page/components/quotes.php" );
			break;
		case "image":
			include( TEMPLATEPATH."/page/components/image.php" );
			break;
		case "service":
			include( TEMPLATEPATH."/page/components/service.php" );
			break;
		case "text":
			include( TEMPLATEPATH."/page/components/text.php" );
			break;
	}
}
?>
