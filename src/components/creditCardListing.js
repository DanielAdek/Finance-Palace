import React from 'react';
import { Link } from 'react-router-dom';
import { BorrowCard } from '../components/borrowCard';
import * as BC from '../Styles/borrowcard';
import * as CD from '../Styles/creditCardListing';
import { Navigation } from '../components/Nav';
import { Footer } from '../components/footer';

export const CreditCardListing = () => {
	return (
		<CD.Container>
			<CD.wrapper mediaDispaly="block">
				<Navigation />
				<CD.Banner></CD.Banner>
				<CD.CardContainer>
					<CD.cardWrapper>
						{/* <CD.Div display="flex" justifyContent="space-around" mediaDispaly="block"> */}
						<CD.Card>
							{' '}
							<CD.Div display="flex" justifyContent="space-around" marginTop="30px">
								<BC.BorrowWrapper background="#20c997" color="#fff">
									<Link to="/card-single">
										{' '}
										<BorrowCard cardtype={'Money Back'} />
									</Link>
								</BC.BorrowWrapper>
							</CD.Div>
							<CD.content>
								<CD.contentHeader>
									<Link to="/card-single">Borrow Money Card</Link>
								</CD.contentHeader>
								<CD.UL>
									<CD.LI>2 Reward Points for every $150 spends.</CD.LI>
									<CD.LI>Redeem Reward points as CashBack on your Credit Card</CD.LI>
									<CD.LI>Zero fuel surcharge</CD.LI>
								</CD.UL>

								<CD.Div
									display="flex"
									marginBottom="30px"
									mediaMarginLeft="0px"
									marginLeft="20px"
									marginRight="20px"
								>
									<CD.BtnAction>
										<CD.Div
											width="150px"
											height="60px"
											background="#f51f8a;"
											marginTop="30px"
											color="white"
											fontWeight="600"
											paddingTop="15px"
											textAlign="center"
											flex="1"
										>
											How to Apply{' '}
										</CD.Div>
									</CD.BtnAction>

									<CD.Div flex="1" marginTop="40px" marginRight="30px" mediaMarginRight="0px">
										Read more
									</CD.Div>
								</CD.Div>
							</CD.content>
						</CD.Card>
						{/* second card */}
						<CD.Card>
							{' '}
							<CD.Div display="flex" justifyContent="space-around" marginTop="30px">
								<BC.BorrowWrapper background="purple" color="#fff">
									<BorrowCard cardtype={'Demo previledge'} />
								</BC.BorrowWrapper>
							</CD.Div>
							<CD.content>
								<CD.contentHeader>DemoPrivilege Card</CD.contentHeader>
								<CD.UL>
									<CD.LI>Welcome Benefit of up to 10,000 Bonus</CD.LI>
									<CD.LI>Earn 6 for every $150 spent</CD.LI>
									<CD.LI>Dedicated Check-in with baggage and take benefits</CD.LI>
								</CD.UL>

								<CD.Div
									display="flex"
									marginBottom="30px"
									mediaMarginLeft="0px"
									marginLeft="20px"
									marginRight="20px"
								>
									<CD.BtnAction>
										<CD.Div
											width="150px"
											height="60px"
											background="#f51f8a;"
											marginTop="30px"
											color="white"
											fontWeight="600"
											paddingTop="15px"
											textAlign="center"
											flex="1"
										>
											How to Apply{' '}
										</CD.Div>
									</CD.BtnAction>

									<CD.Div flex="1" marginTop="40px" marginRight="30px" mediaMarginRight="0px">
										Read more
									</CD.Div>
								</CD.Div>
							</CD.content>
						</CD.Card>

						{/* third card */}
						<CD.Card>
							{' '}
							<CD.Div display="flex" justifyContent="space-around" marginTop="30px">
								<BC.BorrowWrapper background="black" color="#fff">
									<BorrowCard cardtype={'Borrow platinum'} />
								</BC.BorrowWrapper>
							</CD.Div>
							<CD.content>
								<CD.contentHeader>Borrow Platanium</CD.contentHeader>
								<CD.UL>
									<CD.LI>25% off on movies and up to 20% off on dining</CD.LI>
									<CD.LI>Bouquet of discount vouchers as welcome gift</CD.LI>
									<CD.LI>3 Reward Points oan Rs. 150 spent.</CD.LI>
								</CD.UL>

								<CD.Div
									display="flex"
									marginBottom="30px"
									mediaMarginLeft="0px"
									marginLeft="20px"
									marginRight="20px"
								>
									<CD.BtnAction>
										<CD.Div
											width="150px"
											height="60px"
											background="#f51f8a;"
											marginTop="30px"
											color="white"
											fontWeight="600"
											paddingTop="15px"
											textAlign="center"
											flex="1"
										>
											How to Apply{' '}
										</CD.Div>
									</CD.BtnAction>

									<CD.Div flex="1" marginTop="40px" marginRight="30px" mediaMarginRight="0px">
										Read more
									</CD.Div>
								</CD.Div>
							</CD.content>
						</CD.Card>
						{/* </CD.Div> */}
						{/* second section */}

						{/* first card */}
						{/* <CD.Div display="flex" justifyContent="space-around" mediaDispaly="block"> */}
						<CD.Card>
							{' '}
							<CD.Div display="flex" justifyContent="space-around" marginTop="30px">
								<BC.BorrowWrapper background="#343a40" color="#fff">
									<BorrowCard cardtype={'DInners Black'} />
								</BC.BorrowWrapper>
							</CD.Div>
							<CD.content>
								<CD.contentHeader>Borrow Dinner</CD.contentHeader>
								<CD.UL>
									<CD.LI>2 Reward Points for every $150 spends.</CD.LI>
									<CD.LI>Redeem Reward points as CashBack on your Credit Card</CD.LI>
									<CD.LI>Zero fuel surcharge</CD.LI>
								</CD.UL>

								<CD.Div
									display="flex"
									marginBottom="30px"
									marginLeft="20px"
									mediaMarginLeft="0px"
									marginRight="20px"
								>
									<CD.BtnAction>
										<CD.Div
											width="150px"
											height="60px"
											background="#f51f8a;"
											marginTop="30px"
											color="white"
											fontWeight="600"
											paddingTop="15px"
											textAlign="center"
											flex="1"
										>
											How to Apply{' '}
										</CD.Div>
									</CD.BtnAction>

									<CD.Div flex="1" marginTop="40px" marginRight="30px" mediaMarginRight="0px">
										Read more
									</CD.Div>
								</CD.Div>
							</CD.content>
						</CD.Card>

						{/* second card */}
						<CD.Card>
							{' '}
							<CD.Div display="flex" justifyContent="space-around" marginTop="30px">
								<BC.BorrowWrapper background="#6610f2" color="#fff">
									<BorrowCard cardtype={'Plus premium'} />
								</BC.BorrowWrapper>
							</CD.Div>
							<CD.content>
								<CD.contentHeader>Plus Platinum</CD.contentHeader>
								<CD.UL>
									<CD.LI>25% off on movies and up to 20% off on dining</CD.LI>
									<CD.LI>Bouquet of discount vouchers as welcome gift</CD.LI>
									<CD.LI>3 Reward Points oan Rs. 150 spent.</CD.LI>
								</CD.UL>

								<CD.Div
									display="flex"
									marginBottom="30px"
									marginLeft="20px"
									marginRight="20px"
									mediaMarginLeft="0px"
								>
									<CD.BtnAction>
										<CD.Div
											width="150px"
											height="60px"
											background="#f51f8a;"
											marginTop="30px"
											color="white"
											fontWeight="600"
											paddingTop="15px"
											textAlign="center"
											flex="1"
										>
											How to Apply{' '}
										</CD.Div>
									</CD.BtnAction>

									<CD.Div flex="1" marginTop="40px" marginRight="30px" mediaMarginRight="0px">
										Read more
									</CD.Div>
								</CD.Div>
							</CD.content>
						</CD.Card>

						{/* third card */}
						<CD.Card>
							{' '}
							<CD.Div display="flex" justifyContent="space-around" marginTop="30px">
								<BC.BorrowWrapper background="#ffecb3" color="#fff">
									<BorrowCard cardtype={'Borrow corporate'} />
								</BC.BorrowWrapper>
							</CD.Div>
							<CD.content>
								<CD.contentHeader>Borrow Corporate</CD.contentHeader>
								<CD.UL>
									<CD.LI>Welcome Corporate Benefit of up to 40,000 Bonus</CD.LI>
									<CD.LI>Earn 6 for every $1500 spent</CD.LI>
									<CD.LI>Corporate Benfits to all your needs for business.</CD.LI>
								</CD.UL>

								<CD.Div
									display="flex"
									marginBottom="30px"
									marginLeft="20px"
									marginRight="20px"
									mediaMarginLeft="0px"
									// mediaMarginRight="0px"
								>
									<CD.BtnAction>
										<CD.Div
											width="150px"
											height="60px"
											background="#f51f8a;"
											marginTop="30px"
											color="white"
											fontWeight="600"
											paddingTop="15px"
											textAlign="center"
											flex="1"
										>
											How to Apply{' '}
										</CD.Div>
									</CD.BtnAction>

									<CD.Div flex="1" marginTop="40px" marginRight="30px" mediaMarginRight="0px">
										Read more
									</CD.Div>
								</CD.Div>
							</CD.content>
						</CD.Card>
						{/* </CD.Div> */}
					</CD.cardWrapper>
				</CD.CardContainer>

				<CD.Div>
					<Footer />
				</CD.Div>
			</CD.wrapper>
		</CD.Container>
	);
};
