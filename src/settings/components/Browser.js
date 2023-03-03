import React from 'react';
import { useEffect, useState } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import apiFetch from '@wordpress/api-fetch';
import classnames from 'classnames';

const Browser = () => {
	const filter = useSelect((select) => select('dropbox-browser').getData('filter'));
	const { activeAccount } = IDBAdmin;
	const { dispatch } = wp.data;

	const [data, setData] = useState([]);
	const [ path, setPath ] = useState('/');
	const [ previousPath, setPreviousPath ] = useState('/');

	useEffect(() => {
		apiFetch({
			path: '/idb/v1/get-files',
			method: 'POST',
			data: {
				path: path,
				accountId: activeAccount['id'],
			},
		}).then((response) => {
			dispatch('dropbox-browser').setData('breadcrumbs', response.data.breadcrumbs);
			setData(response.data.files);
			console.log( response.data.files);
			
			if ( response.data.files.length > 0 ) {
				setPreviousPath(response.data.files[0].path);
			}

			console.log( previousPath );
			
		}).catch((error) => {
			console.log(error);
		});
	}, [path]);

	return (
		<>
			<div className='ud-c-file-browser__content'>
				<div className='ud-c-file-browser__file-list'>
					<div className='ud-c-file-browser__file-list__item ud-c-file-browser__file-list__prev ud-c-file-browser__file-list__item--folder'>
						<div className='ud-c-file-browser__file-list__item__info'>
							<i class="dashicons dashicons-arrow-left-alt2"></i>
							<span>Previous Folder</span>
						</div>
					</div>
					{
						data.map((item, index) => {
							return (
								<div className={
									classnames(
										'ud-c-file-browser__file-list__item',
										{
											'ud-c-file-browser__file-list__item--folder': item.is_dir === true,
											'ud-c-file-browser__file-list__item--file': item.is_file === true,
										}
									)
									
								}
								key={index}
								onClick = {() => {
										if (item.is_dir) {
											setPath(item.path);
										}
									}
								}
								>
									<div className='ud-c-file-browser__file-list__item__info'>
										<i class="dashicons dashicons-open-folder"></i>
										<span>{item.name}</span>
									</div>
								</div>
							);
						})
					}
				</div>
			</div>
		</>
	);
};

export default Browser;
