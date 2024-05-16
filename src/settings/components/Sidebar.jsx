import React from 'react';
import { useState } from '@wordpress/element';
import classNames from 'classnames';
import { __ } from '@wordpress/i18n';
import { useSelect, dispatch } from '@wordpress/data';

const Sidebar = ( props ) => {	

	const { activeItem, setActiveItem } = props;

	const {
		activeAccount,
	} = EDBIData;

	const items = [
		{
			slug: 'accounts',
			label: __( 'Accounts', 'easy-dropbox-integration' ),
			icon: 'dashicons-admin-users'
		},
		// {
		// 	slug: 'appearance',
		// 	label: __( 'Appearance', 'easy-dropbox-integration' ),
		// 	icon: 'dashicons-admin-appearance'
		// },
	];
	

    return (
		<>
			<div className="edbi-page__l">
				<div className="edbi-page__sidebar">
					<div className="edbi-page__sidebar__content">
						<div className="edbi-page__sidebar__items">
							{
								items.map( ( item, index ) => (
									<div
										key={ index }
										className={ classNames( 'edbi-page__sidebar__item', {
											'edbi-page__sidebar__item--active': activeItem === item.slug,
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
