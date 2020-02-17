import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Landing } from './pages/landing';
import { Signup } from './pages/Signup';
import { creditCardListingPage } from './pages/creditCardListing';
import { Login } from './pages/login';
import { SinglePageCard } from './pages/singleCard';
import { CashLoan } from './pages/loan';
import { AboutUs } from './pages/aboutUs';
import { Dashboards } from './pages/dashboard';
import { AccountDashboard } from './pages/account';
import { PayLoan } from './pages/payLoan'

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Landing} />
				<Route path="/signup" component={Signup} />
				<Route path="/credit-card" component={creditCardListingPage} />
				<Route path="/login" component={Login} />
				<Route path="/card-single" component={SinglePageCard} />
				<Route path="/loan" component={CashLoan} />
				<Route path="/about-us" component={AboutUs} />
				<Route path="/dashboard" component={Dashboards} />
				<Route path="/account" component={AccountDashboard} />
				<Route path="/payLoan" component={PayLoan} />
			</Switch>
		</Router>
	);
}

export default App;
