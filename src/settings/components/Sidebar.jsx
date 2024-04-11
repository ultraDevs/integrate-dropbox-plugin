import React from 'react';
import { useState } from '@wordpress/element';
import classNames from 'classnames';
import { __ } from '@wordpress/i18n';
import { useSelect, dispatch } from '@wordpress/data';

const Sidebar = ( props ) => {	

	const { activeItem, setActiveItem } = props;

	const {
		activeAccount,
	} = IDBData;

	const items = [
		{
			slug: 'accounts',
			label: __( 'Accounts', 'integrate-dropbox' ),
			icon: 'dashicons-admin-users'
		},
		{
			slug: 'appearance',
			label: __( 'Appearance', 'integrate-dropbox' ),
			icon: 'dashicons-admin-appearance'
		},
	];
	

    return (
		<>
			<div className="idb-settings__l">
				<div className="idb-settings__sidebar">
					<div className="idb-settings__sidebar__content">
						<div className="idb-settings__sidebar__items">
							{
								items.map( ( item, index ) => (
									<div
										key={ index }
										className={ classNames( 'idb-settings__sidebar__item', {
											'idb-settings__sidebar__item--active': activeItem === item.slug,
										} ) }
										onClick={ () => {
											setActiveItem( item.slug );

											// Add slug with # to URL.
											window.history.pushState( '', '', '#' + item.slug );
										} }
									>	
										<span className={ `dashicons ${ item.icon }` }></span>
										<span>{ item.label }</span>
									</div>
								) )
							}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Sidebar;
