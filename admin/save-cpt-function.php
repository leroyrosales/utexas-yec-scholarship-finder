<?php
// UTexas YEC Scholarship Finder - Save Post

// Disable direct file access
if ( ! defined( 'ABSPATH' ) ) {

	exit;

}


// Adds Custom Save Post Function
function createsScholarshipsJson(){

    global $pagenow;

    if (( $pagenow == 'post.php' ) && (get_post_type() == 'utexas_scholarships')) {

        global $post;

        $args = [
            'post_type' => 'utexas_scholarships',
            'post_status' => 'publish',
            'posts_per_page' => -1,
            'no_found_rows' => true,
            'update_post_term_cache' => false,
        ];

        $query = new WP_Query($args);
        $posts = [];

        while ($query->have_posts()): $query->the_post();

            $date = get_post_meta( $post->ID, "deadline", true );
            $date = new DateTime($date);
            $deadline =  $date->format('F j, Y');

            $posts[] = apply_filters(
                'utexas_yec_scholarship_fields',
                [
                    'title' => html_entity_decode(get_the_title(),ENT_QUOTES,'UTF-8'),
                    'information' => get_post_meta( $post->ID, 'information'),
                    'deadline_string' => $deadline,
                    'deadline_numeric' => get_post_meta( $post->ID, "deadline", true ),
                    'amount' => get_post_meta( $post->ID, 'amount'),
                    'no_of_awards' => get_post_meta( $post->ID, 'no_of_awards'),
                    'website' => get_post_meta( $post->ID, 'website'),
                    'application_online_or_paper' => get_post_meta( $post->ID, 'application_online_or_paper'),
                    'essays' => get_post_meta( $post->ID, 'essays'),
                    'letters_of_recommendation' => get_post_meta( $post->ID, 'letters_of_recommendation'),
                    'transcripts' => get_post_meta( $post->ID, 'transcripts'),
                    'texas_resident' => get_post_meta( $post->ID, 'texas_resident'),
                    'year_in_school' => get_post_meta( $post->ID, 'year_in_school'),
                    'additional_info' => get_post_meta( $post->ID, 'additional_info'),
                    'stem' => get_post_meta( $post->ID, 'stem'),
                    'keywords' => get_post_meta( $post->ID, 'keywords'),
                ]
            );

        endwhile;

        wp_reset_query();

        $data = json_encode( $posts );

        define( 'REACT_APP_PATH', '/wp-content/plugins/utexas-yec-scholarship-finder/react-app/build/data/' );

        if (!is_dir(ABSPATH . REACT_APP_PATH )) {
            // If dir doesn't exist, make it
            mkdir(ABSPATH . REACT_APP_PATH );
        }

        // Creates a scholarships json file in the uploads folder
        file_put_contents( ABSPATH . REACT_APP_PATH . 'data.json', $data);

    }

}

add_action( 'updated_post_meta', 'createsScholarshipsJson', 5 );
