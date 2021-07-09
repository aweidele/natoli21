<?php
/**
 * @package WordPress
 * @subpackage Natoli
 */

 get_header();
 $project_type = get_terms('project_type');
 $scope = get_terms('scope');
 ?>
 <main class="main" id="main">
   <div class="projects">
     <div class="projects__wrap">
       <div class="projects__filters">
         <button class="projects__filters-toggle">Filter Projects</button>
         <div>
           <h3>Filter by Type</h3>
           <ul>
           <?php foreach($project_type as $term) { ?>
             <li><a href="<?php echo get_term_link($term); ?>"><?php echo $term->name; ?></a></li>
           <?php } ?>
            </ul>
           <h3>Filter by Scope</h3>
           <ul>
           <?php foreach($scope as $term) { ?>
             <li><a href="<?php echo get_term_link($term); ?>"><?php echo $term->name; ?></a></li>
           <?php } ?>
           </ul>

           <div><a href="<?= get_post_type_archive_link( "project" ) ?>" class="<?= is_post_type_archive("project") ? 'selected' : '' ?>">View All Projects</a></div>
         </div>
       </div>
       <div class="projects__main">
         <div class="projects__view">
           <a href="#"><?php icon("grid"); ?>Grid</a>
           <a href="#"><?php icon("list"); ?>List</a>
         </div>
         <div class="projects__grid">
           <?php while(have_posts()): the_post();
            $featuredId = get_post_thumbnail_id( $post->ID );
            $imageUrl = wp_get_attachment_image_src( $featuredId, "thumbnail" );
            $alt = natoli_get_alt( $featuredId );
            $types = wp_get_post_terms( $post->ID, "project_type");
			      $locations = wp_get_post_terms( $post->ID, "location");
            $noDetail = get_field("no_detail");

            $details = [];
            foreach($locations as $location) {
              $details[] = '<a href="'.get_term_link($location).'">'.$location->name.'</a>';
            }
            foreach($types as $type) {
              $details[] = '<a href="'.get_term_link($type).'">'.$type->name.'</a>';
            }
           ?>
           <?php if(!$noDetail) { ?>
           <div class="project-card" id="<?php echo $post->post_name; ?>">
             <div class="project-card__image">
               <a href="<?php echo get_permalink(); ?>" tabindex="-1">
                 <img alt="<?= $alt ?>" src="<?= $imageUrl[0] ?>" />
               </a>
             </div>
             <div class="project-card__content">
                <h2><a href="<?php echo get_permalink(); ?>"><?php the_title(); ?></a></h2>
                <div>
                  <?php echo implode($details, " | "); ?>
                </div>
             </div>
           </div>
           <?php } ?>
           <?php endwhile; ?>
         </div>
       </div>
     </div>
   </div>
 </main>
 <?php
 get_footer();
