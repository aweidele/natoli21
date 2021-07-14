<?php
/**
 * @package WordPress
 * @subpackage Natoli
 */

 get_header();
 $projectView = array_key_exists('projectView', $_COOKIE) ? $_COOKIE['projectView'] : 'grid';
 $project_type = get_terms('project_type');
 $scope = get_terms('scope');
 ?>
 <main class="main" id="main">
   <div class="projects">
     <div class="projects__wrap<?php if ($projectView == 'list') { echo " list-view"; } else { echo " grid-view"; } ?>">
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
           <button data-view="grid"><?php icon("grid"); ?>Grid</button>
           <button data-view="list"><?php icon("list"); ?>List</button>
         </div>
         <div class="projects__cards-sort">
           <div><button class="selected asc" data-sort="name">Project Name</button></div>
           <div><button data-sort="location">Location</button></div>
           <div><button data-sort="type">Type</button></div>
           <div><button data-sort="scope">Scope</button></div>
         </div>
         <div class="projects__cards">
           <?php while(have_posts()): the_post();
            $featuredId = get_post_thumbnail_id( $post->ID );
            $imageUrl = wp_get_attachment_image_src( $featuredId, "thumbnail" );
            $alt = natoli_get_alt( $featuredId );
            $types = wp_get_post_terms( $post->ID, "project_type");
			      $locations = wp_get_post_terms( $post->ID, "location");
            $scopes = wp_get_post_terms( $post->ID, "scope");
            $noDetail = get_field("no_detail");

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
                <div class="project-card__locations">
                  <ul>
                    <?php foreach($locations as $location) { ?>
                    <li><a href="<?php echo get_term_link($location); ?>"><?php echo $location->name; ?></a></li>
                    <?php } ?>
                  </ul>
                </div>
                <div class="project-card__types">
                  <ul>
                    <?php foreach($types as $type) { ?>
                    <li><a href="<?php echo get_term_link($type); ?>"><?php echo $type->name; ?></a></li>
                    <?php } ?>
                  </ul>
                </div>
                <div class="project-card__scope">
                  <ul>
                    <?php foreach($scopes as $scope) { ?>
                    <li><a href="<?php echo get_term_link($scope); ?>"><?php echo $scope->name; ?></a></li>
                    <?php } ?>
                  </ul>
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
