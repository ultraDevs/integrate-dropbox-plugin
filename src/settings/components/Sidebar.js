import React from 'react';
import { useState } from '@wordpress/element';
import classNames from 'classnames';
import { __ } from '@wordpress/i18n';
import { useSelect, dispatch } from '@wordpress/data';

const Sidebar = () => {

	const {
		activeAccount,
	} = IDBData;
	
	const [aItem, setItem] = useState('dropbox');

	const items = [
		{
			name: __( 'My Dropbox', 'integrate-dropbox' ),
			img: IDBData.assets + "images/dropbox.svg",
			slug: 'dropbox',
		},
		// {
		// 	name: __( 'Shared with me', 'integrate-dropbox' ),
		// 	img: IDBData.assets + "images/dropbox.svg",
		// },
	];
    return (
		<>
			<div className="idb-settings__l">
				<div className="idb-settings__sidebar">
					<div className="idb-settings__sidebar__content">
						<div className="idb-settings__sidebar__upload">
							<button
								onClick={ () => dispatch('dropbox-browser').setData('showUploader', true) }
								className="ud-c-btn ud-c-btn--secondary"
							>
								<img
									src={IDBData.assets + "images/upload.svg"}
								/>
								<span>Upload Files</span>
							</button>
						</div>
						<div className="idb-settings__sidebar__items">
							{items.map((item, index) => {
								return (
									<div
										key={index}
										className={classNames(
											"idb-settings__sidebar__item",
											{
												"idb-settings__sidebar__item--active":
													item.slug === aItem,
											}
										)}
										onClick={() => setItem(item.slug)}
									>
										<img src={item.img} />
										<span>{item.name}</span>
									</div>
								);
							})}
						</div>
						<div className="idb-settings__sidebar__storage-info">
							<div className="idb-settings__sidebar__storage-info__img">
								<img
									src={IDBData.assets + "images/storage.svg"}
								/>
							</div>
							<div className="idb-settings__sidebar__storage-info__more">
								<div className="idb-settings__sidebar__storage-info__more__progress">
									<div
										className="idb-settings__sidebar__storage-info__more__progress__bar"
										style={{
											width: `${activeAccount?.storage?.percent}%`,
										}}
									></div>
								</div>
								
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Sidebar;
