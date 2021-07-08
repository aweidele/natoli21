<?php
/**
 * @package WordPress
 * @subpackage Natoli
 */

 get_header();
 ?>
 <main class="main" id="main">
   <div class="projects">
     <div class="projects__wrap">
       <div class="projects__filters">
         Filters Here
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

            $details = [];
            foreach($locations as $location) {
              $details[] = '<a href="'.get_term_link($location).'">'.$location->name.'</a>';
            }
            foreach($types as $type) {
              $details[] = '<a href="'.get_term_link($type).'">'.$type->name.'</a>';
            }
           ?>
           <div class="project-card" id="<?php echo $post->post_name; ?>">
             <a href="<?php echo get_permalink(); ?>" tabindex="-1">
               <div class="project-card__image">
                 <img alt="<?= $alt ?>" src="<?= $imageUrl[0] ?>" />
               </div>
             </a>
             <div class="project-card__content">
                <h2><a href="<?php echo get_permalink(); ?>"><?php the_title(); ?></a></h2>
                <div>
                  <?php echo implode($details, " | "); ?>
                </div>
             </div>
           </div>
           <?php endwhile; ?>
         </div>
       </div>
     </div>
   </div>
 </main>
 <?php
 get_footer();
