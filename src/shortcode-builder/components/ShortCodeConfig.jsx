import React, { useState, useEffect } from '@wordpress/element'
import { TextControl, ButtonGroup, Button, RangeControl, CheckboxControl } from '@wordpress/components';
import Sidebar from './Sidebar';
import { __ } from '@wordpress/i18n';
import classNames from 'classnames';
import apiFetch from '@wordpress/api-fetch';
import { getIcon } from '../../file-browser/helper/common';
import Header from '../../file-browser/components/Header';

import { useSelect, dispatch } from '@wordpress/data';
import { showAlert } from '../../utils/alertHelper';



const ShortCodeConfig = (props) => {

    const {
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

    const [ type, setType ] = useState( 'image-gallery' );
	const [entries, setEntries] = useState([]);
    const filter = useSelect((select) => select('dropbox-browser').getData('filter'));
	const refresh = useSelect((select) => select('dropbox-browser').getData('refresh'));
	const isLoading = useSelect((select) => select('dropbox-browser').getData('isLoading'));
	const currentPath = useSelect((select) => select('dropbox-browser').getData('current_path'));
	const previousPath = useSelect((select) => select('dropbox-browser').getData('previous_path'));
	const showUploader = useSelect((select) => select('dropbox-browser').getData('showUploader'));
    const [selectedItems, setSelectedItems] = useState(shortCodeConfig.source.items || []);

    // get edit params
    const params = new URLSearchParams(window.location.search);
    const id = params.get('edit');

    const {
		activeAccount,
        ajaxNonce
	} = EDBIData;

    useEffect(() => {
        console.log('shortCodeTitle', shortCodeTitle)
        if ( shortCodeTitle === 'ShortCode Title' ) {
            // get shortcode data from server.
            wp.ajax.post(
            'idbwp_get_shortcode',
            {
                id,
                nonce: ajaxNonce
            }).then( (response) => {
                if ( response ) {
                    setShortCodeTitle( response.title );
                    const parsedConfig = JSON.parse( response.config );
                    setShortCodeConfig( parsedConfig );

                    setSelectedItems( parsedConfig.source.items || [] );
                }
            });
        }
    }, [shortCodeTitle, shortCodeConfig]);

    useEffect(() => {
        if ( selectedItems.length !== 0 ) {
            setShortCodeConfig({
                ...shortCodeConfig,
                source: {
                    ...shortCodeConfig.source,
                    items: selectedItems
                }
            });
        }
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
            const jsonString = JSON.stringify(shortCodeConfig);
            const base64String = btoa(jsonString);
            if ( 'edit' === actionType ) {
                wp.ajax
                .post('idbwp_update_shortcode', {
                    id,
                    title: shortCodeTitle,
                    config: base64String,
                    nonce: ajaxNonce,
                }).then((response) => {
                    console.log(response)
                    setSave(!save);

                    showAlert({
                        title: __('Shortcode Updated', 'integrate-dropbox-wp'),
                        text: __('Shortcode has been updated successfully', 'integrate-dropbox-wp'),
                        icon: 'success',
                        showCancelButton: false,
                        confirmButtonText: 'Ok',
                        // confirmButtonColor: '#007bff',
                    });
                })
                .catch((error) => {
                    console.error(error);

                    showAlert({
                        title: __('Error', 'integrate-dropbox-wp'),
                        text: __('An error occurred while updating the shortcode', 'integrate-dropbox-wp'),
                        icon: 'error',
                        showCancelButton: false,
                        confirmButtonText: 'Ok',
                        // confirmButtonColor: '#007bff',
                    });
                });
            } else {
                wp.ajax
                .post('idbwp_create_shortcode', {
                    title: shortCodeTitle,
                    config: base64String,
                    nonce: ajaxNonce,
                }).then((response) => {
                    console.log(response)
                    setSave(!save);

                    showAlert({
                        title: __('Shortcode Created', 'integrate-dropbox-wp'),
                        text: __('Shortcode has been created successfully', 'integrate-dropbox-wp'),
                        icon: 'success',
                        showCancelButton: false,
                        confirmButtonText: 'Ok',
                        // confirmButtonColor: '#007bff',
                    });
                })
                .catch((error) => {
                    console.error(error);

                    showAlert({
                        title: __('Error', 'integrate-dropbox-wp'),
                        text: __('An error occurred while creating the shortcode', 'integrate-dropbox-wp'),
                        icon: 'error',
                        showCancelButton: false,
                        confirmButtonText: 'Ok',
                        // confirmButtonColor: '#007bff',
                    });
                });
            }
        }
    }, [save]);

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
            label: __( 'Image Gallery', 'integrate-dropbox-wp' ),
            value: 'image-gallery',
            desc: __( 'Display images in a gallery', 'integrate-dropbox-wp' ),
            icon: 'format-gallery'
        },
        // {
        //     label: __( 'File Browser', 'integrate-dropbox-wp' ),
        //     value: 'file-browser',
        //     desc: __( 'Let users browse files', 'integrate-dropbox-wp' ),
        //     icon: 'open-folder'
        // }
    ];

    let folders = [];
    let files = [];

	if ( entries.length ) {
        folders = entries.filter((item) => {
            return item.is_dir ? item : '';
        });
    
        files = entries.filter((item) => {
            if ( 'image-gallery' === type ) {
                return item.is_file && item.ext.match(/(jpg|jpeg|png|gif)$/i) ? item : '';
            }
            return item.is_file ? item : '';
        });
    }


    console.log('title', shortCodeTitle);
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
                                            const exists = selectedItems.filter((selectedItem) => {
                                                return selectedItem.id === item.id;
                                            });
                                            return (
                                                <a
                                                    className={classNames(
                                                        'edbi-file-browser__file-list__item',
                                                        'edbi-file-browser__file-list__item--file',
                                                        'gallery-item',
                                                        // selectedItems.filter( selectedItem ) => {
                                                        //     return selectedItem.id === item.id
                                                        // } 
                                                        exists.length ? 'edbi-file-browser__file-list__item--exist' : ''
                                                    )}
                                                    key={index}
                                                    onClick={() => {
                                                        

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
                    <div className='edbi-shortcode-builder__advanced'>
                        <div className='edbi-shortcode-builder__advanced__item'>
                            <h3>Module Container</h3>
                            <div className='edbi-shortcode-builder__advanced__item__fields'>
                                <div className='edbi-shortcode-builder__advanced__item__field'>
                                    <TextControl
                                        label={__('Width', 'integrate-dropbox-wp')}
                                        value={shortCodeConfig.settings.container.width}
                                        onChange={(value) => {
                                            updateShortCodeConfig('settings', {
                                                ...shortCodeConfig.settings,
                                                container: {
                                                    ...shortCodeConfig.settings.container,
                                                    width: value
                                                }
                                            });
                                        }}
                                    />
                                </div>
                                <div className='edbi-shortcode-builder__advanced__item__field'>
                                    <TextControl
                                        label={__('Height', 'integrate-dropbox-wp')}
                                        value={shortCodeConfig.settings.container.height}
                                        onChange={(value) => {
                                            updateShortCodeConfig('settings', {
                                                ...shortCodeConfig.settings,
                                                container: {
                                                    ...shortCodeConfig.settings.container,
                                                    height: value
                                                }
                                            });
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        {
                            'image-gallery' === type && (
                                <>
                                    <div className='edbi-shortcode-builder__advanced__item'>
                                        <h3>Image Layout</h3>
                                        <div className='edbi-shortcode-builder__advanced__item__fields'>
                                            <div className='edbi-shortcode-builder__advanced__item__field'>
                                                <ButtonGroup>
                                                    <Button
                                                        isPrimary={shortCodeConfig.settings.imgLayout === 'justified'}
                                                        onClick={() => {
                                                            updateShortCodeConfig('settings', {
                                                                ...shortCodeConfig.settings,
                                                                imgLayout: 'justified'
                                                            });
                                                        }}
                                                        disabled
                                                    >
                                                        {__('Justified', 'integrate-dropbox-wp')}
                                                    </Button>
                                                    <Button
                                                        isPrimary={shortCodeConfig.settings.imgLayout === 'masonry'}
                                                        onClick={() => {
                                                            updateShortCodeConfig('settings', {
                                                                ...shortCodeConfig.settings,
                                                                imgLayout: 'masonry'
                                                            });
                                                        }}
                                                        disabled
                                                    >
                                                        {__('Masonry', 'integrate-dropbox-wp')}
                                                    </Button>
                                                    <Button
                                                        isPrimary={shortCodeConfig.settings.imgLayout === 'grid'}
                                                        onClick={() => {
                                                            updateShortCodeConfig('settings', {
                                                                ...shortCodeConfig.settings,
                                                                imgLayout: 'grid'
                                                            });
                                                        }}
                                                    >
                                                        {__('Grid', 'integrate-dropbox-wp')}
                                                    </Button>
                                                </ButtonGroup>
                                                <p>
                                                    {
                                                        __( 'Image Gallery Layout',  'integrate-dropbox-wp')
                                                    }
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    </div>
                )}
            </div>
        </>
    )
}

export default ShortCodeConfig