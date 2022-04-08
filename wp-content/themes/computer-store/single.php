<?php get_header(); ?>

    <div class="single-blog ">
	
		<?php
		while ( have_posts() ) : the_post() ?>
		    
			<?php if(get_post_type()=='post') : ?>


				

				<div class="content section-padding-top section-padding-bottom">
					<div class="container">
						<h1 class="title">
						<?php the_title();?>
						</h1>
					
					<?php  the_content(); ?>
					</div>
					
				</div>
			</div>

			<?php else: ?>
				<div class="content">
				
					
					
					<?php  the_content(); ?>
					
					
				</div>
			</div>

			<?php endif; ?>
			
			<?php endwhile; ?>
		
	</section>

		

<?php get_footer(); ?>
