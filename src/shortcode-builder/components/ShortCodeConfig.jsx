import React, { useState, useEffect } from '@wordpress/element'
import Appearance from './contents/Appearance';
import Sidebar from './Sidebar';
import { __ } from '@wordpress/i18n';
import classNames from 'classnames';
import apiFetch from '@wordpress/api-fetch';
import { getIcon } from '../../file-browser/helper/common';
import Header from '../../file-browser/components/Header';

import { useSelect, dispatch } from '@wordpress/data';



const ShortCodeConfig = (props) => {

    const [ type, setType ] = useState( 'image-gallery' );
	const [entries, setEntries] = useState([]);
    const filter = useSelect((select) => select('dropbox-browser').getData('filter'));
	const refresh = useSelect((select) => select('dropbox-browser').getData('refresh'));
	const isLoading = useSelect((select) => select('dropbox-browser').getData('isLoading'));
	const currentPath = useSelect((select) => select('dropbox-browser').getData('current_path'));
	const previousPath = useSelect((select) => select('dropbox-browser').getData('previous_path'));
	const showUploader = useSelect((select) => select('dropbox-browser').getData('showUploader'));
    const [selectedItems, setSelectedItems] = useState([]);

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
        setShortCodeTitle,
        actionType,
    } = props;

    const {
		activeAccount,
        ajaxNonce
	} = EDBIData;

    const setPath = (path) => {
		dispatch('dropbox-browser').setData('isLoading', true);
		dispatch('dropbox-browser').setData('current_path', path);
		// if ( '/' === path ) {
		// 	dispatch('dropbox-browser').setData('previous_path', '/');
		// } else {
		// 	dispatch('dropbox-browser').setData('current_path', path);
		// }
	};


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
        setShortCodeConfig({
            ...shortCodeConfig,
            source: {
                ...shortCodeConfig.source,
                items: selectedItems
            }
        });
    }, [selectedItems]);

    useEffect(() => {
		if ( activeAccount.length !== 0 ) {
			// dispatch('dropbox-browser').setData('isLoading', true);
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
					setEntries(response.data.files);
					dispatch('dropbox-browser').setData('previous_path', response.data.previous_path);
					dispatch('dropbox-browser').setData('isLoading', false);
				})
				.catch((error) => {
					console.log(error);
				});
		}
	}, [currentPath, refresh, filter]);


    useEffect(() => {
        if (save) {
            if ( 'edit' === actionType ) {
                wp.ajax
                .post('edbi_update_shortcode', {
                    id,
                    title: shortCodeTitle,
                    config: btoa(JSON.stringify(shortCodeConfig)),
                    nonce: ajaxNonce,
                }).then((response) => {
                    console.log(response)
                    setSave(!save);
                })
                .catch((error) => {
                    console.error(error);
                });
            } else {
                wp.ajax
                .post('edbi_create_shortcode', {
                    title: shortCodeTitle,
                    config: btoa(JSON.stringify(shortCodeConfig)),
                    nonce: ajaxNonce,
                }).then((response) => {
                    console.log(response)
                    setSave(!save);
                })
                .catch((error) => {
                    console.error(error);
                });
            }
        }
    }, [save]);

    let folders = [];
    let files = [];

	if ( entries.length ) {
        folders = entries.filter((item) => {
            return item.is_dir ? item : '';
        });
    
        files = entries.filter((item) => {
            return item.is_file ? item : '';
        });
    }


    console.log('config', shortCodeConfig);



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
                    <div className='flex flex-wrap gap-4'>
                        <div className='edbi-shortcode-builder__browser'>
                            <Header />
                            {isLoading ? (
                                <div className='edbi-file-browser__loading'>
                                    <div className='edbi-file-browser__loading__spinner'>
                                        <div className='edbi-file-browser__loading__spinner--bounce1'></div>
                                        <div className='edbi-file-browser__loading__spinner--bounce2'></div>
                                        <div className='edbi-file-browser__loading__spinner--bounce3'></div>
                                    </div>
                                </div>
                            ) : (
                                ''
                            )}
                            <div className='edbi-file-browser__file-list'>
                                {previousPath && (
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
                                )}

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
                                    }
                                )}
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
                                                    onClick={() => {
                                                        // Check if already exists in selected items then remove.
                                                        const exists = selectedItems.filter((selectedItem) => {
                                                            return selectedItem.id === item.id;
                                                        });

                                                        if (exists.length) {
                                                            setSelectedItems(
                                                                selectedItems.filter((selectedItem) => {
                                                                    return selectedItem.id !== item.id;
                                                                })
                                                            );
                                                        } else {
                                                            setSelectedItems([...selectedItems, item]);
                                                        }
                                                    }}
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
                        <div className='edbi-shortcode-builder__selected-items'>
                            <div className='flex items-center justify-between px-3 py-2 text-white edbi-shortcode-builder__selected-items__header bg-secondary'>
                                <h3 className='text-sm text-white'>
                                    <span>
                                        {selectedItems.length} { ' ' }
                                    </span>
                                    Selected {selectedItems.length > 1 ? 'Items' : 'Item'}
                                </h3>
                                <button
                                    className='px-3 py-1 text-white rounded-md bg-primary'
                                    onClick={() => {
                                        setSelectedItems([]);
                                    }}
                                >Clear</button>
                            </div>
                            <div className='edbi-shortcode-builder__selected-items__list'>
                                {
                                    selectedItems.map((item, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className='edbi-shortcode-builder__selected-items__list__item'
                                            >
                                                <div className='edbi-shortcode-builder__selected-items__list__item__thumb'>
                                                    <img src={item.thumbnail} />
                                                </div>
                                                <div className='edbi-shortcode-builder__selected-items__list__item__info'>
                                                    <p>{item.name}</p>
                                                </div>
                                                <div className='edbi-shortcode-builder__selected-items__list__item__actions'>
                                                    <button
                                                        className='px-2 py-1 text-white rounded-md bg-primary'
                                                        onClick={() => {
                                                            setSelectedItems(
                                                                selectedItems.filter((selectedItem) => {
                                                                    return selectedItem.id !== item.id;
                                                                })
                                                            );
                                                        }}
                                                    >
                                                        <i class='dashicons dashicons-trash'></i>
                                                    </button>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
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