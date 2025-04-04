<?php
/**
 * The Template for displaying the deposit packaging type for a certain product.
 *
 * This template can be overridden by copying it to yourtheme/woocommerce-germanized/single-product/deposit-packaging-type.php.
 *
 * HOWEVER, on occasion Germanized will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see https://github.com/vendidero/woocommerce-germanized/wiki/Overriding-Germanized-Templates
 * @package Germanized/Templates
 * @version 3.18.8
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
} // Exit if accessed directly

global $product;
?>

<?php if ( $packaging_type_title = wc_gzd_get_gzd_product( $product )->get_deposit_packaging_type_title() ) : ?>
	<p class="wc-gzd-additional-info deposit-packaging-type"><?php echo esc_html( $packaging_type_title ); ?></p>
<?php elseif ( $product->is_type( 'variable' ) ) : ?>
	<p class="wc-gzd-additional-info deposit-packaging-type wc-gzd-additional-info-placeholder" aria-hidden="true"></p>
<?php endif; ?>
