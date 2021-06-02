<?php
/**
 * Description: Single news page
 * 
 * @package WordPress
 * @subpackage Natoli
 */
?>
<div class="news-content">
	<?php
	$featuredId = get_post_thumbnail_id( $post->ID );
	$publicationName = get_field("publication_name");
	$publicationUrl = get_field("publication_url");
				
	if( $featuredId )
	{
		$url = wp_get_attachment_image_src( $featuredId, "large" );
		$alt = natoli_get_alt( $featuredId );
		?>
		<div class="news-image">
			<img src="<?= $url[0] ?>" alt="<?= $alt ?>" />
		</div>
		<?php
	}
	?>
	<h1 class="secondary"><?= the_title() ?></h1>
	<div class="date-pub">
		<?php
		if( $post->post_type == 'news' )
		{
			the_time( get_option( 'date_format' ) );
			
			if( $publicationName )
			{
				echo " | ";
				
				if( $publicationUrl )
				{
					echo "<a href='$publicationUrl' target='_blank'>";
				}
				echo $publicationName;
				if( $publicationUrl )
				{
					echo "</a>";
				}
			}
		}
		?>
	</div>
	<span class="wysiwyg-content">
		<?= the_content() ?>
	</span>
	<?php
	$relatedProjects = get_field("related_projects");
	
	if($relatedProjects)
	{
		echo "<br/><h2 class='secondary'>Related Projects</h2>";
		
		foreach($relatedProjects as $project)
		{
			$noDetail = get_field("no_detail", $project->ID);
			
			if( $noDetail )
			{
				echo get_the_title($project);
				echo "<br/>";
			}
			else
			{
				?>
				<a href="<?= get_the_permalink($project) ?>">
					<?=	get_the_title($project) ?>
				</a>
				<br/>
				<?php
			}
		}
	}
	?>
</div>