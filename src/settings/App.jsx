import React, { useState } from '@wordpress/element';

import Content from './components/Content';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

import './scss/settings.scss';

const App = () => {
	const hash = window.location.hash;
	const hashValue = hash.replace('#', '');
	const [ activeItem, setActiveItem ] = useState(hashValue || 'accounts');
	const [ formData, setFormData ] = useState({});

	return (
		<div className='edbi-page'>
			<Header
				formData={formData}
				setFormData={setFormData}
			/>
			<div className='edbi-page__body'>
				<Sidebar
					activeItem={activeItem}
					setActiveItem={setActiveItem}
				/>
				<div className='edbi-page__content'>
					<Content
						activeItem={activeItem}
						formData={formData}
						setFormData={setFormData}
					/>
				</div>
			</div>
		</div>
	);
};

export default App;
