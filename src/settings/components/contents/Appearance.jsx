import React from '@wordpress/element'

const Appearance = (props) => {
    const { formData, setFormData } = props;

    const {
        accounts 
    } = IDBData;

    

    console.log('Appearance formdaa', formData)

    const handleAccountChange = (e) => {
        const { name, value } = e.target;

        // setFormData({
        //     ...formData,
        //     [name]: value
        // })

        setFormData({
            ...formData,
            appearance: {
                'setting1': 'value1',
            }
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

export default Appearance