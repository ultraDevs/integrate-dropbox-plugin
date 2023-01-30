
import React from 'react'
import { toast } from 'react-toastify';
import { withSelect } from '@wordpress/data';
import { getEntityRecord } from "@wordpress/core-data";
import { useState, useEffect, useRef } from 'react';
import { compose } from '@wordpress/compose';
import {
	CheckboxControl,
	TextControl,
	SelectControl,
	TextareaControl
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import Previewer from '../Previewer';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Content = ( props ) => {

	if ( 'object' !== typeof props.options || 0 === Object.keys( props.options ).length ) {
		return (
			<>
				{ __( 'Loading.......', 'sticky-list' ) }
			</>
		);
	}

	const [ options, setOptions ] = useState( props.options );
	const [ isSaving, setSaving ] = useState( false );


	// const rules =  [
	// 	{
	// 		regex: /(#+)(.*)/g,
	// 		replacement: '<strong>$2</strong>'
	// 	},
	// 	{
	// 		regex: /!\[([^\[]+)\]\(([^\)]+)\)/g,
	// 		replacement: '<img src=\'$2\' alt=\'$1\'>'
	// 	},
	// 	{
	// 		regex: /\[([^\[]+)\]\(([^\)]+)\)/g,
	// 		replacement: '<a href=\'$2\'>$1</a>'
	// 	},
	// 	{
	// 		regex: /(?:\r\n|\r|\n)/g,
	// 		replacement: '<br>'
	// 	}
	// ];

	// let text = options.sl_panel_content.content + '\n';
    // rules.forEach( function (rule) {
	// 	text = text.replace(rule.regex, rule.replacement);
    // });

	const updateOption = ( key, value ) => {
		const newData = {
			[key]: value,
		}
		const finalOutPut = Object.assign( options.sl_panel_content, newData );
		setOptions( { ...options, sl_panel_content: finalOutPut } );
	}


	// useEffect( () => {
	// 	updateOption( 'html', text );
	// }, [ text ] );

	// useEffect( () => {
	// 	updateOption( 'html', content );
	// }, [ content ] );

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
	

	return (
		<>
			{/* <h2 className='my-2 text-xl font-medium'>Content</h2> */}
			<div className='flex flex-wrap justify-between'>
				<div className='w-full sm:w-2/3'>
					<div className='my-3'>
						<TextControl
							label={ __( 'Title', 'sticky-list' ) }
							className='ud-a-textcontrol'
							value={ options.sl_panel_content.title }
							onChange={ ( value ) => updateOption( 'title', value ) }
						/>
					</div>
					<div className=''>
						{/* <TextareaControl
							rows={ 20 }
							label={ __( 'Content', 'sticky-list' ) }
							className='ud-a-textcontrol'
							value={ options.sl_panel_content.content }
							onChange={ ( value ) => {
								updateOption( 'content', value )
							} }
						/> */}
						<CKEditor
							editor={ ClassicEditor }
							data={ options.sl_panel_content.html }
							// config={ {
							// 	plugins: [ HtmlEmbed ],
							// 	toolbar: [ 'htmlEmbed' ],
							// } }
							onReady={ editor => {
							} }
							onChange={ ( event, editor ) => {
								const data = editor.getData();
								updateOption( 'html', data )
							} }
							// onBlur={ ( event, editor ) => {
							// 	console.log( 'Blur.', editor );
							// } }
							// onFocus={ ( event, editor ) => {
							// 	console.log( 'Focus.', editor );
							// } }
						/>
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
				<div className='w-full sm:w-2/6'>
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
)( Content );