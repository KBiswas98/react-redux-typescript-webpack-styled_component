import Cookies from 'js-cookie'

export const logout = () => {
	Cookies.remove('access-token')
	window.location.reload()
}
