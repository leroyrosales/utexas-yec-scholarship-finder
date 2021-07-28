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

	/** Archive status for CPT **/
    register_post_status( 'archive', array(
        'label' => _x( 'Archived', 'utexas_scholarships' ),
        'label_count' => _n_noop( 'Archived <span class="count">(%s)</span>', 'Archived <span
        class="count">(%s)</span>'),
        'public' => true,
        'exclude_from_search' => false,
        'show_in_admin_all_list' => true,
        'show_in_admin_status_list' => true
    ));

} );


function yec_add_archive_status() {

    global $post;
    if($post->post_type != 'utexas_scholarships')
        return false;
    $status = ($post->post_status == 'archive') ? "jQuery( '#post-status-display' ).text( 'Archive' ); jQuery('select[name=\"post_status\"]' ).val('archive');" : '';
    echo "<script>jQuery(document).ready( function() {jQuery( 'select[name=\"post_status\"]' ).append( '<option value=\"archive\">Archive</option>' );".$status."});</script>";

}
add_action( 'post_submitbox_misc_actions', 'yec_add_archive_status');

function yec_archive_status_quickedit() {

    global $post;
    if($post->post_type != 'utexas_scholarships')
        return false;
    echo "<script>jQuery(document).ready( function() {jQuery( 'select[name=\"_status\"]' ).append( '<option value=\"archive\">Archive</option>' );});</script>";

}
add_action('admin_footer-edit.php','yec_archive_status_quickedit');

function yec_display_archive_status( $states ) {
    global $post;
    $arg = get_query_var( 'post_status' );
    if($arg != 'archive'){
        if($post->post_status == 'archive'){
            echo "<script>jQuery(document).ready( function() {jQuery( '#post-status-display' ).text( 'Archive' );});</script>";
            return array('Archived');
        }
    }
    return $states;
}
add_filter( 'display_post_states', 'yec_display_archive_status' );
