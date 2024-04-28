import React from 'react';
import { useEffect, useState } from '@wordpress/element';
import { useSelect, dispatch } from '@wordpress/data';
import apiFetch from '@wordpress/api-fetch';
import classnames from 'classnames';
import { generateDataAttributes, getIcon } from '../helper/common';

import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import lgThumbnail from 'lightgallery/plugins/thumbnail';

// React Contextify.
import { Item, Menu, Separator, useContextMenu } from 'react-contexify';

import Modal from './Modal';
import { showAlert } from '../../utils/alertHelper';
import Uploader from './Uploader';

const FOLDER_MENU = 'file-browser-folder';
const FILE_MENU = 'file-browser-file';

const Browser = () => {
	const filter = useSelect((select) => select('dropbox-browser').getData('filter'));
	const refresh = useSelect((select) => select('dropbox-browser').getData('refresh'));
	const isLoading = useSelect((select) => select('dropbox-browser').getData('isLoading'));
	const currentPath = useSelect((select) => select('dropbox-browser').getData('current_path'));
	const previousPath = useSelect((select) => select('dropbox-browser').getData('previous_path'));
	const showUploader = useSelect((select) => select('dropbox-browser').getData('showUploader'));

	const [activeItem, setActiveItem] = useState([]);
	const [showModal, setShowModal] = useState(false);

	const { activeAccount } = IDBData;

	const [data, setData] = useState([]);



	const setPath = (path) => {
		dispatch('dropbox-browser').setData('isLoading', true);
		dispatch('dropbox-browser').setData('current_path', path);
		// if ( '/' === path ) {
		// 	dispatch('dropbox-browser').setData('previous_path', '/');
		// } else {
		// 	dispatch('dropbox-browser').setData('current_path', path);
		// }
	};

	useEffect(() => {
		if ( activeAccount.length !== 0 ) {
			dispatch('dropbox-browser').setData('isLoading', true);
			apiFetch({
				path: '/idb/v1/get-files',
				method: 'POST',
				data: {
					path: currentPath,
					accountId: activeAccount['id'],
					filter: filter,
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
		}
	}, [currentPath, refresh, filter]);

	const folders = data.filter((item) => {
		return item.is_dir ? item : '';
	});

	const files = data.filter((item) => {
		return item.is_file ? item : '';
	});


	const showContexify = (e, name, data) => {
		const { show } = useContextMenu({
			id: name,
		});

		show({
			event: e,
			props: {
				data: data,
			},
		});
	};

	// I'm using a single event handler for all items
	// but you don't have too :)
	const handleItemClick = ({ id, event, props }) => {
		const { item } = props.data;
		switch (id) {
			case 'rename':
				showAlert({
					title: 'Rename',
					html: `
					<p>Rename the file</p>
					<div>
						<input id="swal-rename-input" class="swal2-input" value="${item.name}" autofocus />
					</div>
				`,
					confirmButtonText: 'Rename',
				}).then((result) => {
					if (result.isConfirmed) {
						wp.ajax
							.post('idb_rename', {
								account_id: activeAccount['id'],
								nonce: IDBData?.ajaxNonce,
								old_name: item.name,
								new_name: document.getElementById('swal-rename-input').value,
							})
							.then((response) => {
								showAlert({
									title: 'Success',
									text: response.message,
									icon: 'success',
								});

								// Dispatch an action to refresh the browser.
								dispatch('dropbox-browser').setData('refresh', !refresh);
							})
							.catch((error) => {
								showAlert({
									title: 'Error',
									text: error.message,
									icon: 'error',
								});
							});
					}
				});
				break;
			case 'duplicate':
				// showAlert({});
				break;
			case 'cut':
				console.log(event, props);
				break;
			case 'delete':
			showAlert({
				title: 'Are you sure?',
				html: `
					<h4 style="color:red">You won't be able to revert this!</h4>
				`,
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Yes, delete it!',
			}).then((result) => {
				if (result.isConfirmed) {
					wp.ajax
						.post('idb_delete', {
							account_id: activeAccount['id'],
							nonce: IDBData?.ajaxNonce,
							path: item.path,
						})
						.then((response) => {
							showAlert({
								title: 'Deleted!',
								text: 'Your file has been deleted',
								icon: 'success',
							});

							// Dispatch an action to refresh the browser.
							dispatch('dropbox-browser').setData('refresh', !refresh);
						})
						.catch((error) => {
							showAlert({
								title: 'Error',
								text: error.message,
								icon: 'error',
							});
						});
				}
			});
			break;
		}
	};

	const filePreview = (item) => {
		setShowModal(true);
	};

	console.log(files);

	return (
		<>
			{showUploader && (
				<Uploader />
			)}
			
			<Menu id={FILE_MENU}>
				<Item id='preview' onClick={handleItemClick}>
					Preview
				</Item>
				<Item id='preview' onClick={handleItemClick}>
					Preview in a new window
				</Item>
				<Item id='direct-link' onClick={handleItemClick}>
					Direct Link
				</Item>
				<Item id='share' onClick={handleItemClick}>
					Share
				</Item>
				<Item id='download' onClick={handleItemClick}>
					Download
				</Item>
				<Separator />
				<Item id='rename' onClick={handleItemClick}>
					Rename
				</Item>
				<Item id='move-to' onClick={handleItemClick}>
					Move to
				</Item>
				<Item id='duplicate' onClick={handleItemClick}>
					Duplicate
				</Item>
				<Separator />
				<Item id='delete' onClick={handleItemClick}>
					Delete
				</Item>
			</Menu>

			<Menu id={FOLDER_MENU}>
				<Item id='direct-link' onClick={handleItemClick}>
					Direct Link
				</Item>
				<Item id='share' onClick={handleItemClick}>
					Share
				</Item>
				<Item id='download' onClick={handleItemClick}>
					Download
				</Item>
				<Separator />
				<Item id='rename' onClick={handleItemClick}>
					Rename
				</Item>
				<Item id='move-to' onClick={handleItemClick}>
					Move to
				</Item>
				<Item id='duplicate' onClick={handleItemClick}>
					Duplicate
				</Item>
				<Separator />
				<Item id='delete' onClick={handleItemClick}>
					Delete
				</Item>
			</Menu>

			<div className='idb-file-browser__content'>
				{
					activeAccount.length === 0 ? (
						<>
							<div className='idb-notice'>
								<h3>No Accounts</h3>
								<p>Please Add your account to continue</p>

								<button
									onClick={() => {
										window.open(
											IDBData.authUrl,
											'_blank',
											'width=600,height=600,toolbar=yes,scrollbars=yes,resizable=yes'
										);
									}}
									className='ud-c-btn ud-c-btn--primary'
								>
									Add Account
								</button>
							</div>
						</>
					) : (
						<>
							{isLoading ? (
								<div className='idb-file-browser__loading'>
									<div className='idb-file-browser__loading__spinner'>
										<div className='idb-file-browser__loading__spinner--bounce1'></div>
										<div className='idb-file-browser__loading__spinner--bounce2'></div>
										<div className='idb-file-browser__loading__spinner--bounce3'></div>
									</div>
								</div>
							) : (
								''
							)}

							<div className='idb-file-browser__file-list'>
								{previousPath && (
									<div
										className='idb-file-browser__file-list__item idb-file-browser__file-list__prev idb-file-browser__file-list__item--folder'
										onClick={() => {
											setPath(previousPath);
										}}
									>
										<div className='idb-file-browser__file-list__item__info'>
											<i class='dashicons dashicons-arrow-left-alt2'></i>
											<span>Previous Folder</span>
										</div>
									</div>
								)}

								{folders.length > 0 &&
									folders.map((item, index) => {
										return (
											<div
												className={classnames(
													'idb-file-browser__file-list__item',
													'idb-file-browser__file-list__item--folder'
												)}
												key={index}
												onClick={(e) => {
													if (item.is_dir) {
														setPath(item.path);
													}
												}}
												onContextMenu={(e) => {
													showContexify(e, FOLDER_MENU, {
														type: 'folder',
														path: item.path,
														item,
													});
												}}
											>
												<div className='idb-file-browser__file-list__item__info'>
													<i class='dashicons dashicons-open-folder'></i>
													<span>{item.name}</span>
												</div>
											</div>
										);
									})}
							</div>

							{files.length ? (
								<>
									{/* <div className='idb-file-browser__file-list'> */}
									<LightGallery
										plugins={[lgZoom, lgVideo, lgThumbnail]}
										mode="lg-fade"
										pager={false}
										thumbnail={true}
										galleryId={'nature'}
										autoplayFirstVideo={false}
										// elementClassNames={'gallery'}
										elementClassNames={'idb-file-browser__file-list'}
										mobileSettings={{
											controls: true,
											showCloseIcon: true,
											download: true,
											rotate: true,
										}}
										licenseKey="DEC07C11-66CA-441B-91EB-78600E170147" 
									>
										{files.map((item, index) => {
											return (
												<a
													className={classnames(
														'idb-file-browser__file-list__item',
														'idb-file-browser__file-list__item--file',
														'gallery-item'
													)}
													{
														...generateDataAttributes(item) 
													}
													key={index}
													// onClick={() => {
													// 	setActiveItem(item);
													// 	filePreview(item);
													// }}
													onContextMenu={(e) => {
														showContexify(e, FILE_MENU, {
															type: 'file',
															path: item.path,
															item,
														});
													}}
													
													data-src={
														`${IDBData.ajaxUrl}?action=idb_file_preview&account_id=${activeAccount['id']}&nonce=${IDBData?.ajaxNonce}&file=${item.id}`
													}
													// href={
													// 	`${IDBData.ajaxUrl}?action=idb_file_preview&account_id=${activeAccount['id']}&nonce=${IDBData?.ajaxNonce}&file=${item.id}`
													// }
													// href={item?.thumbnail}
													

													// data-iframe={
													// 	'pdf' === item.ext ? true : false
													// }
												>
													{item.can_preview && item.thumbnail ? (
														<div className='idb-file-browser__file-list__item__thumb'>
															<img src={item.thumbnail} />
														</div>
													) : (
														<div className='idb-file-browser__file-list__item__icon'>
															<span
																className={classnames(
																	'dashicons',
																	getIcon(item.ext)
																)}
															></span>
														</div>
													)}
													<div className='idb-file-browser__file-list__item__info'>
														<i
															class={classnames('dashicons', getIcon(item.ext))}
														></i>
														<span>{item.name}</span>
													</div>
												</a>
											);
										})}
									{/* </div> */}
									</LightGallery>
								</>
							) : (
								''
							)}
						</>
					)
				}
			</div>

			{/* <div className='idb-file-browser__preview'>
				<LightGallery
					ref={lightGallery}
					plugins={[lgZoom, lgThumbnail, lgVideo]}
					thumbnail={true}
					animateThumb={false}
					onInit={onLGInit}
				>
					{getLGItems}
				</LightGallery>
			</div> */}
				


		
		</>
	);
};

export default Browser;
