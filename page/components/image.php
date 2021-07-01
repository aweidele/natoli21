<?php
/**
 * Description: Flexible tagline
 *
 * @package WordPress
 * @subpackage Natoli
 */
$image = get_sub_field("image", $currentId);
?>
<div class="image">
  <figure>
    <img alt="<?= $image["alt"] ?>" src="<?= $image["sizes"]["medium"] ?>" />
  </figure>
</div>
