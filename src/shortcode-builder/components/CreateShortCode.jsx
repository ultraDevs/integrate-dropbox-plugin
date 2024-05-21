import React, { useState } from '@wordpress/element'
import { useSelect, dispatch } from '@wordpress/data'
import { __ } from '@wordpress/i18n';
import ShortCodeConfig from './ShortCodeConfig';

const CreateShortCode = (props) => {

    const {
        formData,
        setFormData,
        activeItem,
        setActiveItem,
        save,
        setSave,
        shortCodeConfig,
        setShortCodeConfig,
        shortCodeTitle,
        setShortCodeTitle
    } = props;

    return (
        <ShortCodeConfig {...props} />
    )
}

export default CreateShortCode