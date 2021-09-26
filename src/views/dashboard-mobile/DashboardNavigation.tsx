import React, { ReactElement, lazy, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from '../../components/Organisams/Navbar/Navbar'

const Home = lazy(() => import('./home/Home'))

export default function DashboardNavigationMobile(): ReactElement {
	useEffect(() => {}, [])

	return (
		<Navbar>
			<Switch>
				<Route path="/" component={Home} />
			</Switch>
		</Navbar>
	)
}
