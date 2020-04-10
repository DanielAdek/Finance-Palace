import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as Loading from './spinner';
import { handleOnBoard } from '../store/action/axiosActions/auth';

import * as SA from '../Styles/signup';


export const SignupAuthentication = () => {
	// React Hooks
	const history = useHistory();
	const initialState = { firstName: "", lastName: "", dob: "", username: "", email: "", password: "" }
	const [userData, setUserDate] = useState(initialState);

	// Redux Hooks
	const dispatch = useDispatch();
	const processing = useSelector(state => state.Loading.loading);

	const handleChange = e => setUserDate({ ...userData, [e.target.name]: e.target.value });

	const handleSubmit = () => dispatch(handleOnBoard(userData, history));

	return (
		<SA.signupContainer>
			<SA.SignupLeft>
				<SA.SiteLogo></SA.SiteLogo>
			</SA.SignupLeft>
			<SA.Signupright>
				<SA.Div>
					<Link to="/">{'< To Home'}</Link>
				</SA.Div>
				<SA.SignupHeadText>
					Already have an account? <Link to="/login">Signin </Link>
				</SA.SignupHeadText>
				<SA.Form>
					<SA.formRow className="form-row">
						<SA.formGroup className="form-group col-md-6">
							<SA.FormInput
								type="text"
								name="firstName"
								placeholder="first Name"
								className="form-control"
								onChange={handleChange}
							/>
						</SA.formGroup>
						<SA.formGroup className="form-group col-md-6">
							<SA.FormInput
								type="text"
								name="lastName"
								placeholder="Last Name"
								className="form-control"
								onChange={handleChange}
							/>
						</SA.formGroup>
						<SA.formGroup className="form-group col-md-6">
							<SA.FormInput
								type="text"
								name="username"
								placeholder="Username"
								className="form-control"
								onChange={handleChange}
							/>
						</SA.formGroup>
						<SA.formGroup className="form-group col-md-6">
							<SA.FormInput type="email" onChange={handleChange} name="email" placeholder="Email" className="form-control" />
						</SA.formGroup>
						<SA.formGroup className="form-group col-md-6">
							<SA.FormInput type="password" onChange={handleChange} name="password" placeholder="Password" className="form-control" />
						</SA.formGroup>
						<SA.formGroup className="form-group col-md-6">
							<SA.FormInput type="date" onChange={handleChange} name="dob" max={"2002-01-01"} placeholder="Date of birth" className="form-control" />
						</SA.formGroup>
						<SA.SignupBotton type="button" onClick={handleSubmit}>
						{processing ? <Loading.RingLoad /> : 'Sign up' }
						</SA.SignupBotton>
					</SA.formRow>
				</SA.Form>
			</SA.Signupright>
		</SA.signupContainer>
	);
};
