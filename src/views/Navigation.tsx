import React, { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

const DashboardNavigationMobile = lazy(() => import('./dashboard-mobile/DashboardNavigation'))
const DashboardNavigation = lazy(() => import('./dashboard/DashboardNavigation'))
const Client = lazy(() => import('./client/Client'))

export default function Navigation() {
	const screenWidth = window.innerWidth
	useEffect(() => {
		// console.log('accessToken:', accessToken)
	}, [])
	return (
		<>
			<Router>
				<Suspense fallback={<div>loading...</div>}>
					<Switch>
						<Route path={'/dashboard'} component={screenWidth > 500 ? DashboardNavigation : DashboardNavigationMobile} />
						<Route path={'/'} exact component={Client} />
					</Switch>
				</Suspense>
			</Router>
			<Toaster containerClassName="text-sm" />
		</>
	)
}
