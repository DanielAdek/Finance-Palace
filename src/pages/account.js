import React, { Fragment } from 'react';
import { UserProfile } from '../components/profile';
import { TopNav } from '../components/TopNav';

export const AccountDashboard = () => {
	return (
		<Fragment>
			<TopNav />
			<UserProfile />
		</Fragment>
	);
};
