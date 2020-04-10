import React, { Fragment } from 'react';
import { Navigation } from '../components/Nav';
import { LoanCards } from '../components/loandCards';
// import { Slider } from '../components/carousel';

import { Applicationprocess } from '../components/applicationProcess';
// import * as NC from '../Styles/Nav';
import { Jumbotron } from '../components/jumbotron';

import { Footer } from '../components/footer';
export const Landing = () => {
	return (
		<Fragment>
			<Navigation />
			<Jumbotron />
			<LoanCards />
			{/* <Slider /> */}
			<Applicationprocess />

			<Footer />
		</Fragment>
	);
};
