import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import * as TP from '../Styles/Topnav';
import { retrieveUserData } from '../store/action/axiosActions/auth';

export const TopNav = () => {
	// Redux Hooks
	const dispatch = useDispatch();
	const user = useSelector(state => state.Authenticate.user);

	useEffect(() => {
		if (!user) {
      dispatch(retrieveUserData());
    }
	}, [dispatch, user]);

	return (
		<TP.TopNav>
			<TP.NavContainer>
				<TP.para>
					<TP.WelcomeText Display="none">
						<Link to="/">Finance Palace</Link>
					</TP.WelcomeText>
				</TP.para>
				{user ? <TP.Container>
					<TP.Span>{user.username}</TP.Span>
				</TP.Container> :
				<TP.Container>
					<TP.Span>
						<Link to="/signup">Signup</Link>
					</TP.Span>
					<TP.Span>
						<Link to="/login">Login</Link>
					</TP.Span>
				</TP.Container> }
			</TP.NavContainer>
		</TP.TopNav>
	);
};
