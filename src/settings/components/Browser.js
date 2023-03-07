import React from 'react';
import { useEffect, useState } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import apiFetch from '@wordpress/api-fetch';
import classnames from 'classnames';
import { getIcon } from '../helper/common';

const Browser = () => {
	const filter = useSelect((select) => select('dropbox-browser').getData('filter'));
	const refresh = useSelect((select) => select('dropbox-browser').getData('refresh'));
	const isLoading = useSelect((select) => select('dropbox-browser').getData('isLoading'));
	const currentPath = useSelect((select) => select('dropbox-browser').getData('current_path'));
	const previousPath = useSelect((select) => select('dropbox-browser').getData('previous_path'));

	const { activeAccount } = IDBAdmin;
	const { dispatch } = wp.data;

	const [data, setData] = useState([]);

	const setPath = (path) => {
		dispatch('dropbox-browser').setData('isLoading', true);
		dispatch('dropbox-browser').setData('current_path', path);
	};

	useEffect(() => {
		apiFetch({
			path: '/idb/v1/get-files',
			method: 'POST',
			data: {
				path: currentPath,
				accountId: activeAccount['id'],
			},
		})
			.then((response) => {
				dispatch('dropbox-browser').setData('breadcrumbs', response.data.breadcrumbs);
				setData(response.data.files);
				dispatch('dropbox-browser').setData('previous_path', response.data.previous_path);
				dispatch('dropbox-browser').setData('isLoading', false);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [currentPath, refresh]);

	const folders = data.filter((item) => {
		return item.is_dir ? item : '';
	});

	const files = data.filter((item) => {
		return item.is_file ? item : '';
	});

	return (
		<>
			<div className='ud-c-file-browser__content'>
				{isLoading ? (
					<div className='ud-c-file-browser__loading'>
						<div className='ud-c-file-browser__loading__spinner'>
							<div className='ud-c-file-browser__loading__spinner--bounce1'></div>
							<div className='ud-c-file-browser__loading__spinner--bounce2'></div>
							<div className='ud-c-file-browser__loading__spinner--bounce3'></div>
						</div>
					</div>
				) : (
					''
				)}
				{folders.length ? (
					<>
						<div className='ud-c-file-browser__file-list'>
							<div
								className='ud-c-file-browser__file-list__item ud-c-file-browser__file-list__prev ud-c-file-browser__file-list__item--folder'
								onClick={() => {
									setPath(previousPath);
								}}
							>
								<div className='ud-c-file-browser__file-list__item__info'>
									<i class='dashicons dashicons-arrow-left-alt2'></i>
									<span>Previous Folder</span>
								</div>
							</div>
							{folders.map((item, index) => {
								return (
									<div
										className={classnames(
											'ud-c-file-browser__file-list__item',
											'ud-c-file-browser__file-list__item--folder'
										)}
										key={index}
										onClick={() => {
											if (item.is_dir) {
												setPath(item.path);
											}
										}}
									>
										<div className='ud-c-file-browser__file-list__item__info'>
											<i class='dashicons dashicons-open-folder'></i>
											<span>{item.name}</span>
										</div>
									</div>
								);
							})}
						</div>
					</>
				) : (
					''
				)}

				{files.length ? (
					<>
						<div className='ud-c-file-browser__file-list'>
							{files.map((item, index) => {
								return (
									<div
										className={classnames(
											'ud-c-file-browser__file-list__item',
											'ud-c-file-browser__file-list__item--file'
										)}
										key={index}
										onClick={() => {
											if (item.is_dir) {
												setPath(item.path);
											}
										}}
									>
										{item.can_preview && item.thumbnail ? (
											<div className='ud-c-file-browser__file-list__item__thumb'>
												<img src={item.thumbnail} />
											</div>
										) : (
											<div className='ud-c-file-browser__file-list__item__icon'>
												<span
													className={classnames(
														'dashicons',
														getIcon(item.ext)
													)}
												></span>
											</div>
										)}
										<div className='ud-c-file-browser__file-list__item__info'>
											<i class='dashicons dashicons-open-folder'></i>
											<span>{item.name}</span>
										</div>
									</div>
								);
							})}
						</div>
					</>
				) : (
					''
				)}
			</div>
		</>
	);
};

export default Browser;
