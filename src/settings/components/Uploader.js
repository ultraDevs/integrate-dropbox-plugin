import React, { useEffect, useRef, useState } from '@wordpress/element';
import { dispatch, useSelect } from '@wordpress/data';
import { showAlert } from '../utils/alertHelper';
import { FaCheck, FaFileAlt } from 'react-icons/fa';

const Uploader = () => {
	const { activeAccount } = IDBData;
	const refresh = useSelect((select) => select('dropbox-browser').getData('refresh'));
	const currentPath = useSelect((select) => select('dropbox-browser').getData('current_path'));

	const fileInput = useRef(null);
	const folderInput = useRef(null);

	const [uploadQueue, setUploadQueue] = useState([]); // Queue of files to upload
	const [uploading, setUploading] = useState(false); // Flag to indicate if an upload is in progress
	const [currentFile, setCurrentFile] = useState(null); // Current file being uploaded

	useEffect(() => {
		// Start uploading when a new file is added to the queue
		if (!uploading && uploadQueue.length > 0) {
			startUpload(uploadQueue[0]);
		}
		console.log(currentFile);
	}, [uploadQueue, uploading]);

	const handleDragOver = (e) => {
		e.preventDefault();
		e.stopPropagation();

		document.querySelector('.idb-file-browser__upload__inner').style.border =
			'2px dashed #ff0000';
	};

	const handleDragEnd = (e) => {
		e.preventDefault();
		e.stopPropagation();

		document.querySelector('.idb-file-browser__upload__inner').style.border =
			'2px dashed #000000';
	};

	const handleDrop = (e) => {
		e.preventDefault();
		e.stopPropagation();

		document.querySelector('.idb-file-browser__upload__inner').style.border =
			'2px dashed #000000';

		// Handle the drop here.
		console.log('Files dropped:', e.dataTransfer.files);
	};

	const startUpload = (file) => {
		setCurrentFile(file);
		setUploading(true);

		// Prepare the data to be sent to the server
		const data = new FormData();
		data.append('action', 'idb_upload');
		data.append('nonce', IDBData.ajaxNonce);
		data.append('path', currentPath);
		data.append('account_id', activeAccount['id']);
		data.append('file', file);

		// Send the data to the server
		jQuery.ajax({
			url: IDBData.ajaxUrl,
			type: 'POST',
			data: data,
			processData: false,
			contentType: false,
			success: function (response) {
				console.log('Response:', response);

				// Remove the uploaded file from the queue
				setUploadQueue((prevQueue) => prevQueue.slice(1));

				// Show a success message
				// showAlert('success', 'File uploaded successfully.');
			},
			error: function (error) {
				console.error('Error:', error);

				// Show an error message
				// showAlert('error', 'An error occurred while uploading the file.');
			},
			complete: function () {
				// Mark the upload as complete
				setUploading(false);
			},
		});
	};

	const handleFileSelect = (e) => {
		let files = e.target.files;

		if (files.length === 0) {
			return;
		}

		files = Array.from(files);

		// Add files to the upload queue
		setUploadQueue((prevQueue) => [...prevQueue, ...files]);

		// Start uploading if not already uploading
		if (!uploading) {
			startUpload(files[0]);
		}
	};

	return (
		<div
			className='idb-file-browser__upload'
			onDragOver={handleDragOver}
			onDragEnd={handleDragEnd}
			onDrop={handleDrop}
		>
			<div className='idb-file-browser__upload__inner'>
				<div className='idb-file-browser__upload__inner__header'>
					<h3>Uploader</h3>
					<span
						onClick={() => {
							dispatch('dropbox-browser').setData('showUploader', false);
						}}
					>
						<i className='dashicons dashicons-no'></i>
					</span>
				</div>
				<div className='idb-file-browser__upload__inner__dropzone'>
					<p>Drag and drop files here</p>
					<p>OR</p>
					<div className='flex items-center justify-center gap-3'>
						<button
							className='px-6 ud-c-btn ud-c-btn--primary'
							onClick={() => {
								fileInput.current.click();
							}}
						>
							Select File
						</button>
						<button
							className='px-6 ud-c-btn ud-c-btn--primary'
							onClick={() => {
								folderInput.current.click();
							}}
						>
							Select Folder
						</button>
					</div>

					<input type='file' ref={fileInput} multiple onChange={handleFileSelect} />

					<input
						type='file'
						ref={folderInput}
						directory=''
						webkitdirectory=''
						onChange={handleFileSelect}
					/>
				</div>
			</div>
			<div className='idb-file-browser__upload-progress'>
				<div className='idb-file-browser__upload-progress__details'>
					<div className='idb-file-browser__upload-progress__details__file_icon'>
						<svg
							className='h-8 w-8 '
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<g id='SVGRepo_bgCarrier' stroke-width='0'></g>
							<g
								id='SVGRepo_tracerCarrier'
								stroke-linecap='round'
								stroke-linejoin='round'
							></g>
							<g id='SVGRepo_iconCarrier'>
								{' '}
								<path
									d='M9 17H13M9 13H13M9 9H10M17 18V21M17 15H17.01M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H13M13 3L19 9M13 3V7.4C13 7.96005 13 8.24008 13.109 8.45399C13.2049 8.64215 13.3578 8.79513 13.546 8.89101C13.7599 9 14.0399 9 14.6 9H19M19 9V11.5'
									stroke='#000000'
									stroke-width='2'
									fill='#3182ce'
									stroke-linecap='round'
									stroke-linejoin='round'
								></path>{' '}
							</g>
						</svg>
					</div>
					<div className='idb-file-browser__upload-progress__details__content'>
						<h3 className='idb-file-browser__upload-progress__details__content__title'>
							File uploading...
						</h3>
						<p className='idb-file-browser__upload-progress__details__content__file-size'>
							12.0 MB
						</p>
					</div>
				</div>
				<div className='idb-file-browser__upload-progress__check-icon'>
					<svg
						className='h-6 w-6 '
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<g id='SVGRepo_bgCarrier' stroke-width='0'></g>
						<g
							id='SVGRepo_tracerCarrier'
							stroke-linecap='round'
							stroke-linejoin='round'
						></g>
						<g id='SVGRepo_iconCarrier'>
							{' '}
							<path
								fill='#3182ce'
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M20.6097 5.20743C21.0475 5.54416 21.1294 6.17201 20.7926 6.60976L10.7926 19.6098C10.6172 19.8378 10.352 19.9793 10.0648 19.9979C9.77765 20.0166 9.49637 19.9106 9.29289 19.7072L4.29289 14.7072C3.90237 14.3166 3.90237 13.6835 4.29289 13.2929C4.68342 12.9024 5.31658 12.9024 5.70711 13.2929L9.90178 17.4876L19.2074 5.39034C19.5441 4.95258 20.172 4.87069 20.6097 5.20743Z'
							></path>{' '}
						</g>
					</svg>
				</div>
			</div>
			<div className='idb-file-browser__upload-progress'>
				<div className='idb-file-browser__upload-progress__details'>
					<div className='idb-file-browser__upload-progress__details__file_icon'>
						<svg
							className='h-8 w-8 '
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<g id='SVGRepo_bgCarrier' stroke-width='0'></g>
							<g
								id='SVGRepo_tracerCarrier'
								stroke-linecap='round'
								stroke-linejoin='round'
							></g>
							<g id='SVGRepo_iconCarrier'>
								{' '}
								<path
									d='M9 17H13M9 13H13M9 9H10M17 18V21M17 15H17.01M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H13M13 3L19 9M13 3V7.4C13 7.96005 13 8.24008 13.109 8.45399C13.2049 8.64215 13.3578 8.79513 13.546 8.89101C13.7599 9 14.0399 9 14.6 9H19M19 9V11.5'
									stroke='#000000'
									stroke-width='2'
									fill='#3182ce'
									stroke-linecap='round'
									stroke-linejoin='round'
								></path>{' '}
							</g>
						</svg>
					</div>
					<div className='idb-file-browser__upload-progress__details__content'>
						<h3 className='idb-file-browser__upload-progress__details__content__title'>
							File uploading...
						</h3>
						<p className='idb-file-browser__upload-progress__details__content__file-size'>
							12.0 MB
						</p>
					</div>
				</div>
				<div className='idb-file-browser__upload-progress__check-icon'>
					<div className='flex flex-col w-[200px] gap-2'>
						<div
							className={`flex h-3 w-full  items-center justify-center rounded-full bg-sky-300`}
						>
							<div
								style={{ width: `${70}%` }}
								className={`transition-width mr-auto h-3 w-0 rounded-full  bg-sky-600 duration-500`}
							></div>
						</div>
						<span className='text-lg font-medium text-center text-sky-400'>
							{' '}
							{70} %
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Uploader;
