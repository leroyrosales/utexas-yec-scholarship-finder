<?php
// Adds Export CSV button to Scholarships CPT

// Disable direct file access
if ( ! defined( 'ABSPATH' ) ) {

	exit;

}

// Adds Export button
function yec_add_export_button() {
    $screen = get_current_screen();

    if (isset($screen->parent_file) && ('edit.php?post_type=utexas_scholarships' == $screen->parent_file)) {
        ?>
        <input type="submit" name="export_all_posts" id="export_all_posts" class="button button-primary" value="Export Scholarships">
        <script type="text/javascript">
            jQuery(function($) {
                $('#export_all_posts').insertAfter('#post-query-submit');
            });
        </script>
        <?php
    }
}
add_action( 'restrict_manage_posts', 'yec_add_export_button' );

// Creates CSV
function yec_export_scholarships_csv() {

    if(isset($_GET['export_all_posts'])) {

        $scholarship_args = array(
                'post_type' => 'utexas_scholarships',
                'post_status' => array( 'publish', 'archive' ),
                'posts_per_page' => -1,
                'no_found_rows' => true,
                'update_post_term_cache' => false,
        );

        global $post;
        $scholarships = get_posts($scholarship_args);
        if ($scholarships) {

            header('Content-type: text/csv');
            header('Content-Disposition: attachment; filename="DDCE_YEC_HTX_Scholarships.csv"');
            header('Pragma: no-cache');
            header('Expires: 0');

            $file = fopen('php://output', 'w');

            fputcsv($file, array(
                'Scholarship',
                'Information',
                'Deadline',
                'Award Amount',
                'No. of Awards',
                'Website',
                'App online or paper?',
                'Essays required?',
                'Letters of Req required?',
                'Transcripts required?',
                'Texas residency required?',
                'Years in scholl offered',
                'Additional Info',
                'Stem?',
                'Keywords used',
                'Published status'
            ));

            foreach ($scholarships as $post) {
                setup_postdata($post);

                $year_in_school = get_post_meta( get_the_ID(), 'year_in_school', true );

                fputcsv($file, array(
                    get_post_field( 'post_title', get_post() ),
                    get_post_meta( get_the_ID(), 'information', true ),
                    get_post_meta( get_the_ID(), 'deadline_string', true ),
                    get_post_meta( get_the_ID(), 'amount', true ),
                    get_post_meta( get_the_ID(), 'no_of_awards', true ),
                    get_post_meta( get_the_ID(), 'website', true ),
                    get_post_meta( get_the_ID(), 'application_online_or_paper', true ),
                    get_post_meta( get_the_ID(), 'essays', true ),
                    get_post_meta( get_the_ID(), 'letters_of_recommendation', true ),
                    get_post_meta( get_the_ID(), 'transcripts', true ),
                    get_post_meta( get_the_ID(), 'texas_resident', true ),
                    implode(", ", (array)$year_in_school),
                    get_post_meta( get_the_ID(), 'additional_info', true ),
                    get_post_meta( get_the_ID(), 'stem', true ),
                    get_post_meta( get_the_ID(), 'keywords', true ),
                    get_post_status( get_the_ID() )
                ));
            }

            exit();
        }
    }
}
add_action( 'init', 'yec_export_scholarships_csv' );
