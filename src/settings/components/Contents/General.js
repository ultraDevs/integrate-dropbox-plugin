
import React from 'react'
import { toast } from 'react-toastify';
import { withSelect } from '@wordpress/data';
import { useState } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import {
    CheckboxControl,
    TextControl,
    SelectControl,
    __experimentalNumberControl as NumberControl,
    BaseControl,
    Button,
    Dashicon,
    TabPanel,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import Previewer from '../Previewer';
import { IconPickerControl, ImageControl } from '../controls';


const General = ( props ) => {

    if ( 'object' !== typeof props.options || 0 === Object.keys( props.options ).length ) {
        return (
            <>
                { __( 'Loading.......', 'sticky-list' ) }
            </>
        );
    }
    // const locationList = [
    //     {
    //         label: 'All',
    //         value: 'all',
    //     },
    //     {
    //         label: 'Home Page',
    //         value: 'home-page',
    //     },
    //     {
    //         label: 'Posts',
    //         value: 'posts',
    //     },
    //     {
    //         label: 'Pages',
    //         value: 'pages',
    //     },
    //     {
    //         label: 'Category archives',
    //         value: 'category-archives',
    //     },
    //     {
    //         label: 'Date archives',
    //         value: 'category-archives',
    //     },
    // ];


    const [ options, setOptions ] = useState( props.options );

    const [ isResponsive, setResponsive ] = useState( true );

    const savedLocations = options.sl_panel_location || [];
    const [ locations, setLocation ] = useState( savedLocations );

    const [ image, setImage ] = useState( options.sl_panel_settings.opener_media.image );

    const updateOption = ( key, value ) => {
		const newData = {
			[key]: value,
		}
		const finalOutPut = Object.assign( options.sl_panel_settings, newData );
		setOptions( { ...options, sl_panel_settings: finalOutPut } );
	}


    // if( locations !== savedLocations) {
    //     setOptions({
    //         ...options,
    //         sl_panel_location: locations
    //     });
    // }

    const updateIOption = ( oName, key,  value ) => {

		const newData = {
			[key]: value,
		};
		const finalOutPut = Object.assign( options.sl_panel_settings[oName], newData );

		const finalData = {
			[oName]: finalOutPut,
		}

		const finalResult = Object.assign( options.sl_panel_settings, finalData );
		setOptions( { ...options, sl_panel_settings: finalResult } );
	}

    const [ isSaving, setSaving ] = useState( false );

    const saveChanges = () => {
        
        setSaving( true );

        wp.data.dispatch('core').saveSite( options ).then( () => {
            toast.success( __( 'Settings Saved!', 'sticky-list' ) );
        }).catch( (e) => {
            toast.error( __( 'Error! Check Console Log To know More', 'sticky-list' ) );
            console.log(e);
        });

        setSaving( false );
    }

    let frame;
    const runUploader = (event) => {
        event.preventDefault()
    
        if ( frame ) {
            frame.open()
            return
        }
    
        // Create a new media frame
        frame = wp.media({
            title: 'Select or Upload Image',
            button: {
                text: 'Use',
            },
            library : {
				type : 'image'
			},
            multiple: false,
        });

        frame.on( 'select', function() {
            const Image = frame.state().get('selection').first().toJSON();
            setImage( Image.url );
            updateIOption( 'opener_media', 'image', Image.url );
        });
    
        frame.open();
    }

    return (
        <>
            <div className='flex flex-wrap justify-between'>
                <div className='w-full sm:w-2/4'>
                    <div className='my-6'>
                        <NumberControl
                            label={ __( 'Panel Width (px)', 'sticky-list' ) }
                            className='ud-a-textcontrol'
                            value={ options.sl_panel_settings.width }
                            onChange={ ( value ) => updateOption( 'width', Number( value ) ) }
                        />
                    </div>
                    <div className='my-6'>
                        <SelectControl
                            label={ __( 'Panel Position', 'sticky-list' ) }
                            className='ud-a-selectcontrol'
                            value={ options.sl_panel_settings.position }
                            options={ [
                                { label: 'Left', value: 'left' },
                                { label: 'Right', value: 'right' },
                            ] }
                            onChange={ ( value ) => updateOption( 'position', value ) }
                        />
                        <MediaUpload
                            label='ddd'
                            
                        />
                    </div>
                    
                    <TabPanel
                        className="pt-1 pb-panel-inspect--tabs"
                        activeClass="pb-pi-tab--active"
                        initialTabName={ options.sl_panel_settings.opener_media.type }
                        onSelect = { ( tabName ) => {
                            updateIOption( 'opener_media', 'type', tabName );
                        } }
                        tabs={ [
                            {
                                name: "icon",
                                title: __( 'Icon', 'sticky-list' ),
                                className: "pb-panel-inspect--tab",
                            },
                            {
                                name: "image",
                                title: __( 'Image', 'sticky-list' ),
                                className: "pb-panel-inspect--tab",
                            },
                        ] }>
                        {
                            ( tab ) => {
                                let tabout;

                                if ( 'icon' === tab.name ) {
                                    tabout = (
                                        <>
                                            <IconPickerControl
                                                label={ __( 'Select Icon', 'sticky-list' ) }
                                                onChange = { (icon) => {
                                                    updateIOption( 'opener_media', 'icon', icon );
                                                }}
                                                icon = { options.sl_panel_settings.opener_media.icon }
                                            />
                                        </>
                                    )
                                } else if ( 'image' === tab.name ) {
                                    tabout = (
                                        <>
                                            <div className='flex flex-wrap items-center justify-between'>
                                                <button
                                                    type='button'
                                                    onClick={runUploader}
                                                    className='h-8 px-2 py-1 text-white bg-gray-800 rounded-full '
                                                >
                                                    Select Image
                                                </button>
                                                { image && (
                                                    <>
                                                        <img className='h-16 border-none' src={ image } alt='' />
                                                    </>
                                                    )
                                                }
                                            </div>
                                        </>
                                    )
                                } else {
                                    tabout = (
                                        <>Tab</>
                                    )
                                }
                                return <div className="pb-panel-inspect--tabs__controls">{ tabout }</div>
                            }
                        }
                    </TabPanel>
                    <div className='my-6'>
                        <button
                            className='px-4 py-2 text-white border-none bg-secondary'
                            type='button'
                            isBusy={ isSaving }
                            onClick={
                                saveChanges
                            }
                        >
                            { __( 'Save Changes', 'sticky-list' ) }
                        </button>
                    </div>
                </div>
                <div className='w-full sm:w-2/4'>
					<Previewer options={ options } />
				</div>
            </div>
        </>
    )
}

export default compose(
    withSelect( ( select ) => {
        const optionKeys = [
            'sl_panel_settings',
            'sl_panel_content',
            'sl_panel_styles',
        ];

        const settings = select( 'core' ).getEntityRecord( 'root', 'site' );
        const options = {};

        if ( settings ) {
            optionKeys.forEach( (key) => {
                if( settings[key] ) {
                    options[key] = settings[key];
                }
            });
        }

        return {
            options
        }
    })
)( General );