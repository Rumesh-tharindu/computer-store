
				
				<div class="mc-card">
                <a href="<?php echo get_post_permalink() ?>">
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
				  
					
					</a>
				</div>
				
	
			
			
		