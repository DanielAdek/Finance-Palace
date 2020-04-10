import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom'
import * as AP from '../Styles/applicationprocess';
import { data, ApplicationInfo } from '../data/data';

export const Applicationprocess = () => {
	// React Hooks
	const history = useHistory();

	const connectAboutPage = () => history.push('/about-us');

	return (
		<Fragment>
			<AP.ApplicationContainer height="auto" margin="1px auto" width="100%" background="azure" paddingTop="20px">
				<AP.ApplicationWrapper>
					<AP.ApplicationHeader>Fast and easy Application Process</AP.ApplicationHeader>
					<AP.Para marginTop="10px" textALign="center">
						Suspendisse aliquet varius nunc atcibus lacus sit amet coed portaeri sque mami luctus viveed
						congue lobortis faucibus.
					</AP.Para>
				</AP.ApplicationWrapper>
				<AP.CardsWrapper display="flex" margin="1px auto" width="80%">
					{ApplicationInfo.flatMap(res => (
						<AP.Card
							marginLeft="20px"
							border="1px solid #e3f0fe"
							height="auto"
							background="white"
							textAlign="center"
							padding="10px"
						>
							<AP.Circle>{res.number}</AP.Circle>
							<AP.Header marginTop="10px" textAlign="center">
								{res.title}
							</AP.Header>
							<AP.Para>{res.text}</AP.Para>
						</AP.Card>
					))}
				</AP.CardsWrapper>

				<AP.Button onClick={connectAboutPage}>Know Who We Are</AP.Button>
			</AP.ApplicationContainer>

			<AP.ApplicationContainer background="#f5f7f9">
				<AP.CardsWrapper height="auto" width="86%" margin="60px auto">
					<AP.Header paddingTop="10px" textALign="center" color="#3c4d6b">
						{' '}
						Why People Choose Us
					</AP.Header>
					<AP.Para textALign="center" marginTop="30px" color="#3c6d6b">
						Suspendisse aliquet varius nunc atcibus lacus sit amet coed portaeri sque mami luctus viveed
						congue lobortis faucibus.
					</AP.Para>
					<AP.CardContainer>
						{data.map(data => (
							<AP.Card
								background="#fff"
								marginLeft="9px">
								<AP.Img className={data.img} aria-hidden="true" />
								<AP.Header textALign="center" color="#3c4d6b;" margin="0px 0px 20px 0px">
									{data.header}
								</AP.Header>
								<AP.Para textALign="center" padding="20px" color="#3c4d6b">
									{data.text}
								</AP.Para>
								<AP.LinkWrapper>
									<AP.Link onClick={connectAboutPage}>{data.link}</AP.Link>
								</AP.LinkWrapper>
							</AP.Card>
						))}
					</AP.CardContainer>
				</AP.CardsWrapper>
			</AP.ApplicationContainer>

			<AP.ApplicationContainer background="#15549a">
				<AP.CardsWrapper height="auto" width="86%" marginBottom="40px" mb="0" margin="1px auto">
					<AP.Header paddingTop="30px" textALign="center" margin="0px" color="#ffffff" size="30px">
						{' '}
						Some of our Awesome Testimonials
					</AP.Header>
					<AP.Para textALign="center" marginTop="10px" color="#87c0ff">
						You won’t be the only one lorem ipsu mauris diam mattises.
					</AP.Para>

					<AP.CardContainer>
						{data.map(data => (
							<>
								<Fragment>
									<AP.Card
										width="340px"
										background="#fff"
										height="auto"
										fontFamily="Merriweather,serif;"
										marginBottom="40px"
										marginLeft="10px"
									>
										<AP.Para
											textALign="center"
											padding="20px"
											color="#414855"
											Style="italic"
											lineHignt="35px"
										>
											{data.text}
										</AP.Para>
									</AP.Card>
								</Fragment>
							</>
						))}
					</AP.CardContainer>
				</AP.CardsWrapper>
			</AP.ApplicationContainer>
		</Fragment>
	);
};
