import React from '@wordpress/element';
import { __ } from '@wordpress/i18n';

const Header = (props) => {
	const { activeAccount, accounts, version } = EDBIData;
    const { currentTab, setCurrentTab, title, type } = props;


	const saveSettings = () => {
	}

	return (
		<div className='edbi-page__header'>
			<div className='flex items-center edbi-page__header__left'>
				<i className='dashicons dashicons-admin-generic'></i>
				<h2>
					{
						title || __( 'ShortCode Builder', 'easy-dropbox-integration' )
					}
					<span>v{version}</span>
				</h2>
			</div>
			<div className='edbi-page__header__right'>
				<button className='px-5 py-3 text-sm text-white rounded-md bg-secondary' onClick={
					() => setCurrentTab('create')
				}>
					<i className='mr-2 dashicons dashicons-plus-alt'></i>
					Add New ShortCode
				</button>
			</div>
		</div>
	);
};

export default Header;
