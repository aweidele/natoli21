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
	$parentPage = true;
	$allPages = get_pages( array(
			'sort_column' => 'menu_order',
			'parent' => $defaultPage->post_parent,
		));
} else {
	$parentPage = false;
	$allPages = array( $defaultPage );
}
?>

	<main class="main<?php if($parentPage) { echo " parent-page"; } ?>" id="main">
<?php
$index = 0;
$selectedId = "null";
foreach($allPages as $index => $page) {
	// $index++;
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
		<section id="page-<?php echo $page->post_name; ?>" data-url="<?= get_permalink($currentId) ?>" class="page">
	  <?php
	    include( TEMPLATEPATH."/page/" . $slug );
	  ?>
		</section>

<?php
}
?>
	</main>
<?php
get_footer();
?>
