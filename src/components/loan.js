import React, { Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import * as Style from '../Styles/loan';

import { Alert } from '../store/utils/helpers';
import { requestLoan } from '../store/action/axiosActions/loan';

export const Loan = () => {
	// React Hooks
  const history = useHistory();
	const initialState = { password: '', bvn: '', amount: 0 };
	const [requestData, setRequestData] = useState(initialState);
	
	// Redux Hooks
	const dispatch = useDispatch();

	const handleOnChange = event => setRequestData({ ...requestData, [event.target.name]: event.target.value });

	const handleRequestLoan = () => {
		if (requestData.amount < 1) {
			return Alert.error('Invalid Amount');
		}
		dispatch(requestLoan(requestData, history));
	}

	return (
		<Fragment>
			<Style.BannerWrapper>
				<Style.banner></Style.banner>
			</Style.BannerWrapper>
			<Style.FormContainer>
				<Style.formWrapper>
					<Style.Heading>To get a Loan kindly Fill the Form Below</Style.Heading>
						<Style.Form>
							<Style.Div className="form-group">
								<Style.label htmlFor="email">Enter BVN</Style.label>
								<Style.Input type="text" name="bvn" className="form-control" placeholder="BVN Number" onChange={handleOnChange} />
							</Style.Div>
							<Style.Div className="form-group">
								<Style.label htmlFor="password">Enter Password</Style.label>
								<Style.Input type="password" name="password" className="form-control" placeholder="Password" onChange={handleOnChange} />
							</Style.Div>
							<Style.Div className="form-group">
								<Style.label htmlFor="country">Enter Amount</Style.label>
								<Style.Input type="number" name="amount" className="form-control" placeholder="2000000000" onChange={handleOnChange} />
							</Style.Div>
							<Style.Button type="button" onClick={handleRequestLoan}>Submit Request</Style.Button>
						</Style.Form>
				</Style.formWrapper>
			</Style.FormContainer>
		</Fragment>
	);
};
