import React, { useState } from '@wordpress/element';

import CreateShortCode from './components/CreateShortCode';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

import './scss/shortcode-builder.scss';
import 'sweetalert2/src/sweetalert2.scss'
import ShortCodes from './components/contents/ShortCodes';
import { useEffect } from 'react';
import EditShortCode from './components/EditShortCode';

const App = () => {
	const hash = window.location.hash;
	const hashValue = hash.replace('#', '');
	const [ activeItem, setActiveItem ] = useState(hashValue || 'types');
	const [ formData, setFormData ] = useState({});

	const [ currentTab, setCurrentTab ] = useState('shortcodes');
	
	useEffect(() => {
		// if url has id param then set current tab to edit
		if (window.location.search.includes('id')) {
			setCurrentTab('edit');
		}

		// if url has create param then set current tab to create
		if (window.location.search.includes('create')) {
			setCurrentTab('create');
		}
	}, []);



	return (
		<div className='edbi-page'>
			<Header
				type={currentTab}
				currentTab={currentTab}
				setCurrentTab={setCurrentTab}
			/>
			<div className={
				'shortcodes' === currentTab ? 'edbi-page__con' : 'edbi-page__body'
			}>
				{
					currentTab === 'shortcodes' && (
						<ShortCodes
							currentTab={currentTab}
							setCurrentTab={setCurrentTab}
						/>
					)
				}
				{
					currentTab === 'create' && (
						<CreateShortCode
							activeItem={activeItem}
							setActiveItem={setActiveItem}
							formData={formData}
							setFormData={setFormData}
						/>
					)
				}
				{
					currentTab === 'edit' && (
						<EditShortCode
							activeItem={activeItem}
							setActiveItem={setActiveItem}
							formData={formData}
							setFormData={setFormData}
						/>
					)
				}
			</div>
		</div>
	);
};

export default App;
