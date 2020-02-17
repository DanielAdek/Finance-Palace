import React, { Fragment } from 'react';
import { PayForm } from '../components/payloan';
import { TopNav } from '../components/TopNav';

export const PayLoan = () => {
	return (
		<Fragment>
			<TopNav />
			<PayForm />
		</Fragment>
	);
};
