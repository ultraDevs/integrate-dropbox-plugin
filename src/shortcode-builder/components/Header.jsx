import React from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { setActiveTabWithParam } from '../../utils';

const Header = (props) => {
	const { activeAccount, accounts, version } = EDBIData;
    const { currentTab, setCurrentTab, title, type, save, setSave, shortCodeTitle, setShortCodeTitle } = props;


	const saveSettings = () => {
	}

	return (
		<div className='edbi-page__header'>
			<div className='flex items-center edbi-page__header__left'>
				<i className='dashicons dashicons-admin-generic'></i>
				<h2>
					{
						title || __( 'ShortCode Builder', 'integrate-dropbox-wp' )
					}
					<span>v{version}</span>
				</h2>
			</div>
			{
				( 'create' === type || 'edit' === type ) && (
					<div className='ml-5 bg-white edbi-shortcodes-create'>
						<form>
							<input
								type='text'
								placeholder={
									__( 'Enter ShortCode Title', 'integrate-dropbox-wp')
								}
								value={
									shortCodeTitle || __( 'ShortCode Title', 'integrate-dropbox-wp' )
								}
								onChange={
									(e) => setShortCodeTitle(e.target.value)
								}
							/>
						</form>
					</div>
				)
			}
			<div className='edbi-page__header__right'>
				{
					( 'create' === type || 'edit' === type ) ? (
						<>
							<button className='px-5 py-3 text-sm text-white rounded-md bg-secondary' onClick={
								() => {
									setActiveTabWithParam('shortcodes', setCurrentTab);
								}
							}>
								<i className='mr-2 dashicons dashicons-arrow-left-alt'></i>
								Back
							</button>
							<button className='px-5 py-3 text-sm text-white rounded-md bg-secondary' onClick={
								() => setSave(!save)
							}>
								<i className='mr-2 dashicons dashicons-saved'></i>
								Save
							</button>
							{/* {
								'create' === type && (
									<button className='px-5 py-3 text-sm text-white rounded-md bg-secondary' onClick={
										saveSettings
									}>
										<i className='mr-2 dashicons dashicons-plus-alt'></i>
										Save
									</button>
								)
							}

							{
								'update' === type && (
									<button className='px-5 py-3 text-sm text-white rounded-md bg-secondary' onClick={
										saveSettings
									}>
										<i className='mr-2 dashicons dashicons-plus-alt'></i>
										Update
									</button>
								)
							} */}
						</>
					) : (
						<button className='px-5 py-3 text-sm text-white rounded-md bg-secondary' onClick={
							() => setActiveTabWithParam('create', setCurrentTab)
						}>
							<i className='mr-2 dashicons dashicons-plus-alt'></i>
							Add New ShortCode
						</button>
					)
				}


			</div>
		</div>
	);
};

export default Header;
