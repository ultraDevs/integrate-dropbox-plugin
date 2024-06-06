import React, {
    useState,
    useEffect
} from '@wordpress/element'
import { __ } from '@wordpress/i18n';
import { showAlert } from '../../../utils/alertHelper';
import { setActiveTabWithParam } from '../../../utils';

const ShortCodes = (props) => {
    const { currentTab, setCurrentTab, setShortCodeConfig, setShortCodeTitle } = props;
    const [ shortCodes, setShortCodes ] = useState({});

    const {
        accounts,
        activeAccount,
    } = EDBIData;

    useEffect(() => {

        wp.ajax
            .post('idbwp_get_shortcodes', {
                account_id: activeAccount?.id,
                nonce: EDBIData?.ajaxNonce,
            })
            .then((response) => {
                setShortCodes(response);
            })
            .catch((error) => {
                console.error(error);
                showAlert({
                    title: __('Error', 'integrate-dropbox-wp'),
                    text: __('An error occurred while fetching ShortCodes', 'integrate-dropbox-wp'),
                    icon: 'error',
                    showCancelButton: false,
                    confirmButtonText: 'Ok',
                });
            });
    } , []);

    console.log('ShortCodes', shortCodes)

    const removeShortCode = (shortcode) => {
        showAlert({
            title: 'Remove Shortcode',
            text: 'Are you sure you want to remove this Shortcode?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Remove',
            confirmButtonColor: '#d33',
            cancelButtonText: 'No',
            reverseButtons: true,
        }).then((result) => {
            if (result.isConfirmed) {

                wp.ajax
                .post('idbwp_delete_shortcode', {
                    nonce: EDBIData?.ajaxNonce,
                    id: shortcode
                })
                .then((response) => {
                    // remove the shortcode from the list and update the state
                    const newShortCodes = { ...shortCodes };
                    delete newShortCodes[shortcode];
                    setShortCodes(newShortCodes);

                    showAlert({
                        title: __('Success', 'integrate-dropbox-wp'),
                        text: __('Shortcode removed successfully', 'integrate-dropbox-wp'),
                        icon: 'success',
                        showCancelButton: false,
                        confirmButtonText: 'Ok',
                    });
                })
                .catch((error) => {
                    console.error(error);

                    showAlert({
                        title: __('Error', 'integrate-dropbox-wp'),
                        text: __('An error occurred while removing Shortcode', 'integrate-dropbox-wp'),
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
        .post('idbwp_duplicate_shortcode', {
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
                title: __('Success', 'integrate-dropbox-wp'),
                text: __('Shortcode duplicated successfully', 'integrate-dropbox-wp'),
                icon: 'success',
                showCancelButton: false,
                confirmButtonText: 'Ok',
            });
        })
        .catch((error) => {
            console.error(error);
            showAlert({
                title: __('Error', 'integrate-dropbox-wp'),
                text: __('An error occurred while duplicating Shortcode', 'integrate-dropbox-wp'),
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
                        { __('ShortCodes', 'integrate-dropbox-wp') }
                        <span className='text-sm text-gray-600'>
                            ({ Object.keys(shortCodes).length } { __(' Items', 'integrate-dropbox-wp') } )
                        </span>
                    </h3>
                </div>
                <table className='edbi-shortcodes__lists'>
                    <thead>
                        <tr>
                            <th>{ __( 'ID', 'integrate-dropbox-wp') }</th>
                            <th>{ __( 'Title', 'integrate-dropbox-wp' ) }</th>
                            <th>{ __( 'Type', 'integrate-dropbox-wp' ) }</th>
                            <th>{ __( 'ShortCode', 'integrate-dropbox-wp' ) }</th>
                            <th>{ __( 'Created', 'integrate-dropbox-wp' ) }</th>
                            <th>{ __( 'Status', 'integrate-dropbox-wp' ) }</th>
                            <th>{ __( 'Actions', 'integrate-dropbox-wp' ) }</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            Object.keys(shortCodes).length === 0 ? (
                                <div className='edbi-shortcodes__lists__item'>
                                    <p>
                                        {
                                            __('No ShortCodes found', 'integrate-dropbox-wp')
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
                                                    <td><h4>
                                                        {
                                                            item?.type?.replace('-', ' ').toLowerCase().replace(/(?<= )[^\s]|^./g, a => a.toUpperCase())
                                                        }
                                                    </h4></td>
                                                    <td>
                                                        <div
                                                            className='flex items-center justify-center gap-3 p-2 bg-gray-200 edbi-shortcodes__list__shortcode'
                                                            title='Click to copy shortcode'
                                                            onClick={() => {
                                                                navigator.clipboard.writeText(`[integrate_dropbox_wp id="${item.id}"]`);
                                                                showAlert({
                                                                    title: __('Shortcode Copied', 'integrate-dropbox-wp'),
                                                                    icon: 'success',
                                                                    position: 'top-right',
                                                                    toast: true,
                                                                    showConfirmButton: false,
                                                                    timer: 1500,
                                                                });
                                                            } }
                                                        >
                                                            <i class="dashicons dashicons-admin-page"></i>
                                                            [integrate_dropbox_wp id="{item.id}"]
                                                        </div>
                                                    </td>
                                                    <td><h4>{item.created_at}</h4></td>
                                                    <td><h4>{item.status}</h4></td>
                                                    <td>
                                                        <div className='flex items-center justify-center w-full gap-3'>
                                                            <button className='' title={
                                                                'Edit'
                                                            } onClick={() => {
                                                                setShortCodeTitle(item.title);
                                                                setShortCodeConfig(JSON.parse(item.config));
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
                                                                    __( 'Duplicate', 'integrate-dropbox-wp' )
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