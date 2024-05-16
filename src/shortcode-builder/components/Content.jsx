import React from '@wordpress/element'
import { useSelect, dispatch } from '@wordpress/data'
import ShortCodes from './contents/ShortCodes';
import Appearance from './contents/Appearance';

const Content = (props) => {

    const { activeItem, formData, setFormData } = props;

    const {
		activeAccount,
	} = EDBIData;

    return (
        <div>
            {activeItem === 'types' && (
                <ShortCodes
                    formData={formData}
                    setFormData={setFormData}
                />
            )}
            {activeItem === 'source' && (
                <Appearance
                    formData={formData}
                    setFormData={setFormData}
                />
            )}
            {activeItem === 'advanced' && (
                <Appearance
                    formData={formData}
                    setFormData={setFormData}
                />
            )}
        </div>
    )
}

export default Content