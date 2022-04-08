<header class="page-header">
	<h3 class="page-title search-result-info">
    <?php
		/* translators: %s: search query. */
		printf( esc_html__( 'Search Results for: %s', 'yourretailer' ), '<span>' . get_search_query() . '</span>' );
		?>
	</h3>
</header>

<div class="no-result  section-padding-bottom">
    <h4> No result Found</h4>

    <div class="related-tours section-padding-top">
        <h3 class="title">
            Related Tours
        </h3>
    <div class="mc-cards-wrapper">
					<?php 
			$the_query = new WP_Query( array(
				'post_type' => 'product',
                'posts_per_page' => 4,
                'columns'        => 4,
                'orderby'        => 'rand',
                'order'          => 'desc',
				
			)); 
			?>

			<?php if ( $the_query->have_posts() ) : ?>
			<?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
			<div class="mc-card">
					
					<div class="mc-card-header">
						<?php echo get_the_post_thumbnail() ?>
						
						  <?php   if((get_field('discount'))) : ?>
							  <div class="product-descount">
							  <span><?php echo get_field( "discount" );?>% OFF</span>
							  </div>
							
							<?php endif; ?>
					  
					   
					</div>
					<div class="mc-card-footer">
					<div class="mc-card-footer__content">
							<h5><?php  the_title(); ?></h5>
						  
							
							   <div class="produc-extra-info">
								   <ul>
									   <li>
										   <span class="product-info-left" >Destination:</span>
										   <span class="product-info-right" ><?php echo get_field( "travel_destination" );?></span>
									   </li>
									   <li>
										   <span class="product-info-left" >Tour / Category:</span>
										   <span class="product-info-right" ><?php echo get_field( "tour_category" ); ?></span>
									   </li>
									   <li>
										   <span class="product-info-left" >Duration:</span>
										   <span class="product-info-right" ><?php echo get_field( "duration" ); ?></span>
									   </li>
									   <li>
										   <span class="product-info-left" >Price:</span>
										   <span class="product-info-right" >US$ <?php echo get_field( "rate" ); ?> <sup>p/p</sup></span>
									   </li>
								   </ul>
								  
								  
							   </div>

							  
				   </div>
				   <div class="mp-ex_hyper">
									 <object data="" type=""><a href="<?php echo the_permalink() ?>">More</a></object> 
							  </div>
					</div>
				  
					
					
				</div>
			
			
				

			<?php endwhile; ?>
			<?php wp_reset_postdata(); ?>
			<?php endif; ?>
              
		 </div>
    </div>
</div>