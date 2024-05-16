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
            <div className='edbi-settings__content__accounts'>
                
            </div>
        </>
    )
}

export default ShortCodes