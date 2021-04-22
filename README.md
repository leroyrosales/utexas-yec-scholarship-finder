=== UTexas YEC Scholarship Finder ===

Contributors: Leroy Rosales, Division of Diversity and Community Engagement
Tested up to: 5.6

UTexas plugin add Scholarships CPT and React search script.

== Description ==

Adds a custom post type called \'Scholarships\' which saves all post data to a directory in the uploads folder. A frontend React script then reads the JSON file and filters through it via set filters.

== Installation ==

Download this repo as a zip and unzip int your `wp-content/plugins` folder, or `git clone` into the same directory.

== Filters ==

Sample filter for `functions.php`:

```php
add_filter(
    'utexas_yec_scholarship_fields',
	function( $posts ) {

	  $posts['title']  = 'value to input';
	  $posts['excerpt']  = 'this is an excerpt';

	  return $posts;
	},
	10,
	2
);
```

== Changelog ==
- Add core Scholarship CPT and filters to manipulate saved post data
