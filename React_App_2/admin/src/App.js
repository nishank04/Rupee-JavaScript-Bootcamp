import React, { Component } from 'react';
import rootRoutes from './components/admin/rootRoutes';
// import Auth from './components/auth';
// import NoMatch from './components/nomatch';
import { Routes, Route, BrowserRouter, Redirect } from 'react-router-dom';
// import PrivateRoute from './components/auth/PrivateRoute';
// import { getCookie } from './function';
// import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";
export default class App extends Component {
	render() {
		return (
			<div className="App">
				<BrowserRouter>
				{/* <NotificationContainer /> */}
					<Routes>
						<Route path='/admin' component={rootRoutes} />
						{/* <Route component={NoMatch} /> */}
					</Routes>
				</BrowserRouter>
			</div>
		);
	}
}

