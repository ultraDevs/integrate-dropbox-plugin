import React from 'react';

const Header = () => {
	const { activeAccount, accounts } = IDBData;

	return (
		<div className='idb-settings__header'>
			<h2>Settings</h2>
			<div className='idb-settings__header__right'>
				<button className='px-4 py-3 text-sm text-white rounded-md bg-secondary'>Save Changes</button>
			</div>
		</div>
	);
};

export default Header;
