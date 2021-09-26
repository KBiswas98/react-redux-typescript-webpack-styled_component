import { PLUGIN_STORE } from '../types'

const defaultState = {
	pluginStore: [],
	isLoading: false,
}

const AppReducer = (state = defaultState, action: any) => {
	switch (action.type) {
		case `${PLUGIN_STORE}_PENDING`:
			return { ...state, isLoading: true }

		case `${PLUGIN_STORE}_FULFILLED`:
			return {
				...state,
				isLoading: false,
				pluginStore: action.payload,
			}

		default:
			return state
	}
}

export default AppReducer
