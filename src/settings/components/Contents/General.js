
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


const General = ( props ) => {

    // if ( 'object' !== typeof props.options || 0 === Object.keys( props.options ).length ) {
    //     return (
    //         <>
    //             { __( 'Loading.......', 'sticky-list' ) }
    //         </>
    //     );
    // }
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
					{/* <Previewer options={ options } /> */}
				</div>
            </div>
        </>
    )
}

export default General;