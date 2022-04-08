<?php
// Register Custom Post Type
// function custom_post_type() {
 
//     $labels = array(
//         'name'                => _x( 'Top attractions', 'Post Type General Name', 'text_domain' ),
//         'singular_name'       => _x( 'Top attraction', 'Post Type Singular Name', 'text_domain' ),
//         'menu_name'           => __( 'Top Attractions', 'text_domain' ),
//         'parent_item_colon'   => __( 'Parent Item:', 'text_domain' ),
//         'all_items'           => __( 'All Items', 'text_domain' ),
//         'view_item'           => __( 'View Item', 'text_domain' ),
//         'add_new_item'        => __( 'Add New Item', 'text_domain' ),
//         'add_new'             => __( 'Add New', 'text_domain' ),
//         'edit_item'           => __( 'Edit Item', 'text_domain' ),
//         'update_item'         => __( 'Update Item', 'text_domain' ),
//         'search_items'        => __( 'Search Item', 'text_domain' ),
//         'not_found'           => __( 'Not found', 'text_domain' ),
//         'not_found_in_trash'  => __( 'Not found in Trash', 'text_domain' ),
//     );
//     $args = array(
//         'label'               => __( 'Top Attractions', 'text_domain' ),
//         'description'         => __( 'Post Type Description', 'text_domain' ),
//         'labels'              => $labels,
//         'supports'            => array('title', 'editor', 'thumbnail', 'excerpt'),
//         'show_in_rest' => true,
//         'taxonomies'          => array( 'category', 'post_tag' ),
//         'hierarchical'        => false,
//         'public'              => true,
//         'show_ui'             => true,
//         'show_in_menu'        => true,
//         'show_in_nav_menus'   => true,
//         'show_in_admin_bar'   => true,
//         'menu_position'       => 5,
//         'menu_icon'           => 'dashicons-admin-post',
//         'can_export'          => true,
//         'has_archive'         => true,
//         'exclude_from_search' => false,
//         'publicly_queryable'  => true,
//         'capability_type'     => 'page',
//     );

  
//     register_post_type( 'Top Attractions', $args );
 
// }
 
// // Hook into the 'init' action
// add_action( 'init', 'custom_post_type', 0 );

// add_filter('use_block_editor_for_post_type', 'prefix_disable_gutenberg', 10, 2);
// function prefix_disable_gutenberg($current_status, $post_type)
// {

//     if ($post_type === 'Top Attractions') return false;
//     return $current_status;
// }



	
	