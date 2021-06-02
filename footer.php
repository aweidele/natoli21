<?php
/**
 * @package WordPress
 * @subpackage natoli
 */
 	$copyright = get_field("copyright", "options");
?>
		</div><!-- .main-content  -->
		<footer class="footer">
			<div class="wrapper">
				<?= do_shortcode($copyright); ?>
			</div>
		</footer>
	<?php wp_footer(); ?>
	</body>	
	
</html>