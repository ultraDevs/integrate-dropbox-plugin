import React, {
    useState,
    useEffect
} from '@wordpress/element'
import { __ } from '@wordpress/i18n';
import { showAlert } from '../../../utils/alertHelper';
import { setActiveTabWithParam } from '../../../utils';

const ShortCodes = (props) => {
    const { currentTab, setCurrentTab } = props;
    const [ shortCodes, setShortCodes ] = useState({});

    const {
        accounts,
        activeAccount,
    } = EDBIData;

    useEffect(() => {

        wp.ajax
            .post('edbi_get_shortcodes', {
                account_id: activeAccount?.id,
                nonce: EDBIData?.ajaxNonce,
            })
            .then((response) => {
                setShortCodes(response);
            })
            .catch((error) => {
                console.error(error);
                showAlert({
                    title: __('Error', 'easy-dropbox-integration'),
                    text: __('An error occurred while fetching ShortCodes', 'easy-dropbox-integration'),
                    icon: 'error',
                    showCancelButton: false,
                    confirmButtonText: 'Ok',
                });
            });
    } , []);

    console.log('ShortCodes', shortCodes)

    const removeShortCode = (shortcode) => {
        showAlert({
            title: 'Remove Account',
            text: 'Are you sure you want to remove this account?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Remove',
            confirmButtonColor: '#d33',
            cancelButtonText: 'No',
            reverseButtons: true,
        }).then((result) => {
            if (result.isConfirmed) {

                wp.ajax
                .post('edbi_delete_shortcode', {
                    nonce: EDBIData?.ajaxNonce,
                    id: shortcode
                })
                .then((response) => {
                    // remove the shortcode from the list and update the state
                    const newShortCodes = { ...shortCodes };
                    delete newShortCodes[shortcode];
                    setShortCodes(newShortCodes);

                    showAlert({
                        title: __('Success', 'easy-dropbox-integration'),
                        text: __('Shortcode removed successfully', 'easy-dropbox-integration'),
                        icon: 'success',
                        showCancelButton: false,
                        confirmButtonText: 'Ok',
                    });
                })
                .catch((error) => {
                    console.error(error);

                    showAlert({
                        title: __('Error', 'easy-dropbox-integration'),
                        text: __('An error occurred while removing Shortcode', 'easy-dropbox-integration'),
                        icon: 'error',
                        showCancelButton: false,
                        confirmButtonText: 'Ok',
                    });
                });
            }
        })
    }

    const duplicateShortCode = (shortcode) => {
        wp.ajax
        .post('edbi_duplicate_shortcode', {
            nonce: EDBIData?.ajaxNonce,
            id: shortcode
        })
        .then((response) => {
            console.log('response', response)
            setShortCodes({
                ...shortCodes,
                [response.data.id]: response.data
            });

            showAlert({
                title: __('Success', 'easy-dropbox-integration'),
                text: __('Shortcode duplicated successfully', 'easy-dropbox-integration'),
                icon: 'success',
                showCancelButton: false,
                confirmButtonText: 'Ok',
            });
        })
        .catch((error) => {
            console.error(error);
            showAlert({
                title: __('Error', 'easy-dropbox-integration'),
                text: __('An error occurred while duplicating Shortcode', 'easy-dropbox-integration'),
                icon: 'error',
                showCancelButton: false,
                confirmButtonText: 'Ok',
            });
        });
    }

    console.log(accounts)
    return (
        <div className='px-5 py-6'>
            <div className='overflow-x-scroll edbi-shortcodes'>
                <div className='flex items-center justify-between edbi-shortcodes__header'>
                    <h3 className='flex items-center gap-4 mb-3 text-base font-bold text-black'>
                        { __('ShortCodes', 'easy-dropbox-integration') }
                        <span className='text-sm text-gray-600'>
                            ({ Object.keys(shortCodes).length } { __(' Items', 'easy-dropbox-integration') } )
                        </span>
                    </h3>
                </div>
                <table className='edbi-shortcodes__lists'>
                    <thead>
                        <tr>
                            <th>{ __( 'ID', 'easy-dropbox-integration') }</th>
                            <th>{ __( 'Title', 'easy-dropbox-integration' ) }</th>
                            <th>{ __( 'Type', 'easy-dropbox-integration' ) }</th>
                            <th>{ __( 'ShortCode', 'easy-dropbox-integration' ) }</th>
                            <th>{ __( 'Created', 'easy-dropbox-integration' ) }</th>
                            <th>{ __( 'Status', 'easy-dropbox-integration' ) }</th>
                            <th>{ __( 'Actions', 'easy-dropbox-integration' ) }</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            Object.keys(shortCodes).length === 0 ? (
                                <div className='edbi-shortcodes__lists__item'>
                                    <p>
                                        {
                                            __('No ShortCodes found', 'easy-dropbox-integration')
                                        }
                                    </p>
                                </div>
                            ) : (
                                <>
                                    { 
                                        Object.keys(shortCodes).map((key) => {
                                            const item = shortCodes[key];
                                            return (
                                                <tr className='edbi-shortcodes__list' key={key}>
                                                    <td><h4>{item.id}</h4></td>
                                                    <td><h4>{item.title}</h4></td>
                                                    <td><h4>{item.type}</h4></td>
                                                    <td>
                                                        <div
                                                            className='flex items-center justify-center gap-3 p-2 bg-gray-200 edbi-shortcodes__list__shortcode'
                                                            title='Click to copy shortcode'
                                                            onClick={() => {
                                                                navigator.clipboard.writeText(`[easy_dropbox_integration id="${item.id}"]`);
                                                                showAlert({
                                                                    title: __('Shortcode Copied', 'easy-dropbox-integration'),
                                                                    icon: 'success',
                                                                    position: 'top-right',
                                                                    toast: true,
                                                                    showConfirmButton: false,
                                                                    timer: 1500,
                                                                });
                                                            } }
                                                        >
                                                            <i class="dashicons dashicons-admin-page"></i>
                                                            [easy_dropbox_integration id="{item.id}"]
                                                        </div>
                                                    </td>
                                                    <td><h4>{item.created_at}</h4></td>
                                                    <td><h4>{item.status}</h4></td>
                                                    <td>
                                                        <div className='flex items-center justify-center w-full gap-3'>
                                                            <button className='' title={
                                                                'Edit'
                                                            } onClick={() => {
                                                                setActiveTabWithParam('edit', setCurrentTab, item.id)
                                                            }
                                                            }>
                                                                <span class="dashicons dashicons-edit"></span>
                                                            </button>
                                                            <button className='' onClick={() => removeShortCode(item.id)}>
                                                                <span class="dashicons dashicons-trash"></span>
                                                            </button>
                                                            <button
                                                                className=''
                                                                title={
                                                                    __( 'Duplicate', 'easy-dropbox-integration' )
                                                                }
                                                                onClick={() => duplicateShortCode(item.id)}
                                                            >
                                                                <span class="dashicons dashicons-admin-page"></span>
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </>
                            )
                            }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ShortCodes