<?php // UTexas YEC Scholarship Finder - Save Post

// Disable direct file access
if ( ! defined( 'ABSPATH' ) ) {

	exit;

}

/**
 *
 * Adds Custom Save Post Function
 *
 */

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
        // If dir doesn't exist, make it
        mkdir(ABSPATH . '/wp-content/uploads/scholarships-data/');
    }

    // Creates a scholarships json file in the uploads folder
    file_put_contents( ABSPATH . '/wp-content/uploads/scholarships-data/data.json', $data);

});

