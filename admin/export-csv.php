<?php
// Adds Export CSV button to Scholarships CPT

// Disable direct file access
if ( ! defined( 'ABSPATH' ) ) {

	exit;

}

# Adding button in backend
add_action( 'restrict_manage_posts', 'add_export_button' );
function add_export_button() {
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
