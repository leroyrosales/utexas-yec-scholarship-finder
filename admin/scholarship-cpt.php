<?php // UTexas YEC Scholarship Finder - CPT

// Disable direct file access
if ( ! defined( 'ABSPATH' ) ) {

	exit;

}

/**
 *
 * Adds Scholarships CPT
 *
 */

add_action( 'init', function () {

	// FAQs
    register_post_type('utexas_scholarships',
        array(
            'labels'      => array(
                'name'          => __('Scholarships', 'utexas-yec-scholarship-finder'),
                'singular_name' => __('Scholarship', 'utexas-yec-scholarship-finder'),
                'add_new'            => _x( 'Add New', 'book' ),
                'add_new_item'       => __( 'Add New Scholarship' ),
                'edit_item'          => __( 'Edit Scholarship' ),
                'new_item'           => __( 'New Scholarship' ),
                'all_items'          => __( 'All Scholarships' ),
                'view_item'          => __( 'View Scholarship' ),
                'search_items'       => __( 'Search Scholarships' ),
                'not_found'          => __( 'No scholarships found' ),
                'not_found_in_trash' => __( 'No scholarships found in the Trash' ),
            ),
                'public'      => false,
                'publicly_queryable' => true,
                'show_ui' => true,
                'exclude_from_search' => true,
                'has_archive' => false,
                'show_in_nav_menus' => false,
                'rewrite' => false,
                'menu_icon' => 'dashicons-money-alt',
        )
    );

} );
