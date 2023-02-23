
import React from 'react'
import { toast } from 'react-toastify';
import { withSelect } from '@wordpress/data';
import { useState } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import swal from "sweetalert";

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
import apiFetch from '@wordpress/api-fetch';


const General = ( props ) => {

	const switchAccount = (id) => {
		apiFetch({
			path: "/idb/v1/switch-account",
			method: "POST",
			data: {
				id: id,
			},
		}).then((response) => {
			if ( 'success' === response.status ) {
				window.location.reload();
			}
		});
	}

	// swal(
	// 	{
	// 		title: "An input!",
	// 		text: "Write something interesting:",
	// 		type: "input",
	// 		showCancelButton: true,
	// 		closeOnConfirm: false,
	// 		animation: "slide-from-top",
	// 		inputPlaceholder: "Write something",
	// 		getState: () => {
	// 			console.log('getState');
	// 		}
		
	// 	}
	// );

    return (
        <>
            <div className='flex flex-wrap justify-between'>
                <div className='w-full sm:w-2/4'>
                    <button 
                        onClick={
                            () => {
                                window.open( IDBAdmin.authUrl, '_blank', 'width=600,height=600,toolbar=yes,scrollbars=yes,resizable=yes' );
                            }
                        }
                        className='button button-primary'
                    >Authorize</button>

                    <h3>{IDBAdmin?.activeAccount?.name}</h3>
                </div>
                <div className='w-full sm:w-2/4'>
					<h3>Switch Account</h3>
					{
						Object.entries(IDBAdmin?.accounts).map((account, index) => {
							return (
								<div key={index}>
									<h3>{account[1].name}</h3>
									<button 
										onClick={
											() => {
												switchAccount(account[1].id);
												toast.success('Account switched successfully');
											}
										}
										className='button button-primary'
									>Switch to this</button>
								</div>
							)
						})
					}
				</div>
            </div>
        </>
    )
}

export default General;
