<?php // UTexas YEC Scholarship Finderr - CPT

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
            ),
                'public'      => true,
                'has_archive' => true,
        )
    );


} );
