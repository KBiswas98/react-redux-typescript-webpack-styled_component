import axios from 'axios'
import Cookies from 'js-cookie'
import toast from 'react-hot-toast'

const accessToken = Cookies.get('access-token')

type TMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

export const Request = (url: string, method: TMethod, body?: any, extractPayload?: boolean) => {
	const header = {
		accept: 'application/json',
		'Content-Type': 'application/json',
		Authorization: `Bearer ${accessToken}`,
		lang: 'EN',
	}

	const successResponseModifier = (response: any) => {
		if (response.data.status === false) {
			toast.error(response.data.error)
		}
		return response.data
	}

	// TODO: for every 4xx request need to logout.
	const failResponseModifier = (error: any) => {
		if (error.status === '401' || error.status === 401) {
			Cookies.remove('access-token')
			window.location.reload()
			return 'logging out....'
		}
		return error
	}

	return axios({ url: url, baseURL: process.env.API, timeout: 1000, method: method, data: body, headers: header })
		.then(res => successResponseModifier(res))
		.then(res => (extractPayload ? res.payload : res))
		.catch(err => failResponseModifier(err))
}
