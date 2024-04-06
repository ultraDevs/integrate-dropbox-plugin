import React from 'react';
import { useEffect, useState, useRef, useCallback } from '@wordpress/element';
import { useSelect, dispatch } from '@wordpress/data';
import apiFetch from '@wordpress/api-fetch';
import classnames from 'classnames';
import { getIcon } from '../helper/common';
import Swal from 'sweetalert2/dist/sweetalert2.js';

// React Contextify.
import { Item, Menu, Separator, Submenu, useContextMenu } from 'react-contexify';

// Light Gallery
import LightGallery from 'lightgallery/react';

// Plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';
import Modal from './Modal';

const FOLDER_MENU = 'file-browser-folder';
const FILE_MENU = 'file-browser-file';

const Browser = () => {
	const filter = useSelect((select) => select('dropbox-browser').getData('filter'));
	const refresh = useSelect((select) => select('dropbox-browser').getData('refresh'));
	const isLoading = useSelect((select) => select('dropbox-browser').getData('isLoading'));
	const currentPath = useSelect((select) => select('dropbox-browser').getData('current_path'));
	const previousPath = useSelect((select) => select('dropbox-browser').getData('previous_path'));

	const [activeItem, setActiveItem] = useState([]);
	const [showModal, setShowModal] = useState(false);

	// const [ showAlert, setShowAlert ] = useState(false);
	const [alertContent, setAlertContent] = useState({
		title: '',
		text: '',
		icon: '',
		showCancelButton: true,
		confirmButtonText: 'Yes',
		showCloseButton: true,
	});

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
	}, [currentPath, refresh, filter]);

	const folders = data.filter((item) => {
		return item.is_dir ? item : '';
	});

	const files = data.filter((item) => {
		return item.is_file ? item : '';
	});

	const showAlert = (data) => {
		const defaultData = {
			showCloseButton: true,
		};
		data = Object.assign(defaultData, data);
		return Swal.fire(data);
	};

	// const lightGallery = useRef(null);
	// const [lgItems, setLgItems] = useState(files);

	// const onLGInit = useCallback((lg) => {
	// 	if (lg) {
	// 		lightGallery.current = lg.instance;
	// 	}
	// }, []);

	// const getLGItems = useCallback(() => {
	// 	return lgItems.map((item) => {
	// 		console.log(item);
	// 		return (
	// 			<>
	// 				{item.can_preview && item.thumbnail ? (
	// 					<img src={item.thumbnail} />
	// 				) : (
	// 					<div className='ud-c-file-browser__file-list__item__icon'>
	// 						<span className={classnames('dashicons', getIcon(item.ext))}></span>
	// 					</div>
	// 				)}
	// 			</>
	// 		);
	// 	});
	// }, [lgItems]);

	// useEffect(() => {
	// 	lightGallery.current.refresh();
	// }, [files]);

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
		console.log(props);
		switch (id) {
			case 'rename':
				showAlert({
					title: 'Rename',
					html: `
					<p>Rename the file</p>
					<div>
						<input id="swal-rename-input" class="swal2-input" value="${item.name}" />
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
								Swal.fire({
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
			//etc...
		}
	};

	const filePreview = (item) => {
		setShowModal(true);
	};

	return (
		<>
			<Modal showModal={showModal} item={activeItem} setShowModal={setShowModal} />
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
				<Item id='Delete' onClick={handleItemClick}>
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
				<Item id='Delete' onClick={handleItemClick}>
					Delete
				</Item>
			</Menu>

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

				<div className='ud-c-file-browser__file-list'>
					{previousPath && (
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
					)}

					{folders.length > 0 &&
						folders.map((item, index) => {
							return (
								<div
									className={classnames(
										'ud-c-file-browser__file-list__item',
										'ud-c-file-browser__file-list__item--folder'
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
									<div className='ud-c-file-browser__file-list__item__info'>
										<i class='dashicons dashicons-open-folder'></i>
										<span>{item.name}</span>
									</div>
								</div>
							);
						})}
				</div>

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
											setActiveItem(item);
											filePreview(item);
											console.log(item);
										}}
										onContextMenu={(e) => {
											showContexify(e, FILE_MENU, {
												type: 'file',
												path: item.path,
												item,
											});
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
											<i
												class={classnames('dashicons', getIcon(item.ext))}
											></i>
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

			{/* <div className='ud-c-file-browser__preview'>
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
