import React, { useState } from '@wordpress/element';

import CreateShortCode from './components/CreateShortCode';
import Header from './components/Header';

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
	const [ save, setSave ] = useState(false);

	const [shortCodeTitle, setShortCodeTitle] = useState('');
	const [shortCodeConfig, setShortCodeConfig] = useState({
		type: 'image-gallery',
		source: {
			all: false,
			privateFiles: false,
			items: [],
		},
		settings: {
			container: {
				width: '100%',
				height: null,
			},
			sorting: {
				sortBy: 'name',
				sortOrder: 'asc',
			},
			imgLayout: 'justified',
		}
	});

	const [ currentTab, setCurrentTab ] = useState('shortcodes');
	
	useEffect(() => {
		if (window.location.search.includes('edit')) {
			setCurrentTab('edit');
		}

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
				save={save}
				setSave={setSave}
				shortCodeTitle={shortCodeTitle}
				setShortCodeTitle={setShortCodeTitle}
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
							save={save}
							setSave={setSave}
							shortCodeConfig={shortCodeConfig}
							setShortCodeConfig={setShortCodeConfig}
							shortCodeTitle={shortCodeTitle}
							setShortCodeTitle={setShortCodeTitle}
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
							save={save}
							setSave={setSave}
							shortCodeTitle={shortCodeTitle}
							setShortCodeTitle={setShortCodeTitle}
						/>
					)
				}
			</div>
		</div>
	);
};

export default App;
