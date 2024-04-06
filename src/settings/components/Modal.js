import React, { useEffect, useState } from 'react'

import '../scss/modal.scss';

const Modal = ({
    showModal,
    item
}) => {

    const [ previewData, setPreviewData ] = useState( '' );

    const { activeAccount, accounts } = IDBData;

    useEffect(() => {
        wp.ajax.post(
            'idb_file_preview',
            {
                account_id: activeAccount['id'],
                nonce: IDBData?.ajaxNonce,
                file: item.path,
            }
        ).then((response) => {
            setPreviewData( response );
        }
        ).catch((error) => {
            console.error( error );
        });
    }, [ item ]);

    return (
        <>
        {
            showModal && (
                <div className='ud-idb-modal'>
                    <div className='ud-idb-modal__header'>
                        <h3>
                            {
                                item.name
                            }
                        </h3>
                    </div>
                    <div className='ud-idb-modal__content'>
                        <img src={ previewData } alt={ item.name } />
                    </div>
                </div>
            )
        }
        </>
    )
}

export default Modal