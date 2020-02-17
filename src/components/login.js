import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { handleAuthenticate } from '../store/action/axiosActions/auth';
import * as SI from '../Styles/login';

export const LoginAuthentication = () => {
	// React Hooks
	const history = useHistory();
	const [loginData, setLoginData] = useState({ dataField: '', password: '' });

	// Redux Hooks
	const dispatch = useDispatch();

	// actions
	const handleChange = e => setLoginData({ ...loginData, [e.target.name]: e.target.value });

	const handleSubmit = () => dispatch(handleAuthenticate(loginData, history));

	return (
		<SI.signupContainer>
			<SI.SignupLeft>
				<SI.SiteLogo></SI.SiteLogo>
			</SI.SignupLeft>

			<SI.Signupright>
				<SI.PTag>
					<Link to="/">Home</Link>
				</SI.PTag>

				<SI.SignupRightContainer>
					<SI.Div>Welcome Back!</SI.Div>

					<SI.SignupHeadText>
						Don't have an account? <Link to="/signup">Sign Up </Link>
					</SI.SignupHeadText>
					<SI.Form>
						<SI.formRow className="form-row">
							<SI.formGroup className="form-group col-md-12">
								<SI.FormInput
									type="text"
									name="dataField"
									placeholder="Email or Phone Number"
									className="form-control"
									onChange={handleChange}
								></SI.FormInput>
							</SI.formGroup>

							<SI.formGroup className="form-group col-md-12">
								<SI.FormInput
									type="password"
									name="password"
									placeholder="Password"
									className="form-control"
									onChange={handleChange}
								></SI.FormInput>
							</SI.formGroup>
						</SI.formRow>
						<SI.SignupBotton type="button" onClick={handleSubmit}>Login</SI.SignupBotton>
					</SI.Form>
					<SI.ForgetPassword>
						<Link to="/forgetpassword">Forget Password</Link>
					</SI.ForgetPassword>
				</SI.SignupRightContainer>
			</SI.Signupright>
		</SI.signupContainer>
	);
};
