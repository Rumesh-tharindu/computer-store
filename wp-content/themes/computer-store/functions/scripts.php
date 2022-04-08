<?php

function dk_register_script(){
    global $ARB_ATTRIB_PREFIX;
 
    wp_enqueue_script('jquery');
    
    wp_register_script('main-js',get_template_directory_uri().'/assets/js/main.js',[],filemtime(get_template_directory().'/assets/js/main.js'));
    wp_enqueue_script('main-js','jquery',false,true);
    
    wp_register_script('owl',get_template_directory_uri().'/assets/js/owl.carousel.min.js',[],filemtime(get_template_directory().'/assets/js/owl.carousel.min.js'));
    wp_enqueue_script('owl','jquery',false,true);
    wp_register_script('popper','https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js');
    wp_enqueue_script('popper','jquery',false,true);


    wp_register_script('bootsrap','https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js');
    wp_enqueue_script('bootsrap','jquery',false,true);

    wp_register_script('fontawesome-kit','https://kit.fontawesome.com/cc4f04183a.js','jquery',false,true);
    wp_enqueue_script('fontawesome-kit');

    wp_register_script('slick','https://cdn.jsdelivr.net/jquery.slick/1.6.0/slick.min.js','jquery',false,true);
    wp_enqueue_script('slick');

    wp_register_script('slick-animation','https://alexandrebuffet.fr/codepen/slider/slick-animation.min.js','jquery',false,true);
    wp_enqueue_script('slick-animation');



   


    

    
    
}
add_action('wp_enqueue_scripts','dk_register_script');

?>