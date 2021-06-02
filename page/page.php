<?php
/**
 * Description: Inner default template
 *
 * @package WordPress
 * @subpackage Natoli
 */
include( TEMPLATEPATH."/page/banner.php" );
?>
<div id="wrapper_<?= $currentId ?>" class="wrapper page-content">
	<div class="left-third flexible">
<?php
	include( TEMPLATEPATH."/page/tagline.php" );
?>
	</div>
	<div class="middle-third flexible">
<?php
	include( TEMPLATEPATH."/page/wysiwyg-content.php" );
?>
	</div>
	<div class="right-third flexible mobile-hide">
		<?php
		include( TEMPLATEPATH."/page/flexible/flexible.php" );
		?>
	</div>
	<div style="clear:both;"></div>
</div>
