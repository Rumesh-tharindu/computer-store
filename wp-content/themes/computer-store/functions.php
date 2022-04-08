<?php
/**
 * Jsblogger functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Jsblogger
 */



add_theme_support( 'title-tag' );
add_theme_support('menus');
add_theme_support( 'post-thumbnails'); 

/*  =============================
    Includes
    ============================= */


require_once(get_template_directory().'/functions/scripts.php');
require_once(get_template_directory().'/functions/styles.php');

require_once(get_template_directory().'/functions/menus.php');

require_once(get_template_directory().'/functions/custome-post-type.php');


// remove predefined dimentaion on image

add_filter( 'post_thumbnail_html', 'remove_thumbnail_dimensions', 10, 3 );

function remove_thumbnail_dimensions( $html, $post_id, $post_image_id ) {
    $html = preg_replace( '/(width|height)=\"\d*\"\s/', "", $html );
    return $html;
}
// End remove predefined dimentaion on image

remove_filter ('the_content', 'wpautop');
remove_filter('the_content', 'wptexturize');



?>
