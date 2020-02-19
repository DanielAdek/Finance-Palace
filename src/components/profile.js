import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as Style from '../Styles/myProfile';
import { retrieveUserData, updateUserProfile } from '../store/action/axiosActions/auth';

export const UserProfile = () => {
	// React Hooks
  const [profileData, setProfileData] = useState({});
  const [toggle, setToggle] = useState(false);

	// Redux Hooks
	const dispatch = useDispatch();
	const user = useSelector(state => state.Authenticate.user);

	const token = localStorage.getItem('x-auth-t');

	useEffect(() => {
		if (!user && token) {
      dispatch(retrieveUserData());
    }
	}, [dispatch, token, user]);

	useEffect(() => {
		setProfileData(user && user);
	}, [user]);
	
	const handleOnChange = event => setProfileData({...profileData, [event.target.name]: event.target.value });

	const handleToggle = () => setToggle(!toggle);

	const handleUpdate = () => dispatch(updateUserProfile(profileData));

	return (
		<Style.container>
			<Style.sectionWrapper>
				<Style.PageTitle>Profile</Style.PageTitle>
			</Style.sectionWrapper>
			<Style.wrapper>
				<Style.FormContainer>
						{user ?
						<Style.Heading>
							Update my Profile
						</Style.Heading> :
						<Style.Heading>
							No Account To Update
						</Style.Heading>
						 }
							{ profileData && <Style.Form>
								<Style.FormRow className="form-row">
									<Style.Div className="form-group col-md-6">
										<Style.label htmlFor="firstName">First Name</Style.label>
										<Style.Input name="firstName" value={profileData.firstName} type="text" className="form-control" onChange={handleOnChange} placeholder="First Name" />
									</Style.Div>
									<Style.Div className="form-group col-md-6">
										<Style.label htmlFor="lastName">Last Name</Style.label>
										<Style.Input name="lastName" value={profileData.lastName} type="text" className="form-control" onChange={handleOnChange} placeholder="First Name" />
									</Style.Div>
									<Style.Div className="form-group col-md-6">
										<Style.label htmlFor="username">Username</Style.label>
										<Style.Input name="username" value={profileData.username} type="text" className="form-control" onChange={handleOnChange} placeholder="Last Name" />
									</Style.Div>
									<Style.Div className="form-group col-md-6">
										<Style.label htmlFor="email">Email</Style.label>
										<Style.Input name="email" value={profileData.email} type="text" className="form-control" onChange={handleOnChange} placeholder="Email" />
									</Style.Div>
									<Style.Div className="form-group col-md-6">
										<Style.label htmlFor="phoneNumber">Phone Number</Style.label>
										<Style.Input name="phoneNumber" value={profileData.phoneNumber} type="text" className="form-control" onChange={handleOnChange} placeholder="Phone" />
									</Style.Div>
									<Style.Div className="form-group col-md-6">
										<Style.label for="country">Country of Residence</Style.label>
										<Style.Input name="country" value={profileData.country} type="text" className="form-control" onChange={handleOnChange} placeholder="Country" />
									</Style.Div>
									<Style.Div className="form-group col-md-6">
										<Style.label htmlFor="City">City of Residence</Style.label>
										<Style.Input name="city" value={profileData.city} type="text" className="form-control" onChange={handleOnChange} placeholder="City" />
									</Style.Div>
									<Style.Div className="form-group col-md-6">
										<Style.label htmlFor="State">State of Residence</Style.label>
										<Style.Input name="state" value={profileData.state} type="text" className="form-control" onChange={handleOnChange} placeholder="State" />
									</Style.Div>
								</Style.FormRow>
								<Style.formGroup className="form-row">
									<Style.Div className="form-group col-md-12">
										<Style.label htmlFor="address">Address</Style.label>
										<Style.Input name="address" value={profileData.address} type="text" className="form-control" onChange={handleOnChange} placeholder=" Office Address" />
									</Style.Div>
								</Style.formGroup>
								<Style.ChangePasswordText onClick={handleToggle}>Change Password</Style.ChangePasswordText>
								{ toggle &&
								<Style.FormRow className="form-row">
									<Style.Div className="form-group col-md-6">
										<Style.label htmFor="passord">Old Password</Style.label>
										<Style.Input name="oldpassword" type="password" className="form-control" onChange={handleOnChange} placeholder="*******" />
									</Style.Div>
									<Style.Div className="form-group col-md-6">
										<Style.label htmlFor="password">New Password</Style.label>
										<Style.Input name="passowrd" type="password" className="form-control" onChange={handleOnChange} placeholder="*******" />
									</Style.Div>
								</Style.FormRow>}
								<Style.Button button="button" onClick={handleUpdate}>update profile</Style.Button>
							</Style.Form> }
				</Style.FormContainer>
			</Style.wrapper>
		</Style.container>
	);
};
