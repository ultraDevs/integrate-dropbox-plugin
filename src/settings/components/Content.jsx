import React from '@wordpress/element'
import { useSelect, dispatch } from '@wordpress/data'
import Accounts from './contents/Accounts';
import Appearance from './contents/Appearance';

const Content = (props) => {

    const { activeItem, formData, setFormData } = props;

    const {
		activeAccount,
	} = IDBData;

    const settingsData = useSelect( ( select ) => {
        return select( 'idb-settings' ).getSettings();
    })

    console.log('content formdaa', formData)

    return (
        <div>
            {activeItem === 'accounts' && (
                <Accounts
                    formData={formData}
                    setFormData={setFormData}
                />
            )}
            {activeItem === 'appearance' && (
                <Appearance
                    formData={formData}
                    setFormData={setFormData}
                />
            )}
        </div>
    )
}

export default Content