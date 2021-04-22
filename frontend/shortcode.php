<?php
// This file enqueues a shortcode.

// Disable direct file access
if ( ! defined( 'ABSPATH' ) ) {

	exit;

}

add_shortcode( 'yec_scholarship_finder', function( $atts ) {
  $default_atts = array();
  $args = shortcode_atts( $default_atts, $atts );

  return "<div id='yec-root'></div>";
});
