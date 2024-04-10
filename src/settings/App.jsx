import React, { useState } from '@wordpress/element';
import { dispatch } from '@wordpress/data';

import Content from './components/Content';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

import './scss/settings.scss';
import 'sweetalert2/src/sweetalert2.scss'

const App = () => {
	const hash = window.location.hash;
	const hashValue = hash.replace('#', '');
	const [ activeItem, setActiveItem ] = useState(hashValue || 'accounts');
	const [ formData, setFormData ] = useState({});

	// dispatch('idb-settings').setSetting( 'accounts', IDBData.accounts || []);


	return (
		<div className='idb-settings'>
			<Header
				formData={formData}
				setFormData={setFormData}
			/>
			<div className='idb-settings__body'>
				<Sidebar
					activeItem={activeItem}
					setActiveItem={setActiveItem}
				/>
				<div className='idb-settings__content'>
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
