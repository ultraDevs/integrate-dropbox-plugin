import React, { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

import CreateShortCode from './components/CreateShortCode';
import Header from './components/Header';

import './scss/shortcode-builder.scss';
import ShortCodes from './components/contents/ShortCodes';
import { useEffect } from 'react';
import EditShortCode from './components/EditShortCode';


const App = () => {
	const hash = window.location.hash;
	const hashValue = hash.replace('#', '');
	const [ activeItem, setActiveItem ] = useState(hashValue || 'types');
	const [ save, setSave ] = useState(false);

	const [shortCodeTitle, setShortCodeTitle] = useState(
		__('ShortCode Title', 'easy-dropbox-integration')
	);

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
			imgLayout: 'grid',
		}
	});

	const [ currentTab, setCurrentTab ] = useState('shortcodes');

	const {
		activeAccount,
        ajaxNonce
	} = EDBIData;
	
	useEffect(() => {
		if (window.location.search.includes('edit')) {
			setCurrentTab('edit');
		}

		if (window.location.search.includes('create')) {
			setCurrentTab('create');
		}
	}, [currentTab]);


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
							setShortCodeConfig={setShortCodeConfig}
							setShortCodeTitle={setShortCodeTitle}
						/>
					)
				}
				{
					currentTab === 'create' && (
						<CreateShortCode
							activeItem={activeItem}
							setActiveItem={setActiveItem}
							save={save}
							setSave={setSave}
							shortCodeConfig={shortCodeConfig}
							setShortCodeConfig={setShortCodeConfig}
							shortCodeTitle={shortCodeTitle}
							setShortCodeTitle={setShortCodeTitle}
							actionType="create"
						/>
					)
				}
				{
					currentTab === 'edit' && (
						<EditShortCode
							activeItem={activeItem}
							setActiveItem={setActiveItem}
							save={save}
							setSave={setSave}
							shortCodeConfig={shortCodeConfig}
							setShortCodeConfig={setShortCodeConfig}
							shortCodeTitle={shortCodeTitle}
							setShortCodeTitle={setShortCodeTitle}
							actionType="edit"
						/>
					)
				}
			</div>
		</div>
	);
};

export default App;
