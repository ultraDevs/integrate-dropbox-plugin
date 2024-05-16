import React from '@wordpress/element'
import { showAlert } from '../../../utils/alertHelper';

const Accounts = (props) => {
    const { formData, setFormData } = props;

    const {
        accounts,
        activeAccount,
    } = EDBIData;

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
                    .post('edbi_remove_account', {
                        account_id: account,
                        nonce: EDBIData?.ajaxNonce,
                    })
                    .then((response) => {
                        delete accounts[account];
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
            <div className='edbi-accounts'>
                <div className='edbi-accounts__list'>
                    {
                        Object.keys(accounts).map((account, index) => {
                            const accountData = accounts[account];
                            return (
                                <div key={index} className='edbi-accounts__item'>
                                    <div key={index} className='edbi-accounts__item__avatar'>
                                        <img src={accountData.photo} alt={accountData.name} />
                                    </div>
                                    <div className='edbi-accounts__item__info'>
                                        <h3>{accountData.name}</h3>
                                        <p>{accountData.email}</p>
                                    </div>
                                    <div className='edbi-accounts__item__actions'>
                                        <button
                                            onClick={() => {
                                                removeAccount(account)
                                            }}
                                        >
                                        Remove
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <button
                    className='edbi-accounts__add'
                    onClick={() => {
                        window.open(
                            EDBIData.authUrl,
                            '_blank',
                            'width=600,height=600,toolbar=yes,scrollbars=yes,resizable=yes'
                        );
                    }}
                >Add Account</button>
            </div>
        </>
    )
}

export default Accounts