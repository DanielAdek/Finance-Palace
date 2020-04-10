import React, { Fragment } from 'react';
import * as CL from '../Styles/loan';
import * as UP from '../Styles/updateProfile';

import * as FM from '../Styles/form';

export const UpdateProfile = () => {
	return (
		<Fragment>
			<UP.Container>
				<CL.formWrapper>
					{/* <CL.Div align="center" marginBottom="40px" size="1.5rem" color="#15549a">
						Update my Profile
					</CL.Div> */}
					<CL.Div background="#f8f9fa" padding="10px">
						<FM.Form>
							<CL.FormRow className="form-row">
								<CL.Div className="form-group col-md-6">
									<FM.label for="email">first Name</FM.label>
									<FM.Input type="text" className="form-control" placeholder="First Name" />
								</CL.Div>
								<CL.Div className="form-group col-md-6">
									<FM.label for="email">Last Name</FM.label>
									<FM.Input type="text" className="form-control" placeholder="Last Name" />
								</CL.Div>
								<CL.Div className="form-group col-md-6">
									<FM.label for="email">Maiden Name</FM.label>
									<FM.Input type="text" className="form-control" placeholder="Maiden Name" />
								</CL.Div>
								<CL.Div className="form-group col-md-6">
									<FM.label for="email">BVN</FM.label>
									<FM.Input type="text" className="form-control" placeholder="BVN Number" />
								</CL.Div>
								<CL.Div className="form-group col-md-6">
									<FM.label for="email">Email</FM.label>
									<FM.Input type="text" className="form-control" placeholder="Email" />
								</CL.Div>
								<CL.Div className="form-group col-md-6">
									<FM.label for="password">Password</FM.label>
									<FM.Input type="text" className="form-control" placeholder="Password" />
								</CL.Div>
								<CL.Div className="form-group col-md-6">
									<FM.label for="City">City</FM.label>
									<FM.Input type="text" className="form-control" placeholder="City" />
								</CL.Div>

								<CL.Div className="form-group col-md-6">
									<FM.label for="State">State</FM.label>
									<FM.Input type="text" className="form-control" placeholder="State" />
								</CL.Div>
								<CL.Div className="form-group col-md-6">
									<FM.label for="country">country</FM.label>
									<FM.Input type="text" className="form-control" placeholder="Country" />
								</CL.Div>
								<CL.Div className="form-group col-md-6">
									<FM.label for="country">Date of Birth</FM.label>
									<FM.Input type="date" className="form-control" placeholder="Country" />
								</CL.Div>
								{/* <CL.Div className="form-group col-md-6">
									<FM.label for="Loan">Loan Type</FM.label>

									<select id="inputState" class="form-control">
										<option selected>Choose...</option>
										<option>Credit Card.</option>
										<option>Cash</option>
									</select>
								</CL.Div> */}
								{/* <CL.Div className="form-group col-md-12">
									<FM.label for="Amount">Amount</FM.label>
									<InputRanges value={value} setValue={setValue} />
								</CL.Div> */}
							</CL.FormRow>
							<CL.formGroup className="form-group">
								<CL.Div className="form-group col-md-12">
									<FM.label for="address"> Office Address</FM.label>
									<FM.Input type="text" className="form-control" placeholder=" Office Address" />
								</CL.Div>
							</CL.formGroup>
							<CL.formGroup className="form-group">
								<CL.Div className="form-group col-md-12">
									<FM.label for="address"> Home Address</FM.label>
									<FM.Input type="text" className="form-control" placeholder=" Office Address" />
								</CL.Div>
							</CL.formGroup>
							<CL.formGroup className="form-group">
								<CL.Div className="form-group col-md-12"></CL.Div>
							</CL.formGroup>

							<FM.Button
								width="50%"
								fontWeight="500"
								background="#15549a"
								color="white"
								padding="13px"
								align="center"
								size="20px"
								border="none"
							>
								Update Profile
							</FM.Button>
						</FM.Form>
					</CL.Div>
				</CL.formWrapper>
			</UP.Container>
		</Fragment>
	);
};
