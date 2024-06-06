import React from 'react';
import { useState } from '@wordpress/element';
import classNames from 'classnames';
import { __ } from '@wordpress/i18n';
import { formatBytes } from '../helper/common';
import { useSelect, dispatch } from '@wordpress/data';

const Sidebar = () => {

	const {
		activeAccount,
	} = EDBIData;
	
	const [aItem, setItem] = useState('dropbox');

	const items = [
		{
			name: __( 'My Dropbox', 'integrate-dropbox-wp' ),
			img: EDBIData.assets + "images/dropbox.svg",
			slug: 'dropbox',
		},
		// {
		// 	name: __( 'Shared with me', 'integrate-dropbox-wp' ),
		// 	img: EDBIData.assets + "images/dropbox.svg",
		// },
	];
    return (
		<>
			<div className="edbi-file-browser__l">
				<div className="edbi-file-browser__sidebar">
					<div className="edbi-file-browser__sidebar__content">
						<div className="edbi-file-browser__sidebar__upload">
							<button
								onClick={ () => dispatch('dropbox-browser').setData('showUploader', true) }
								className="ud-c-btn ud-c-btn--secondary"
							>
								<img
									src={EDBIData.assets + "images/upload.svg"}
								/>
								<span>Upload Files</span>
							</button>
						</div>
						<div className="edbi-file-browser__sidebar__items">
							{items.map((item, index) => {
								return (
									<div
										key={index}
										className={classNames(
											"edbi-file-browser__sidebar__item",
											{
												"edbi-file-browser__sidebar__item--active":
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
						<div className="edbi-file-browser__sidebar__storage-info">
							<div className="edbi-file-browser__sidebar__storage-info__img">
								<img
									src={EDBIData.assets + "images/storage.svg"}
								/>
							</div>
							<div className="edbi-file-browser__sidebar__storage-info__more">
								<div className="edbi-file-browser__sidebar__storage-info__more__progress">
									<div
										className="edbi-file-browser__sidebar__storage-info__more__progress__bar"
										style={{
											width: `${activeAccount?.storage?.percent}%`,
										}}
									></div>
								</div>
								{activeAccount.storage && (
									<div className="edbi-file-browser__sidebar__storage-info__more__text">
										{formatBytes(
											activeAccount?.storage?.used
										)}{" "}
										of{" "}
										{formatBytes(
											activeAccount?.storage?.allocated
										)}
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Sidebar;
