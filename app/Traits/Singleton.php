<?php
/**
 * Singleton Trait
 *
 * @package IDBWP
 * @since 1.0.0
 */
namespace ultraDevs\IDBWP\App\Traits;

/**
 * Singleton Trait
 *
 * @package IDBWP
 * @since 1.0.0
 */
trait Singleton {

	/**
	 * Instance - Singleton Pattern
	 *
	 * @var self
	 */
	protected static $instance = null;

	/**
	 * Get Instance
	 *
	 * @param string $account_id Account ID.
	 *
	 * @return self
	 */
	public static function get_instance( $account_id = null ) {
		if ( null === static::$instance ) {
			static::$instance = new static( $account_id );
		}

		return static::$instance;
	}

	/**
	 * Wakeup
	 */
	public function __wakeup() {
		throw new \Exception( 'Cannot unserialize a singleton.' );
	}
}
