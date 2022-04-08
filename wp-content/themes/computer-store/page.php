<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package yourretailer
 */

get_header();
?>

<?php

if(is_product_category()) : ?>
	 <?php get_template_part( 'template-parts/content', 'category' ); ?>


<?php else  : ?>
	
	<?php while ( have_posts() ) : the_post() ?>
	<?php the_content(); ?>
   <?php endwhile; ?> 

<?php endif ?>

<?php
get_footer();
?>