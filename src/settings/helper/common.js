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
