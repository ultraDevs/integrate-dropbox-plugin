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
			slug: 'types',
			label: __( 'Types', 'easy-dropbox-integration' ),
			icon: 'dashicons-admin-users'
		},
		{
			slug: 'source',
			label: __( 'Source', 'easy-dropbox-integration' ),
			icon: 'dashicons-admin-appearance'
		},
		// {
		// 	slug: 'filters',
		// 	label: __( 'Filters', 'easy-dropbox-integration' ),
		// 	icon: 'dashicons-admin-site'
		// },
		{
			slug: 'advanced',
			label: __( 'Advanced', 'easy-dropbox-integration' ),
			icon: 'dashicons-admin-generic'
		},
		// {
		// 	slug: 'permission',
		// 	label: __( 'Permission', 'easy-dropbox-integration' ),
		// 	icon: 'dashicons-admin-generic'
		// },
	];
	

    return (
		<>
			<div className="edbi-settings__l">
				<div className="edbi-settings__sidebar">
					<div className="edbi-settings__sidebar__content">
						<div className="edbi-settings__sidebar__items">
							{
								items.map( ( item, index ) => (
									<div
										key={ index }
										className={ classNames( 'edbi-settings__sidebar__item', {
											'edbi-settings__sidebar__item--active': activeItem === item.slug,
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
