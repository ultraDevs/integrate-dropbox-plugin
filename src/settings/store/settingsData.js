import { createReduxStore, register } from '@wordpress/data';

const DEFAULT_STATE = {
	settings: {
		accounts: [],
		accountsLoaded: false,
	},
};

const actions = {
	setSetting(item, value) {
		return {
			type: 'SET_DATA',
			item,
			value,
		};
	},
};

const store = createReduxStore('idb-settings', {
	reducer(state = DEFAULT_STATE, action) {
		switch (action.type) {
			case 'SET_DATA':
				return {
					...state,
					settings: {
						...state.settings,
						[action.item]: action.value,
					},
				};
		}

		return state;
	},

	actions,

	selectors: {
		getSetting(state, item) {
			const { settings } = state;
			return settings[item];
		},
		getSettings(state) {
			return state.settings;
		},
	},
});

register(store);
