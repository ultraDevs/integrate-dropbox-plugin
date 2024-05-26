<?php
/**
 * Shortcode Class
 *
 * @package EasyDropBoxIntegration
 * @since 1.0.0
 */
namespace ultraDevs\EasyDropBoxIntegration;

use ultraDevs\EasyDropBoxIntegration\App\Shortcode_Builder;
use ultraDevs\EasyDropBoxIntegration\App\Traits\Singleton;
use ultraDevs\EasyDropBoxIntegration\Assets_Manager;

/**
 * Shortcode Class
 *
 * @package EasyDropBoxIntegration
 * @since 1.0.0
 */
class Shortcode {
    use Singleton;

    /**
     * Shortcode Type
     */
    public $type = '';

    /**
     * Shortcode Config
     */
    public $config = '';


    /**
     * Register Shortcode
     */
    public function register() {
        add_shortcode( 'easy_dropbox_integration', array( $this, 'render_shortcode' ) );
    }

    /**
     * Render Shortcode
     *
     * @param array $atts Shortcode attributes.
     * @param string $data Shortcode data.
     *
     * @return string
     */
    public function render_shortcode( $atts, $data = null ) {
        $atts = shortcode_atts(
            array(
                'id' => '',
            ),
            $atts,
            'easy_dropbox_integration'
        );

        $id = intval( $atts['id'] );

        if ( empty( $id ) ) {
            return '';
        }

        // Assets.
        $assets_manager = Assets_Manager::get_instance();
		add_action( 'wp_enqueue_scripts', array( $assets_manager, 'frontend_assets' ) );


        $shortcode = Shortcode_Builder::get_instance()->get_shortcode( $id );

        if ( ! $shortcode ) {
            return '';
        }

        $shortcode_config = maybe_unserialize( $shortcode['config'] );

        $this->type = $shortcode_config['type'];

        $this->config = $shortcode_config;

        $content = '<div class="edbi-shortcode edbi-shortcode--' . esc_attr( $this->type ) . '">';
        $content .= '<div class="edbi-image-gallery">';
        $content .= '<h2>' . esc_html( $shortcode['title'] ) . '</h2>';
        if ( 'image-gallery' === $this->type ) {
            $content .= $this->render_image_gallery();
        }
        $content .= '</div>';

        return $content;

    }

    /**
     * Render Image Gallery
     *
     * @return string
     */
    public function render_image_gallery() {
        $items = $this->config['source']['items'] ? $this->config['source']['items'] : '';

        if ( ! empty( $items ) && is_array( $items ) ) {
            $output = '<div class="edbi-image-gallery__items">';
            foreach ( $items as $item ) {
                $output .= '<div class="edbi-image-gallery__items__item"><img src="' . $item['thumbnail'] . '" /></div>';
            }
            $output .= '</div>';
        }

        return $output;
    }

}