import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import * as NC from '../Styles/Nav';
import { TopNav } from '../components/TopNav';

export const Navigation = () => {
	// React Hooks
	const history = useHistory();

	const token = localStorage.getItem('x-auth-t');

	const handleLogout = () => {
		localStorage.clear();
		history.push('/');
		window.location.reload();
	}

	return (
		<Fragment>
			<TopNav />
			<NC.NavContainer>
				<NC.Container>
					<Navbar style={{ marginLeft: '8.5rem', paddingLeft: '0'}} collapseOnSelect expand="lg" bg="dark" variant="dark">
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav className="mr-auto">
								<Nav.Link>
									<Link to="/"> Home</Link>
								</Nav.Link>
								<Nav.Link>
									<Link to="/loan"> Loan</Link>
								</Nav.Link>
								{token ? 
								<Nav.Link>
									<Link to="/dashboard">Account</Link>
								</Nav.Link> :
								<Nav.Link>
									<Link to="/login">Login</Link>
								</Nav.Link>}
								<Nav.Link>
									<Link to="/about-us"> About us</Link>
								</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Navbar>
				</NC.Container>
				{ token && <NC.LogoutCont onClick={handleLogout}>
						<NC.LogoutTitle>Logout</NC.LogoutTitle>
					</NC.LogoutCont> }
			</NC.NavContainer>
		</Fragment>
	);
};
