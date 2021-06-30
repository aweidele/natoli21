<?php
/**
 * @package WordPress
 * @subpackage natoli
 */
 	$copyright = get_field("copyright", "options");
?>
</main>
  <footer class="main-footer">
    <div>
      <?= do_shortcode($copyright); ?>
    </div>
  </footer>
<?php wp_footer(); ?>
</body>
</html>
