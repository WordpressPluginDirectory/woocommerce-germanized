<?php
/**
 * The Template for displaying safety instructions for a certain product.
 *
 * This template can be overridden by copying it to yourtheme/woocommerce-germanized/single-product/safety-instructions.php.
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
$heading = apply_filters( 'woocommerce_gzd_product_safety_instructions_heading', __( 'Safety instructions', 'woocommerce-germanized' ) );
?>

<?php if ( wc_gzd_get_product( $product )->get_formatted_safety_instructions() ) : ?>
	<?php if ( isset( $print_title ) && $print_title && $heading ) : ?>
		<h3 class="wc-gzd-product-safety-instructions-heading"><?php echo esc_html( $heading ); ?></h3>
	<?php endif; ?>

	<div class="safety-instructions wc-gzd-additional-info">
		<?php echo wp_kses_post( wc_gzd_get_product( $product )->get_formatted_safety_instructions() ); ?>
	</div>
<?php elseif ( $product->is_type( 'variable' ) ) : ?>
	<?php if ( isset( $print_title ) && $print_title && $heading ) : ?>
		<h3 class="wc-gzd-product-safety-instructions-heading wc-gzd-additional-info-placeholder" aria-hidden="true"></h3>
	<?php endif; ?>

	<div class="wc-gzd-additional-info safety-instructions wc-gzd-additional-info-placeholder" aria-hidden="true"></div>
<?php endif; ?>
