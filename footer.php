<?php
/**
 * @package WordPress
 * @subpackage natoli
 */
 	$copyright = get_field("copyright", "options");
?>
  <footer class="main-footer">
    <div>
      <?= do_shortcode($copyright); ?>
    </div>
  </footer>
</div>
<?php wp_footer(); ?>
</body>
</html>
