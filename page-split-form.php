<?php
/**
 * Template Name: Form Page
 * Description: Split page, content on left, form on the right
 * 
 * @package WordPress
 * @subpackage Natoli
 */
get_header();

the_post();

$form = get_field('form');
gravity_form_enqueue_scripts($form->id, true);
?>
<div class="wrapper no-banner">
	<div class="split-left-half flexible landscape-side-fixed">
		<div class="fixed-wrapper wysiwyg-content">
			<?php the_content(); ?>
		</div>
	</div>
	<div class="split-right-half flexible split-left-half-fixed">
	<?php
    	gravity_form($form->id, true, true, false, '');
    ?> 
	</div>
	<div style="clear: both;"></div>
</div>

<?php
get_footer();
?>