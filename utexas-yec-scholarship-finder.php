<?php
/*
Plugin Name:  UTexas YEC Scholarship Finder
Description:  UTexas plugin add Scholarships CPT and React search script.
Author:       Division of Diversity and Community Engagement
Author URI:  https://diversity.utexas.edu
Version:      1.0
Text Domain:  utexas-yec-scholarship-finder
License:      GPL v2 or later
License URI:  https://www.gnu.org/licenses/gpl-2.0.txt
*/

// Disable direct file access
if ( ! defined( 'ABSPATH' ) ) {

	exit;

}

define( 'UT_YEC_SCHOLARSHIP_FINDER', plugin_dir_path( __FILE__ ) );

// include plugin dependencies: admin only
if ( is_admin() ) {

	require_once UT_YEC_SCHOLARSHIP_FINDER . 'admin/scholarship-cpt.php';
	require_once UT_YEC_SCHOLARSHIP_FINDER . 'admin/save-cpt-function.php';
	require_once UT_YEC_SCHOLARSHIP_FINDER . 'includes/acf/acf.php';
	require_once UT_YEC_SCHOLARSHIP_FINDER . 'admin/acf-fields.php';

}

define( 'UT_YEC_SCHOLARSHIP_FINDER_ASSET_MANIFEST', UT_YEC_SCHOLARSHIP_FINDER . '/react-app/build/asset-manifest.json' );

require_once UT_YEC_SCHOLARSHIP_FINDER . 'frontend/enqueue.php';
require_once UT_YEC_SCHOLARSHIP_FINDER . 'frontend/shortcode.php';


