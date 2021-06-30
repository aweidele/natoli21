<?php
/**
 * @package WordPress
 * @subpackage natoli
 */
global $natoli_unique_index;
$natoli_unique_index = 0;

function icon($name) {
  get_template_part('includes/icons/icon', $name.'.svg');
}

function natoli_get_unique_id() {
	global $natoli_unique_index;
	return "id_".$natoli_unique_index++;
}
