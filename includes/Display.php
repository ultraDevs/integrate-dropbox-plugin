<?php
/**
 * Class for Frontend View.
 *
 * @package IntegrateDropbox
 * @since 1.0.0
 */

namespace ultraDevs\IntegrateDropbox;

use ultraDevs\IntegrateDropbox\Helper;

/**
 * Manage Frontend View.
 *
 * This class is for managing Frontend View.
 *
 * @package IntegrateDropbox
 * @since 1.0.0
 */
class Display {
	/**
	 * Constructor
	 */
	public function __construct() {
		add_action( 'wp_footer', array( $this, 'view' ) );
	}

	/**
	 * Frontend View.
	 *
	 * @since 1.0.0
	 */
	public function view() {

		$panel_settings = Helper::get_option( 'sl_panel_settings' );
		$panel_content  = Helper::get_option( 'sl_panel_content' );
		$panel_styles   = Helper::get_option( 'sl_panel_styles' );

		$sl_settings = array(
			'width'    => $panel_settings['width'] ? (int) $panel_settings['width'] : 300,
			'position' => $panel_settings['position'] ? esc_attr( $panel_settings['position'] ) : 'left',
		);
		?>
		<div
			class="ud-stickylist-panel"
			data-settings=<?php echo wp_json_encode( $sl_settings ); ?>
			style="--panel-width: <?php echo esc_attr( $panel_settings['width'] ); ?>px;
			--panel-left: <?php echo 'left' === esc_attr( $panel_settings['position'] ) ? '-' . esc_attr( $panel_settings['width'] ) . 'px' : 'auto'; ?>;
			--panel-right: <?php echo 'right' === esc_attr( $panel_settings['position'] ) ? '-' . esc_attr( $panel_settings['width'] ) . 'px' : 'auto'; ?>;
			--panel-opener-left: <?php echo 'left' === esc_attr( $panel_settings['position'] ) ? '0px' : 'auto'; ?>;
			--panel-opener-right: <?php echo 'right' === esc_attr( $panel_settings['position'] ) ? '0px' : 'auto'; ?>;
			--panel-opener-color: <?php echo esc_attr( $panel_styles['opener_color'] ); ?>;
			--panel-opener-bg-color: <?php echo esc_attr( $panel_styles['opener_bg_color'] ); ?>;
			--panel-opener-hover-color: <?php echo esc_attr( $panel_styles['opener_hover_color'] ); ?>;
			--panel-opener-hover-bg-color: <?php echo esc_attr( $panel_styles['opener_hover_bg_color'] ); ?>;
			--panel-font: '<?php echo esc_attr( $panel_styles['typo']['font_family'] ); ?>', sans-serif;
			--panel-font-size: <?php echo esc_attr( $panel_styles['typo']['font_size'] ); ?>px;
			--panel-bg: <?php echo esc_attr( $panel_styles['bg_color'] ); ?>;
			--panel-title-bg: <?php echo esc_attr( $panel_styles['title_bg_color'] ); ?>;
			--panel-title-color: <?php echo esc_attr( $panel_styles['title_color'] ); ?>;
			--panel-title-font: '<?php echo esc_attr( $panel_styles['title_typo']['font_family'] ); ?>', sans-serif;
			--panel-title-font-size: <?php echo esc_attr( $panel_styles['title_typo']['font_size'] ); ?>px;
			--panel-title-font-size: <?php echo esc_attr( $panel_styles['title_typo']['font_size'] ); ?>px;"
		>
			<div class="ud-ud-id-overlay"></div>
			<div class="ud-ud-id-opener">
				<a href="#">
					<?php
						echo 'icon' === $panel_settings['opener_media']['type'] ? '<i class="ud-ud-id-pi-o ' . esc_attr( $panel_settings['opener_media']['icon'] ) . '"></i>' : '<img src="' . esc_url( $panel_settings['opener_media']['image'] ) . '" alt="" class="ud-ud-id-pi-o">';
					?>
					<i class="ud-ud-id-pi-h fas fa-times"></i>
				</a>
			</div>
			<div class="ud-ud-id-content">
				<div class="ud-ud-id-content--wrap">
					<h2 class="ud-ud-id-title">
						<?php echo esc_html( $panel_content['title'] ); ?>
					</h2>
					<div class="ud-ud-id-content-c">
						<?php echo $panel_content['html']; //phpcs:ignore ?>
					</div>
				</div>
			</div>
		</div>
		<?php
	}
}
