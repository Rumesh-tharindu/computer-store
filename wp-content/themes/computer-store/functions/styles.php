<?php

function dk_register_style(){
    

  
    
    wp_register_style('boostrap','https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css');
    wp_enqueue_style('boostrap');

   


    // wp_register_style('Lineawesome','https://maxst.icons8.com/vue-static/landings/line-awesome/font-awesome-line-awesome/css/all.min.css');
    // wp_enqueue_style('Lineawesome');



    wp_register_style('slick','https://cdn.jsdelivr.net/jquery.slick/1.6.0/slick.css');
    wp_enqueue_style('slick');

     wp_register_style('animate','https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css');
    wp_enqueue_style('animate');

    wp_register_style('animate-v2','https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css');
    wp_enqueue_style('animate-v2');
   
   
    wp_register_style('owl',get_template_directory_uri().'/assets/css/owl.carousel.min.css',[],filemtime(get_template_directory().'/assets/css/owl.carousel.min.css'),false,'all');
    wp_enqueue_style('owl');

    wp_register_style('owl-theme',get_template_directory_uri().'/assets/css/owl.theme.default.css',[],array(),false,'all');
    wp_enqueue_style('owl-theme');


 
    wp_register_style('layouts',get_template_directory_uri().'/assets/css/layouts.css',[],filemtime(get_template_directory().'/assets/css/layouts.css'),false,'all');
    wp_enqueue_style('layouts');

    wp_register_style('components',get_template_directory_uri().'/assets/css/components.css',[],filemtime(get_template_directory().'/assets/css/components.css'),false,'all');
    wp_enqueue_style('components');

    wp_register_style('home',get_template_directory_uri().'/assets/css/pages/home.css',[],filemtime(get_template_directory().'/assets/css/pages/home.css'),false,'all');
    wp_enqueue_style('home');




    
    
    
    
    

}

add_action('wp_enqueue_scripts','dk_register_style');

?>
