import React, { useState } from '@wordpress/element';

import Content from './components/Content';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

import './scss/shortcode-builder.scss';
import 'sweetalert2/src/sweetalert2.scss'
import ShortCodes from './components/contents/ShortCodes';

const App = () => {
	const hash = window.location.hash;
	const hashValue = hash.replace('#', '');
	const [ activeItem, setActiveItem ] = useState(hashValue || 'types');
	const [ formData, setFormData ] = useState({});

	return (
		<div className='edbi-page'>
			<Header
				formData={formData}
				setFormData={setFormData}
			/>
			<div className='edbi-page__body'>
				<div className='flex-1 px-5 py-6'>
					<ShortCodes />
				{/* <Sidebar
					activeItem={activeItem}
					setActiveItem={setActiveItem}
				/>
				<div className='edbi-page__content'>
					<Content
						activeItem={activeItem}
						formData={formData}
						setFormData={setFormData}
					/>
				</div> */}
				</div>
			</div>
		</div>
	);
};

export default App;
