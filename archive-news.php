<?php
/**
 * @package WordPress
 * @subpackage natoli
 */
if( isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest' && isset($_REQUEST['ajax']) )
{
	if( isset($firstPost) )
	{
		$post = $firstPost;
		setup_postdata($post);
	}
	else
	{
		the_post();
	}
	include( TEMPLATEPATH."/news/single.php" );
	return;
} 

if( !isset($categoryId) )
{
	$categoryId = "";
}
setcookie("news_category",$categoryId,0,"/");

get_header();

?>
<div class="wrapper no-banner">
	<div class="left-half flexible">
		<nav id="news_filters" class="news-filters">
			<ul>
				<li>
					<a href="<?= get_post_type_archive_link("news") ?>" class="<?= $categoryId == "" ? "selected" : ""?>">All</a>
				</li>
				<?php
				$terms = get_terms("news_category");

				foreach($terms as $term) {
					$plural = get_field("plural_name", $term->id);
					
					if( !$plural )
					{
						$plural = $term->name;
					}
				?>
					<li>
						<a href="<?= get_term_link($term, "news_category") ?>" class="<?= $categoryId == $term->term_id ? "selected" : ""?>"><?= $plural ?></a>
					</li>
				<?php
				}
				?>
			</ul>
			<div style="clear: both;"></div>
		</nav>			
		<div id="news_list" class="news-list">
			<?php
			if( !isset($firstPost) )
			{
				$firstPost = false;
			}
			else if( !isset($thisIsReallyASinglePage) )
			{
				$post = $firstPost;
				setup_postdata($post);
				echo "<div class='news-item original mobile-show'>";
				include( TEMPLATEPATH."/news/single.php" );
				echo "</div>";
			}
			
			while(have_posts())
			{
				the_post();
				
				if( !$firstPost )
				{
					$firstPost = $post;
				}
				
				$publication = get_field("publication_name");
				$terms = wp_get_post_terms( $post->ID, "news_category" );
				?>
				<div class="news-item">
					<?php
					$signature = get_field("signature");
					
					if( $signature )
					{
						echo "<div class='signature-marker-right'></div>";
					}
					?>
					<h5 class="news-tax">
					<?php
						foreach($terms as $term)
						{
						?>
						<a href="<?= get_term_link($term) ?>"><?= $term->name ?></a>
						<?php
						}
					?>
					</h5>
					<h3 class="mobile-hide">
						<a class="news-link <?= $firstPost->ID == $post->ID ? 'selected' : '' ?>" href="<?= get_the_permalink() ?>">
						<?php
						the_title();
						?>
						</a>
					</h3>
					<div class="mobile-hide">
					<?php
					the_time( get_option( 'date_format' ) );
					
					if( $publication )
					{
						echo " | " . $publication;
					}
					echo "</div>";

					echo "<div class='news-content mobile-show'>";
					include( TEMPLATEPATH."/news/single.php" );
					echo "</div>";
					?>
				</div>
			<?php
			}
			?>
		</div>
	</div>
	<div class="right-half flexible side-fixed mobile-hide">
		<div class="fixed-wrapper">
			<div id="news_target">
				<?php
				$post = $firstPost;
				setup_postdata($post);
				include( TEMPLATEPATH."/news/single.php" );
				?>
			</div>
		</div>
	</div>
	<div style="clear:both"></div>
</div>
<?php
$ajaxLinks = get_field("ajax_news", "options");
if( $ajaxLinks )
{
?>
<script>
	jQuery(".news-link").natoliNewsChange("#news_target", ".mobile-news-target");
	jQuery(".news-content.mobile-show iframe").iframeWatch(".news-content.mobile-show");
	jQuery("#news_target iframe").iframeWatch("#news_target");	
</script>
<?php
}

get_footer();
?>