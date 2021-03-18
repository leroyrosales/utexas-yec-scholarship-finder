<?php
/*
Plugin Name:  UTexas YEC Scholarship Finder
Description:  UTexas plugin add Scholarships CPT and React search script.
Author:       Division of Diversity and Community Engagement
Author URI:  https://diversity.utexas.edu
Version:      1.0
Text Domain:  utexa-yec-scholarship-finder
License:      GPL v2 or later
License URI:  https://www.gnu.org/licenses/gpl-2.0.txt
*/

/**
 * Register Post Types
 * - Scholarships
 */

add_action( 'init', function () {

	// FAQs
    register_post_type('utexas_scholarships',
        array(
            'labels'      => array(
                'name'          => __('Scholarships', 'utexas-yec-scholarship-finder'),
                'singular_name' => __('Scholarship', 'utexas-yec-scholarship-finder'),
            ),
                'public'      => true,
                'has_archive' => true,
        )
    );


} );


add_action( 'save_post_utexas_scholarships', function() {

    $args = array(
        'post_type' => 'utexas_scholarships',
        'post_status' => 'publish',
        'posts_per_page' => -1,
    );

    $query = new WP_Query($args);
    $posts = array();

    while ($query->have_posts()): $query->the_post();
        $posts[] = apply_filters(
            'utexas_yec_scholarship_fields',
            array(
                'title' => get_the_title(),
                'author' => get_the_author(),
            )
        );
    endwhile;

    wp_reset_query();
    $data = json_encode($posts);

    if (!is_dir(ABSPATH . '/wp-content/uploads/scholarships-data/')) {
        // dir doesn't exist, make it
        mkdir(ABSPATH . '/wp-content/uploads/scholarships-data/');
    }

    // creates a campaign json file in the uploads folder
    file_put_contents( ABSPATH . '/wp-content/uploads/scholarships-data/data.json', $data);

});

