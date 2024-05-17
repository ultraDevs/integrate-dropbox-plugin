import React from '@wordpress/element'
import { useSelect, dispatch } from '@wordpress/data'
import ShortCodes from './contents/ShortCodes';
import Appearance from './contents/Appearance';
import Sidebar from './Sidebar';

const CreateShortCode = (props) => {

    const { formData, setFormData, activeItem, setActiveItem } = props;

    const {
		activeAccount,
	} = EDBIData;

    return (
        <>
            <Sidebar
                activeItem={activeItem}
                setActiveItem={setActiveItem}
            />
            <div className='edbi-page__content'>
                
                {activeItem === 'types' && (
                    <h3>Types</h3>
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
        </>
    )
}

export default CreateShortCode