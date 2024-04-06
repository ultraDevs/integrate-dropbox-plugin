import React, { useEffect, useState } from 'react';

import '../scss/modal.scss';

const Modal = ({ showModal, item, setShowModal }) => {
	const [previewData, setPreviewData] = useState('');

	const { activeAccount, accounts } = IDBData;

	const handleClose = () => {
		setShowModal(false);
	};

	useEffect(() => {
		wp.ajax
			.post('idb_file_preview', {
				account_id: activeAccount['id'],
				nonce: IDBData?.ajaxNonce,
				file: item.path,
			})
			.then((response) => {
				setPreviewData(response);
			})
			.catch((error) => {
				console.error(error);
			});
	}, [item]);

	return (
		<>
			{showModal && (
				<div className='ud-idb-modal'>
					<div className='ud-idb-modal__header flex justify-between items-center px-6'>
						<div>
							<h3 className='text-2xl text-white'>{item.name}</h3>
						</div>
						<div>
							<svg
								onClick={() => handleClose()}
								className='h-10 w-10 cursor-pointer'
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
										fill-rule='evenodd'
										clip-rule='evenodd'
										d='M10.9393 12L6.9696 15.9697L8.03026 17.0304L12 13.0607L15.9697 17.0304L17.0304 15.9697L13.0607 12L17.0303 8.03039L15.9696 6.96973L12 10.9393L8.03038 6.96973L6.96972 8.03039L10.9393 12Z'
										fill='#ffffff'
									></path>{' '}
								</g>
							</svg>
						</div>
					</div>
					<div className='ud-idb-modal__content'>
						<img src={previewData} alt={item.name} />
					</div>
				</div>
			)}
		</>
	);
};

export default Modal;
