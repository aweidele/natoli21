<?php
/**
 * @package WordPress
 * @subpackage natoli
 */
 	$copyright = get_field("copyright", "options");
?>
  <footer>
    <?= do_shortcode($copyright); ?>
  </footer>
<?php wp_footer(); ?>
</body>
</html>
