import React, { Fragment } from 'react';
import { Dashboard } from '../components/dashBoard';
// import { Navigation } from '../components/Nav';
// import { Footer } from '../components/footer';
import { TopNav } from '../components/TopNav';

export const Dashboards = () => {
	return (
		<Fragment>
			<TopNav />
			<Dashboard />
		</Fragment>
	);
};
