import React, { Fragment } from 'react';
import { Loan } from '../components/loan';

// import { TopNav } from '../components/TopNav';
import { Navigation } from '../components/Nav';
import { Footer } from '../components/footer';

export const CashLoan = () => {
	return (
		<Fragment>
			<Navigation />
			<Loan />
			<Footer />
		</Fragment>
	);
};
