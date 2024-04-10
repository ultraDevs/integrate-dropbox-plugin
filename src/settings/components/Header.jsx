import React from 'react';

const Header = () => {
	const { activeAccount, accounts } = IDBData;

	return (
		<div className='idb-settings__header'>
			<h2>Settings</h2>
			<div className='idb-settings__header__right'>
				Save Changes
			</div>
		</div>
	);
};

export default Header;
