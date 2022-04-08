



<section class="all-tours section-padding-top section-padding-bottom">
    <div class="tour-filters ">
    <button class="filter-close-btn">
            <img src="<?php echo get_template_directory_uri() ?>/assets/images/icons/black-close.png" alt="">
    </button>

     <div class="filter-container">
     <?php 
           global $wp_query;
           $cat = $wp_query->get_queried_object();
           $cat_name=$cat->name;
           $cat_parent= $cat->parent;
            ?>
            
              <?php if($cat_name =='adventure tours') : ?>
               <?php echo do_shortcode('[wpf-filters id=6]') ?>

               <?php elseif($cat_name =='cultural tours')  : ?>
                  <?php echo do_shortcode('[wpf-filters id=7]'); ?>
                 
               <?php elseif ($cat_parent>0)  : ?>
               <?php echo do_shortcode('[wpf-filters id=8]'); ?>
              
               <?php 
                
               endif ?>
     </div>
 
   
    </div>
    <div class="container ">
    <div class="section-heading">
			  <h2 class="section-heading-title"><?php echo single_term_title();?></h2>

          

              <div class="filter-actions">
                  <button class='filter-toggler'>
                      <span class='filter-toggler__text'>Hide filters</span>
                      <img src="<?php echo get_template_directory_uri() ?>/assets/icons/icon-filter.png" alt="">
                  </button>
              <?php echo do_shortcode('[wpf-filters id=3]') ?>
              </div>
			  
	 </div>
      
     <div class="tours-gallery">
       
     
     <?php echo do_shortcode('[wpf-products]') ?>
     </div>
    </div>
</section>
