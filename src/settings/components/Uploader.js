import React, { useEffect, useRef, useState } from '@wordpress/element';
import { dispatch, useSelect } from '@wordpress/data';
import { showAlert } from '../utils/alertHelper';

const Uploader = () => {
    const { activeAccount } = IDBData;
    const refresh = useSelect((select) => select('dropbox-browser').getData('refresh'));
    const currentPath = useSelect((select) => select('dropbox-browser').getData('current_path'));

    const fileInput = useRef(null);
    const folderInput = useRef(null);

    const [uploadQueue, setUploadQueue] = useState([]); // Queue of files to upload
    const [uploading, setUploading] = useState(false); // Flag to indicate if an upload is in progress
    const [currentFile, setCurrentFile] = useState(null); // Current file being uploaded

    useEffect(() => {
        // Start uploading when a new file is added to the queue
        if (!uploading && uploadQueue.length > 0) {
            startUpload(uploadQueue[0]);
        }
        console.log(currentFile)
    }, [uploadQueue, uploading]);

    const startUpload = (file) => {
        setCurrentFile(file);
        setUploading(true);

        // Prepare the data to be sent to the server
        const data = new FormData();
        data.append('action', 'idb_upload');
        data.append('nonce', IDBData.ajaxNonce);
        data.append('path', currentPath || '/');
        data.append('account_id', activeAccount['id']);
        data.append('file', file);

        // Send the data to the server
        jQuery.ajax({
            url: IDBData.ajaxUrl,
            type: 'POST',
            data: data,
            processData: false,
            contentType: false,
            success: function (response) {
                console.log('Response:', response);

                // Remove the uploaded file from the queue
                setUploadQueue((prevQueue) => prevQueue.slice(1));

                // Show a success message
                // showAlert('success', 'File uploaded successfully.');
            },
            error: function (error) {
                console.error('Error:', error);

                // Show an error message
                // showAlert('error', 'An error occurred while uploading the file.');
            },
            complete: function () {
                // Mark the upload as complete
                setUploading(false);
            },
        });
    };

    const handleFileSelect = (e) => {
        let files = e.target.files;

        if (files.length === 0) {
            return;
        }

        files = Array.from(files);

        // Add files to the upload queue
        setUploadQueue((prevQueue) => [...prevQueue, ...files]);

        // Start uploading if not already uploading
        if (!uploading) {
            startUpload(files[0]);
        }
    };

    return (
        <div className='ud-c-file-browser__upload'>
            <div className='ud-c-file-browser__upload__inner'>
                <div className='ud-c-file-browser__upload__inner__header'>
                    <h3>Uploader</h3>
                    <span
                        onClick={() => {
                            dispatch('dropbox-browser').setData('showUploader', false);
                        }}
                    >
                        <i className='dashicons dashicons-no'></i>
                    </span>
                </div>
                <div className='ud-c-file-browser__upload__inner__dropzone'>
                    <p>Drag and drop files here</p>
                    <p>OR</p>
                    <div className='flex items-center justify-center gap-3'>
                        <button
                            className='px-6 ud-c-btn ud-c-btn--primary'
                            onClick={() => {
                                fileInput.current.click();
                            }}
                        >
                            Select File
                        </button>
                        <button
                            className='px-6 ud-c-btn ud-c-btn--primary'
                            onClick={() => {
                                folderInput.current.click();
                            }}
                        >
                            Select Folder
                        </button>
                    </div>

                    <input type='file' ref={fileInput} multiple onChange={handleFileSelect} />

                    <input type='file' ref={folderInput} directory='' webkitdirectory='' onChange={handleFileSelect} />
                </div>
            </div>
        </div>
    );
};

export default Uploader;
