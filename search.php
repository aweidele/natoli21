<?php
/**
 * @package WordPress
 * @subpackage natoli
 */
get_header();
?>
<div class="wrapper no-banner">
	<div class="middle-content">
	<?php
	while(have_posts())
	{
		the_post();
		
		$permalink = get_the_permalink();
		?>
		<div class="search-result">
			<?php
					
				$featuredId = get_post_thumbnail_id( $post->ID );
				if( $featuredId )
				{
					$url = wp_get_attachment_image_src( $featuredId, "small_sidebar" );
					$alt = natoli_get_alt( $featuredId );
					$url = $url[0];
					echo "<div class='thumbnail'><a href='$permalink'><img alt='$alt' src='$url' /></a></div>";
				}
			?>
			<h2 class="secondary"><a href="<?= $permalink ?>"><?php the_title() ?></a></h2>
			<div style="clear: left;"></div>
		</div>
		<?php	
	}
	?>
	</div>
</div>
<?php
get_footer();
?>