import React from '@wordpress/element';
import { __ } from '@wordpress/i18n';

const Header = (props) => {
	const { activeAccount, accounts, version } = EDBIData;
    const { formData, setFormData } = props;

	console.log('header formdaa', formData);

	const saveSettings = () => {
		console.log('saveSettings', formData);
	}

	return (
		<div className='edbi-page__header'>
			<div className='flex items-center edbi-page__header__left'>
				<i className='dashicons dashicons-admin-generic'></i>
				<h2>
					{
						__( 'Settings', 'easy-dropbox-integration' )
					}
					<span>v{version}</span>
				</h2>
			</div>
			<div className='edbi-page__header__right'>
				<button className='px-5 py-3 text-sm text-white rounded-md bg-secondary' onClick={saveSettings}>
					<i className='dashicons dashicons-saved'></i>{ ' ' }
					Save Changes
				</button>
			</div>
		</div>
	);
};

export default Header;
