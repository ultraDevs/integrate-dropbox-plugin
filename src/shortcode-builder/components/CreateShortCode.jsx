import React, { useState } from '@wordpress/element'
import { useSelect, dispatch } from '@wordpress/data'
import Appearance from './contents/Appearance';
import Sidebar from './Sidebar';
import { __ } from '@wordpress/i18n';
import classNames from 'classnames';

const CreateShortCode = (props) => {

    const [ type, setType ] = useState( 'image-gallery' );

    const {
        formData,
        setFormData,
        activeItem,
        setActiveItem,
        save,
        setSave,
        shortCodeConfig,
        setShortCodeConfig
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
                    <Appearance
                        formData={formData}
                        setFormData={setFormData}
                    />
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

export default CreateShortCode