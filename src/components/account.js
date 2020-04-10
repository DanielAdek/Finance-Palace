import React, { Fragment, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import * as Acct from '../Styles/account';

import { ToNairaFormat } from '../helpers'
import { retreiveUserAccount, revealBvn, unRevealBvn, createAccount, updateAccount } from '../store/action/axiosActions/account';

export const UserAccount = () => {
	// React Hooks
  const history = useHistory();
  const [openReqPass, setOpenReqPass] = useState(false);
	const [password, setPassword] = useState({ password: '' });
	
	// Redux Hooks
	const dispatch = useDispatch();
	const userAccount = useSelector(state => state.Account.accounts);
	const bvn = useSelector(state => state.Account.bvn);
	
	useEffect(() => {
		if (!userAccount) {
      dispatch(retreiveUserAccount());
    }
	}, [dispatch, userAccount]);

	const handleUpdateBalance = data => dispatch(updateAccount({ bankId: data._id, balance: 1000000 }));

	const handleRequestPassword = () => setOpenReqPass(true);

	const handleOnChange = event => setPassword({...password, [event.target.name]: event.target.value });

	const handleRequestAccount = () => {
		setOpenReqPass(false);
		dispatch(createAccount(password, history));
	}

	const handleBVNToggle = () =>  {
		if (bvn) {
			dispatch(unRevealBvn());
		} else dispatch(revealBvn())
	}

	const Marchants = userAccount && userAccount.banks.map((data, index) => (
		<Acct.ListMarchants key={index}>
			<Acct.Header>Marchant</Acct.Header>
			<Acct.Marchant>{data.bankName}</Acct.Marchant>
			<Acct.Header>Balance</Acct.Header>
			<Acct.Balance>{ToNairaFormat(data.balance)}</Acct.Balance>
			<Acct.UpdateBal onClick={() => handleUpdateBalance(data)}>Add More Money</Acct.UpdateBal>
		</Acct.ListMarchants>
	))

	return (
		<Fragment>
			<Acct.sectionWrapper>
				<Acct.PageTitle>My Account Details</Acct.PageTitle>
			</Acct.sectionWrapper>
			<Acct.wrapper width="80%" margin="0px auto">
				<Acct.Grid3Col>
					<Acct.Grid1 increase={openReqPass}>
						<Acct.Header>Account</Acct.Header>
						<Acct.Account>{!userAccount ?
							<Acct.CreateBtn onClick={handleRequestPassword}>Generate Account</Acct.CreateBtn> : 
							`${userAccount && moment(userAccount.createdAt).format('LL')}`}
							{ openReqPass && 
							<Acct.SimpleForm>
								<Acct.InputPassword placeholder="*********" name="password" type="password" onChange={handleOnChange} />
								<Acct.GenerateBtn onClick={handleRequestAccount}>Generate</Acct.GenerateBtn>
							</Acct.SimpleForm> }
						</Acct.Account>
					</Acct.Grid1>
					<Acct.Grid2>
						{userAccount ?
						<Acct.Container>
							<Acct.Contain>
								<Acct.Label>BVN: </Acct.Label>
								<Acct.Bvn>{bvn ? bvn : '**************'}</Acct.Bvn>
								<Acct.RevelBtn onClick={handleBVNToggle}>{!bvn ? 'Reveal BVN' : 'Hide BVN'}</Acct.RevelBtn>
							</Acct.Contain>
							<Acct.Contain>
								<Acct.Label>First Name: </Acct.Label>
								<Acct.Username>{userAccount && userAccount.customerId.firstName}</Acct.Username>
							</Acct.Contain>
							<Acct.Contain>
								<Acct.Label>Last Name: </Acct.Label>
								<Acct.Username>{userAccount && userAccount.customerId.lastName}</Acct.Username>
							</Acct.Contain>
							<Acct.Contain>
								<Acct.Label>Username: </Acct.Label>
								<Acct.Username>{userAccount && userAccount.customerId.username}</Acct.Username>
							</Acct.Contain>
							<Acct.Contain>
								<Acct.Label>Email: </Acct.Label>
								<Acct.Email>{userAccount && userAccount.customerId.email}</Acct.Email>
							</Acct.Contain>
							<Acct.Contain>
								<Acct.Label>Phone Number: </Acct.Label>
								<Acct.PhoneNumber>{userAccount && userAccount.customerId.phoneNumber}</Acct.PhoneNumber>
							</Acct.Contain>
							<Acct.Contain>
								<Acct.Label>Address: </Acct.Label>
								<Acct.Address>{userAccount && userAccount.customerId.address}</Acct.Address>
							</Acct.Contain>
						</Acct.Container> : 
						<Acct.Container>
							<Acct.NoAccount h="400px">No Account Created</Acct.NoAccount>
						</Acct.Container>}
					</Acct.Grid2>
					{ userAccount ?
					<Acct.Grid3 h="auto">
						{Marchants}
					</Acct.Grid3> : 
					<Acct.Grid3 h="200px">
						<Acct.NoAccount h="200px">No Marchant</Acct.NoAccount>
					</Acct.Grid3>}
				</Acct.Grid3Col>
			</Acct.wrapper>
		</Fragment>
	);
};
