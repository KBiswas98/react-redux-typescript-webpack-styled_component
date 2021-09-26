import { Request } from '../../utility/networkRequest'
import { PLUGIN_STORE } from '../types'

export const getPluginStoreData = () => ({
	type: PLUGIN_STORE,
	payload: Request('/plugins', 'GET', null, true),
})

export const addPluginToMyCompany = (name: string) => {
	return Request('/plugins/install-plugin', 'POST', { name }, true)
}

export const removePluginFromMyCompany = (name: string) => {
	return Request('/plugins/remove-plugin-from-my-company', 'DELETE', { name }, true)
}
