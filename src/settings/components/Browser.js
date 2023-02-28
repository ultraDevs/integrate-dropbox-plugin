import React from 'react';
import { useEffect } from '@wordpress/element';
import { useSelect } from '@wordpress/data';

const Browser = () => {
	const filter = useSelect((select) => select('dropbox-browser').getData('filter'));

	useEffect(() => {
		console.log(filter);
	}, [filter]);

	return (
		<>
			<div className='ud-c-file-browser__content'></div>
		</>
	);
};

export default Browser;
