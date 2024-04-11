import React from '@wordpress/element'

const Accounts = (props) => {
    const { formData, setFormData } = props;

    const {
        accounts 
    } = IDBData;

    const handleAccountChange = (e) => {
        const { name, value } = e.target;

        // setFormData({
        //     ...formData,
        //     [name]: value
        // })

        setFormData({
            ...formData,
            accounts
        })
    }

    return (
        <>
            <div className='idb-settings__content__accounts'>
                <button onClick={ handleAccountChange }>Add Account</button>
            </div>
        </>
    )
}

export default Accounts