import React from '@wordpress/element';
import { __ } from '@wordpress/i18n';

const Header = () => {
	const { activeAccount, accounts, version } = IDBData;

	return (
		<div className='idb-settings__header'>
			<div className='flex items-center idb-settings__header__left'>
				<i className='dashicons dashicons-admin-generic'></i>
				<h2>
					{
						__( 'Settings', 'integrate-dropbox' )
					}
					<span>v{version}</span>
				</h2>
			</div>
			<div className='idb-settings__header__right'>
				<button className='px-5 py-3 text-sm text-white rounded-md bg-secondary'>
					<i className='dashicons dashicons-saved'></i>{ ' ' }
					Save Changes
				</button>
			</div>
		</div>
	);
};

export default Header;
