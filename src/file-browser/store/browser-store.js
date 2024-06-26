import { createReduxStore, register } from '@wordpress/data';

const DEFAULT_STATE = {
	data: {
		filter: {
			by: 'name',
			direction: 'asc',
		},
		refresh: false,
		current_path: '',
		breadcrumbs: [],
		previous_path: '',
		isLoading: false,
		showUploader: false,
	},
};

const actions = {
	setData(item, value) {
		return {
			type: 'SET_DATA',
			item,
			value,
		};
	},
};

const store = createReduxStore('dropbox-browser', {
	reducer(state = DEFAULT_STATE, action) {
		switch (action.type) {
			case 'SET_DATA':
				return {
					...state,
					data: {
						...state.data,
						[action.item]: action.value,
					},
				};
		}

		return state;
	},

	actions,

	selectors: {
		getData(state, item) {
			const { data } = state;
			return data[item];
		},
	},
});

register(store);
