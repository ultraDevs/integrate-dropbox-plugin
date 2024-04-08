import React, { useEffect, useRef, useState } from '@wordpress/element';
import { dispatch, useSelect } from '@wordpress/data';

const Uploader = () => {
    const { activeAccount } = IDBData;
    const refresh = useSelect((select) => select('dropbox-browser').getData('refresh'));
    const currentPath = useSelect((select) => select('dropbox-browser').getData('current_path'));

    const fileInput = useRef(null);
    const folderInput = useRef(null);

    const [uploadQueue, setUploadQueue] = useState([]); // Queue of files to upload
    const [uploading, setUploading] = useState(false); // Flag to indicate if an upload is in progress
    const [currentFileIndex, setCurrentFileIndex] = useState(0); // Index of the current file being uploaded
    const [uploadedCount, setUploadedCount] = useState(0); // Count of uploaded files

    useEffect(() => {
        // Start uploading when a new file is added to the queue
        if (!uploading && uploadQueue.length > 0) {
            startUpload(uploadQueue[currentFileIndex]);
        }
        console.log(currentFileIndex, uploadedCount, uploadQueue);
    }, [uploadQueue, uploading, currentFileIndex]);

    useEffect(() => {
        // Reset current file index and uploaded count when upload queue changes
        setCurrentFileIndex(0);
        setUploadedCount(0);
    }, [uploadQueue]);

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();

        document.querySelector('.ud-c-file-browser__upload__inner').style.border = '2px dashed #ff0000';
    };

    const handleDragEnd = (e) => {
        e.preventDefault();
        e.stopPropagation();

        document.querySelector('.ud-c-file-browser__upload__inner').style.border = '2px dashed #000000';
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();

        document.querySelector('.ud-c-file-browser__upload__inner').style.border = '2px dashed #000000';

        // Handle the drop here.
        const files = Array.from(e.dataTransfer.files);
        setUploadQueue((prevQueue) => [...prevQueue, ...files]);
    };

    const startUpload = (file) => {
        // Prepare the data to be sent to the server
        const data = new FormData();
        data.append('action', 'idb_upload');
        data.append('nonce', IDBData.ajaxNonce);
        data.append('path', currentPath);
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

                // Increment the uploaded count
                setUploadedCount((prevCount) => prevCount + 1);

                // Remove the uploaded file from the queue
                setUploadQueue((prevQueue) => prevQueue.slice(1));
                dispatch('dropbox-browser').setData('refresh', !refresh);
            },
            error: function (error) {
                console.error('Error:', error);
            },
            complete: function () {
                // Mark the upload as complete
                setUploading(false);
            },
        });

        setUploading(true);
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
            startUpload(files[currentFileIndex]);
        }
    };

    const handleFileUploadButtonClick = () => {
        fileInput.current.click();
    };

    const handleFolderUploadButtonClick = () => {
        folderInput.current.click();
    };

    return (
        <div
            className='ud-c-file-browser__upload'
            onDragOver={handleDragOver}
            onDragEnd={handleDragEnd}
            onDrop={handleDrop}
        >
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
                            onClick={handleFileUploadButtonClick}
                        >
                            Select File
                        </button>
                        <button
                            className='px-6 ud-c-btn ud-c-btn--primary'
                            onClick={handleFolderUploadButtonClick}
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
