<?php // UTexas YEC Scholarship Finder - Save Post

// Disable direct file access
if ( ! defined( 'ABSPATH' ) ) {

	exit;

}

// Adds Custom Save Post Function
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
                'title' => html_entity_decode(get_the_title($post->ID),ENT_QUOTES,'UTF-8'),
                'information' => get_field('information'),
                'deadline' => get_field('deadline'),
                'amount' => get_field('amount'),
                'no_of_awards' => get_field('no_of_awards'),
                'website' => get_field('website'),
                'application_online_or_paper' => get_field('application_online_or_paper'),
                'essays' => get_field('essays'),
                'letters_of_recommendation' => get_field('letters_of_recommendation'),
                'transcripts' => get_field('transcripts'),
                'texas_resident' => get_field('texas_resident'),
                'year_in_school' => get_field('year_in_school'),
                'additional_info' => get_field('additional_info'),
                'stem' => get_field('stem'),
                'keywords' => get_field('keywords'),
            )
        );

    endwhile;

    wp_reset_query();
    $data = json_encode($posts);

    if (!is_dir(ABSPATH . '/wp-content/plugins/utexas-yec-scholarship-finder/react-app/build/data/')) {
        // If dir doesn't exist, make it
        mkdir(ABSPATH . '/wp-content/plugins/utexas-yec-scholarship-finder/react-app/build/data/');
    }

    // Creates a scholarships json file in the uploads folder
    file_put_contents( ABSPATH . '/wp-content/plugins/utexas-yec-scholarship-finder/react-app/build/data/data.json', $data);

});


