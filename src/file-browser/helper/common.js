export const formatBytes = (bytes, decimals = 2) => {
	if (!+bytes) return '0 Bytes';

	const k = 1024;
	const dm = decimals < 0 ? 0 : decimals;
	const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

	const i = Math.floor(Math.log(bytes) / Math.log(k));

	return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
};

export const getIcon = (ext) => {
	switch (ext) {
		case 'mp3':
			return 'dashicons-media-audio';
		case 'mp4':
			return 'dashicons-media-video';
		case 'jpg':
		case 'jpeg':
		case 'png':
		case 'gif':
			return 'dashicons-format-image';
		case 'pdf':
			return 'dashicons-media-document';
		case 'zip':
			return 'dashicons-media-archive';
		default:
			return 'dashicons-media-default';
	}
};


export const generateDataAttributes = (file) => {
    // if (!file) return '';

    let attributes = {};

    const activeAccount = IDBData?.activeAccount;

    const filePreview = `${IDBData.ajaxUrl}?action=idb_file_preview&account_id=${activeAccount['id']}&nonce=${IDBData?.ajaxNonce}&file=${file.id}`;

    // If item.ext is mp4, webm, or ogg, we will add the video attribute
    if (['mp4', 'webm', 'ogg'].includes(file.ext)) {
        
        const videoData = {
            poster: file.preview,
            source: [
                {
                    src: filePreview,
                    type: `video/${file.ext}`,
                },
            ],
			"attributes": {
				"controls": true,
				"preload": "auto",
				"playsinline": "true",
			}
        };
        attributes['data-poster'] = file.thumbnail;
		attributes['data-video'] = JSON.stringify(videoData);
    }

	// Audio file
	if (['mp3', 'wav', 'ogg'].includes(file.ext)) {
		// attributes['data-audio'] = filePreview;
        attributes['data-poster'] = file.thumbnail;

		const audioData = {
            // poster: file.preview,
            source: [
                {
                    src: filePreview,
                    type: `audio/${file.ext}`,
                },
            ],
			"attributes": {
				"controls": true,
				"preload": "auto",
				"playsinline": "true",
			}
        };
		attributes['data-video'] = JSON.stringify(audioData);
		attributes['data-iframe'] = false;
	}

	// if (['mp3', 'wav', 'ogg'].includes(file.ext)) {
	// 	attributes['data-audio'] = filePreview;
	// }

	if (['jpg', 'jpeg', 'png', 'gif'].includes(file.ext)) {
		attributes['href'] = filePreview;
	}

	if (file.ext === 'svg') {
		attributes['data-src'] = file.thumbnail;
		attributes['data-iframe'] = true;
	}

	if (file.ext === 'pdf') {
		attributes['data-src'] = filePreview;
		attributes['data-iframe'] = true;
	}

	if (file.ext === 'zip') {
		attributes['data-src'] = filePreview;
		attributes['data-iframe'] = true;
	}

	attributes['data-sub-html'] = `
		<h4>${file.name}</h4>
		<p>${formatBytes(file.size)}</p>
	`;
	attributes['data-ext'] = file.ext;

	return attributes;
}