
import React from 'react'
import { toast } from 'react-toastify';
import { withSelect } from '@wordpress/data';
import { getEntityRecord } from "@wordpress/core-data";
import { useState, useEffect } from 'react';
import { compose } from '@wordpress/compose';
import {
	CheckboxControl,
	TextControl,
	SelectControl,
	__experimentalNumberControl as NumberControl,
	TextareaControl,
	Panel,
	PanelBody,
	PanelRow,
	TabPanel,
} from '@wordpress/components';
import { more } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';
import {
	ColorPickerControl,
} from '../controls';
import Previewer from '../Previewer';

import FONTS from '../controls/typography-control/fonts';

const Styling = ( props ) => {

	if ( 'object' !== typeof props.options || 0 === Object.keys( props.options ).length ) {
		return (
			<>
				{ __( 'Loading.......', 'sticky-list' ) }
			</>
		);
	}

	const [ options, setOptions ] = useState( props.options );
	const [ isSaving, setSaving ] = useState( false );

	const GFonts = [
        { value: "", label: __("Default") },
        { value: "Helvetica", label: "Helvetica" },
        { value: "Times New Roman", label: "Times New Roman" },
        { value: "Georgia", label: "Georgia" }
    ];

	//Add Google Fonts
    Object.keys( FONTS ).map( font => {
        GFonts.push({ value: font, label: font });
    });

	const updateOption = ( key, value ) => {
		const newData = {
			[key]: value,
		}
		const finalOutPut = Object.assign( options.sl_panel_styles, newData );
		setOptions( { ...options, sl_panel_styles: finalOutPut } );
	}

	const updateTOption = ( oName, key,  value ) => {

		const newData = {
			[key]: value,
		};
		const finalOutPut = Object.assign( options.sl_panel_styles[oName], newData );

		const finalData = {
			[oName]: finalOutPut,
		}

		const finalResult = Object.assign( options.sl_panel_styles, finalData );
		setOptions( { ...options, sl_panel_styles: finalResult } );
	}


	useEffect( () => {
		googleFonts();
	}, [ options.sl_panel_styles.typo.font_family, options.sl_panel_styles.title_typo.font_family ] );

	const googleFonts = () => {

		const sysFonts = [
			'Arial',
			'Tahoma',
			'Verdana',
			'Helvetica',
			'Times New Roman',
			'Trebuchet MS',
			'Georgia',
		];

		let totalFonts = [ options.sl_panel_styles.typo.font_family, options.sl_panel_styles.title_typo.font_family ];

		const link = document.createElement("link");
        link.rel = "stylesheet";
		let gFonts = '';
		const googleFontsAttr = ':300italic,400italic,600italic,700italic,300,400,500,600,700';
		totalFonts.map( font => {
			if ( ! sysFonts.includes( font ) && font != '' ) {
				gFonts += font.replace( / /g, '+' ) + googleFontsAttr + '|';
			}
		});
		link.href = "https://fonts.googleapis.com/css?family=" + gFonts + "&display=swap";
		document.head.appendChild(link);
	};


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

	// console.log(options.sl_panel_styles);
	
	return (
		<>
			{/* <h2 className='my-2 text-xl font-medium'>Content</h2> */}
			<div className='flex flex-wrap justify-between'>
				<div className='w-full sm:w-2/4 '>
					<div className=''>
						<Panel header="">
							<PanelBody title={ __( 'Panel Opener', 'sticky-list' ) } icon={ more } initialOpen={ true }>
								<TabPanel className="pb-panel-inspect--tabs" activeClass="pb-pi-tab--active"
									tabs={ [
										{
											name: "normal",
											title: __( 'Normal', 'sticky-list' ),
											className: "pb-panel-inspect--tab",
										},
										{
											name: "hover",
											title: __( 'Hover', 'sticky-list' ),
											className: "pb-panel-inspect--tab",
										},
									] }>
									{
										( tab ) => {
											let tabout;

											if ( 'normal' === tab.name ) {
												tabout = (
													<>
														<ColorPickerControl
															label={ __( 'Color', 'sticky-list' ) }
															value={ options.sl_panel_styles.opener_color }	
															onChange={ ( value ) => {
																updateOption( 'opener_color', value );
															} }
														/>
														<ColorPickerControl
															label={ __( 'Background Color', 'sticky-list' ) }
															value={ options.sl_panel_styles.opener_bg_color }	
															onChange={ ( value ) => {
																updateOption( 'opener_bg_color', value );
															} }
														/>
													</>
												)
											} else if ( 'hover' === tab.name ) {
												tabout = (
													<>
														<ColorPickerControl
															label={ __( 'Color', 'sticky-list' ) }
															value={ options.sl_panel_styles.opener_hover_color }	
															onChange={ ( value ) => {
																updateOption( 'opener_hover_color', value );
															} }
														/>
														<ColorPickerControl
															label={ __( 'Background Color', 'sticky-list' ) }
															value={ options.sl_panel_styles.opener_hover_bg_color }	
															onChange={ ( value ) => {
																updateOption( 'opener_hover_bg_color', value );
															} }
														/>
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
								
							</PanelBody>
							<PanelBody title={ __( 'Panel Content', 'sticky-list' ) } icon={ more } initialOpen={ false }>
								<ColorPickerControl
									label={ __( 'Background Color', 'sticky-list' ) }
									value={ options.sl_panel_styles.bg_color }	
									onChange={ ( value ) => {
										updateOption( 'bg_color', value );
									} }
								/>
								<SelectControl
									label={ __( 'Panel Font', 'sticky-list' ) }
									className='ud-a-selectcontrol'
									value={ options.sl_panel_styles.typo.font_family }
									options={ GFonts }
									onChange={ ( value ) => updateTOption( 'typo', 'font_family',  value ) }
								/>
								<NumberControl
									label={ __( 'Panel Font Size', 'sticky-list' ) }
									className='ud-a-textcontrol'
									value={ options.sl_panel_styles.typo.font_size }
									onChange={ ( value ) => updateTOption( 'typo', 'font_size', Number( value ) ) }
								/>
							</PanelBody>
							<PanelBody title={ __( 'Title', 'sticky-list' ) } initialOpen={ false }>
								<ColorPickerControl
									label={ __( 'Background Color', 'sticky-list' ) }
									value={ options.sl_panel_styles.title_bg_color }	
									onChange={ ( value ) => {
										updateOption( 'title_bg_color', value );
									} }
								/>
								<ColorPickerControl
									label={ __( 'Title Color', 'sticky-list' ) }
									value={ options.sl_panel_styles.title_color }	
									onChange={ ( value ) => {
										updateOption( 'title_color', value );
									} }
								/>
								<SelectControl
									label={ __( 'Title Font', 'sticky-list' ) }
									className='ud-a-selectcontrol'
									value={ options.sl_panel_styles.title_typo.font_family }
									options={ GFonts }
									onChange={ ( value ) => updateTOption( 'title_typo', 'font_family',  value ) }
								/>
								<NumberControl
									label={ __( 'Title Font Size', 'sticky-list' ) }
									className='ud-a-textcontrol'
									value={ options.sl_panel_styles.title_typo.font_size }
									onChange={ ( value ) => updateTOption( 'title_typo', 'font_size', Number( value ) ) }
								/>
							</PanelBody>
							{/* <PanelBody title={ __( 'Typography', 'sticky-list' ) } icon={ more } initialOpen={ false }>
								
							</PanelBody> */}
						</Panel>
					</div>
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
)( Styling );