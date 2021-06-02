<?php
/**
 * Description: Base template wrapper for rendering multiple pages in one
 *
 * @package WordPress
 * @subpackage Natoli
 */
get_header();
$defaultPage = get_queried_object();

if( $defaultPage->post_parent ) {
	$allPages = get_pages( array(
			'sort_column' => 'menu_order',
			'parent' => $defaultPage->post_parent,
		));
} else {
	$allPages = array( $defaultPage );
}
$index = 0;
$selectedId = "null";
foreach($allPages as $page) {
	$index++;
	$slug = get_page_template_slug($page->ID);

	$currentId = $page->ID;

	if(!$slug){
		$slug = "page.php";
	}

	$pageId = natoli_get_unique_id();

	if( $currentId == $defaultPage->ID ) {
		$selectedId = $pageId;
	}
	?>
	<div id="<?= $pageId ?>" class="grouped-page <?= $index % 2 == 1 ? "background-1" : "background-2"?>" data-url="<?= get_permalink($currentId) ?>">
	<?php
	include( TEMPLATEPATH."/page/" . $slug );
	?>
	</div>
	<?php
}

if( sizeof($allPages) > 1 )
{
	echo "<script>jQuery(function(){jQuery('.child-menu').natoliGroupMenu('$selectedId');});</script>";
?>
	<a href="#" class="mobile-show back-to-top wrapper secondary uppercase" onclick="natoli.scrollTop();return false;">
		Back To Top
	</a>
<?php
	}

get_footer();
