import React, {
    useState,
    useEffect
} from '@wordpress/element'
import { showAlert } from '../../../utils/alertHelper';

const ShortCodes = (props) => {
    const { formData, setFormData } = props;
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
            });
    } , []);

    console.log(shortCodes)


    const handleAccountChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            accounts
        })
    }

    const removeAccount = (account) => {
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
                // delete accounts[account];
                // setFormData({
                //     ...formData,
                //     accounts
                // })

                wp.ajax
                    .post('edbi_get_shortcodes', {
                        account_id: account,
                        nonce: EDBIData?.ajaxNonce,
                    })
                    .then((response) => {
                        setFormData({
                            ...formData,
                            accounts
                        })

                        showAlert({
                            title: 'Account Removed',
                            text: 'Account has been removed successfully',
                            icon: 'success',
                            showCancelButton: false,
                            confirmButtonText: 'Ok',
                            // confirmButtonColor: '#007bff',
                        });
                    })
                    .catch((error) => {
                        console.error(error);
                        showAlert({
                            title: 'Error',
                            text: 'An error occurred while removing account',
                            icon: 'error',
                            showCancelButton: false,
                            confirmButtonText: 'Ok',
                            // confirmButtonColor: '#007bff',
                        });
                    });
            }
        })

    }

    console.log(accounts)
    return (
        <>
            <div className='overflow-x-scroll edbi-shortcodes'>
                <div className='flex items-center justify-between edbi-shortcodes__header'>
                    <h3>All ShortCodes</h3>
                </div>
                <table className='edbi-shortcodes__lists'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Type</th>
                            <th>ShortCode</th>
                            <th>Created</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            Object.keys(shortCodes).length === 0 ? (
                                <div className='edbi-shortcodes__lists__item'>
                                    <p>No Shortcodes found</p>
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
                                                    <td><h4>{item.title}</h4></td>
                                                    <td><h4>{item.title}</h4></td>
                                                    <td><h4>{item.title}</h4></td>
                                                    <td><h4>{item.title}</h4></td>
                                                    <td><h4>{item.title}</h4></td>
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
        </>
    )
}

export default ShortCodes