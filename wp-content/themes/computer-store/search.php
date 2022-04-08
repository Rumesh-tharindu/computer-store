<?php
/**
 * The template for displaying search results pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#search-result
 *
 * @package yourretailer
 */

get_header();
?>

    <section class="search section-padding-top section-padding-bottom">
	<div class="container">
	<?php if ( have_posts() ) : ?>

<header class="page-header">
	<h3 class="page-title search-result-info">
		<?php
		/* translators: %s: search query. */
		printf( esc_html__( 'Search Results for: %s', 'yourretailer' ), '<span>' . get_search_query() . '</span>' );
		?>
	</h3>
</header><!-- .page-header -->


<div class="mc-cards-wrapper">
<?php
/* Start the Loop */
while ( have_posts() ) :the_post() ?>


	
	<?php get_template_part( 'template-parts/content', 'search' ); ?>


	<?php 
endwhile;
?>
	</div>
<?php the_posts_navigation();

else :

get_template_part( 'template-parts/content', 'none' );

endif;
?>

	</div>

	</section>



<?php

get_footer();
