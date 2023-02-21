import { toast } from 'react-toastify';
import { withSelect } from '@wordpress/data';
import { getEntityRecord } from "@wordpress/core-data";
import { useState, useEffect } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import {
	CheckboxControl,
	TextControl,
	SelectControl,
	TextareaControl
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import Previewer from '../Previewer';

const Advanced = ( props ) => {

	if ( 'object' !== typeof props.options || 0 === Object.keys( props.options ).length ) {
		return (
			<>
				{ __( 'Loading.......', 'sticky-list' ) }
			</>
		);
	}

	const [ options, setOptions ] = useState( props.options );
	const [ isSaving, setSaving ] = useState( false );

	const updateOption = ( key, oName, value ) => {
		const newData = {
			[key]: value,
		}
		const finalOutPut = Object.assign( options.sl_panel_options, newData );
		setOptions( { ...options, [oName]: finalOutPut } );
	}


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
			<div className="flex flex-wrap justify-between">
				<div className="w-full sm:w-2/4">
					<div className="my-3">
						<TextControl
							label={__("Title", "sticky-list")}
							className="ud-a-textcontrol"
							value={options.sl_panel_options.icon}
							onChange={(value) =>
								updateOption("icon", "sl_panel_options", value)
							}
						/>
					</div>
					<div className="my-3">
						<TextControl
							label={__("Color", "sticky-list")}
							className="ud-a-textcontrol"
							value={options.sl_panel_options.color}
							onChange={(value) =>
								updateOption("color", "sl_panel_options", value)
							}
						/>
					</div>
					<div className="my-6">
						<button
							className="px-4 py-2 text-white border-none bg-secondary"
							type="button"
							isBusy={isSaving}
							onClick={saveChanges}
						>
							{__("Save Changes", "sticky-list")}
						</button>
					</div>
				</div>
				<div className="w-full sm:w-2/4">
					{/* <Previewer options={ options } /> */}
				</div>
			</div>
		</>
	);
}

export default compose(
	withSelect( ( select ) => {
		const optionKeys = [
			'sl_panel_options',
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
)( Advanced );
