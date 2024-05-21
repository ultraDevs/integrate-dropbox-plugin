import React, { useState, useEffect } from '@wordpress/element'
import { useSelect, dispatch } from '@wordpress/data'
import Appearance from './contents/Appearance';
import Sidebar from './Sidebar';
import { __ } from '@wordpress/i18n';
import classNames from 'classnames';
import apiFetch from '@wordpress/api-fetch';
import { getIcon } from '../../file-browser/helper/common';


const ShortCodeConfig = (props) => {

    const [ type, setType ] = useState( 'image-gallery' );
	const [entries, setEntries] = useState([]);

    const {
        formData,
        setFormData,
        activeItem,
        setActiveItem,
        save,
        setSave,
        shortCodeConfig,
        setShortCodeConfig,
        shortCodeTitle,
        setShortCodeTitle
    } = props;

    const {
		activeAccount,
	} = EDBIData;


    const updateShortCodeConfig = (key, value) => {
        setShortCodeConfig({
            ...shortCodeConfig,
            [key]: value
        });
    }

    const types = [
        {
            label: __( 'Image Gallery', 'easy-dropbox-integration' ),
            value: 'image-gallery',
            desc: __( 'Display images in a gallery', 'easy-dropbox-integration' ),
            icon: 'format-gallery'
        },
        {
            label: __( 'File Browser', 'easy-dropbox-integration' ),
            value: 'file-browser',
            desc: __( 'Let users browse files', 'easy-dropbox-integration' ),
            icon: 'open-folder'
        }
    ];

    useEffect(() => {
		if ( activeAccount.length !== 0 ) {
			// dispatch('dropbox-browser').setData('isLoading', true);
			apiFetch({
				path: '/idb/v1/get-files',
				method: 'POST',
				data: {
					path: '',
					accountId: activeAccount['id'],
					filter: {
                        by: 'name',
                        direction: 'asc',
                    },
				},
			})
				.then((response) => {
					// dispatch('dropbox-browser').setData('breadcrumbs', response.data.breadcrumbs);
					setEntries(response.data.files);
					// dispatch('dropbox-browser').setData('previous_path', response.data.previous_path);
					// dispatch('dropbox-browser').setData('isLoading', false);
				})
				.catch((error) => {
					console.log(error);
				});
		}
	}, []);

	const folders = entries.filter((item) => {
		return item.is_dir ? item : '';
	});

	const files = entries.filter((item) => {
		return item.is_file ? item : '';
	});

    console.log('config', shortCodeConfig);

    console.log('type', type)

    console.log('title', shortCodeTitle)

    console.log( 'entries', entries );


    return (
        <>
            <Sidebar
                activeItem={activeItem}
                setActiveItem={setActiveItem}
            />
            <div className='edbi-page__content'>
                
                {activeItem === 'types' && (
                    <div className='flex flex-wrap'>
                        {
                            types.map( item => {
                                return (
                                    <div
                                        key={item.value}
                                        className={
                                            classNames(
                                                'edbi-info-box edbi-info-box--types',
                                                item.value === type ? 'edbi-info-box--active' : ''
                                            )
                                        }
                                        onClick={
                                            () => {
                                                setType(item.value);
                                                updateShortCodeConfig('type', item.value);
                                            }
                                        }
                                    >
                                        <div className='edbi-info-box__icon'>
                                            <i className={`dashicons dashicons-${item.icon}`}></i>
                                        </div>
                                        <div className='edbi-info-box__content'>
                                            <h3>{item.label}</h3>
                                            <p>{item.desc}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                )}
                {activeItem === 'source' && (
                    <div>
                        <div className='edbi-file-browser__file-list'>
                            {/* {previousPath && (
                                <div
                                    className='edbi-file-browser__file-list__item edbi-file-browser__file-list__prev edbi-file-browser__file-list__item--folder'
                                    onClick={() => {
                                        setPath(previousPath);
                                    }}
                                >
                                    <div className='edbi-file-browser__file-list__item__info'>
                                        <i class='dashicons dashicons-arrow-left-alt2'></i>
                                        <span>Previous Folder</span>
                                    </div>
                                </div>
                            )} */}

                            {folders.length > 0 &&
                                folders.map((item, index) => {
                                    return (
                                        <div
                                            className={classNames(
                                                'edbi-file-browser__file-list__item',
                                                'edbi-file-browser__file-list__item--folder'
                                            )}
                                            key={index}
                                            onClick={(e) => {
                                                if (item.is_dir) {
                                                    setPath(item.path);
                                                }
                                            }}
                                            // onContextMenu={(e) => {
                                            //     showContexify(e, FOLDER_MENU, {
                                            //         type: 'folder',
                                            //         path: item.path,
                                            //         item,
                                            //     });
                                            // }}
                                        >
                                            <div className='edbi-file-browser__file-list__item__info'>
                                                <i class='dashicons dashicons-open-folder'></i>
                                                <span>{item.name}</span>
                                            </div>
                                        </div>
                                    );
                                })}
							</div>

							{files.length ? (
								<>
									<div
                                        className='edbi-file-browser__file-list'
									>
										{files.map((item, index) => {
											return (
												<a
													className={classNames(
														'edbi-file-browser__file-list__item',
														'edbi-file-browser__file-list__item--file',
														'gallery-item'
													)}
													key={index}
													// onClick={() => {
													// 	setActiveItem(item);
													// 	filePreview(item);
													// }}
												>
													{item.can_preview && item.thumbnail ? (
														<div className='edbi-file-browser__file-list__item__thumb'>
															<img src={item.thumbnail} />
														</div>
													) : (
														<div className='edbi-file-browser__file-list__item__icon'>
															<span
																className={classNames(
																	'dashicons',
																	getIcon(item.ext)
																)}
															></span>
														</div>
													)}
													<div className='edbi-file-browser__file-list__item__info'>
														<i
															class={classNames('dashicons', getIcon(item.ext))}
														></i>
														<span>{item.name}</span>
													</div>
												</a>
											);
										})}
									{/* </div> */}
									</div>
								</>
							) : (
								''
							)}

                    </div>
                )}
                {activeItem === 'advanced' && (
                    <Appearance
                        formData={formData}
                        setFormData={setFormData}
                    />
                )}
            </div>
        </>
    )
}

export default ShortCodeConfig