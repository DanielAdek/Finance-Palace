import React from 'react';
// import * as DIV from '../Styles/borrowcard';
import * as ABT from '../Styles/aboutUs';

export const About = () => {
	return (
		<ABT.AboutUscontainer>
			<ABT.aboutusWrapper>
				<ABT.banner></ABT.banner>
				<ABT.wrapper>
					<ABT.section1>
						<ABT.Text>
							<ABT.Textheader paddingTop="20px" paddingBottom="20px">
								Who We Are?
							</ABT.Textheader>
							<ABT.Span>
								Insight loan advisors and credit card is completely independent loan advising service
								and our directory of lenders gives you all the information lorem ipsums sitamets.
							</ABT.Span>
							<ABT.Para>
								Vestibulum condimentum neque at interdum dignissim. Integer colutpat vel lorem ac
								fringilla. Vestibulum porttitor euismod udiam viverra euismod non hendrerit eros.
							</ABT.Para>
						</ABT.Text>

						<ABT.Text>
							<ABT.Textheader paddingTop="20px" paddingBottom="20px">
								What We Offer?
							</ABT.Textheader>
							<ABT.Span>
								{' '}
								Our loan sanction and credit card is one of the quicke with eas documentation and
								doorstep lorem ipsum serviceullam dolor sitisi.
							</ABT.Span>
							<ABT.Para>
								Nullam tincidunt ligula purus, eget aliquet urna maximus id. lorem nisi vel sapien
								sollicitudin rutrum.Quisque sed felis metus Intocus pellentesque nisi eu mollis.
							</ABT.Para>
						</ABT.Text>
					</ABT.section1>

					<ABT.Cover background="#fff" margin="0">
						<ABT.Textheader align="center" paddingTop="40px">
							Our Vision & Mission
						</ABT.Textheader>
						<ABT.Cover width="70%" margin="1px auto">
							<ABT.Para align="center" paddingBottom="40px">
								Our goal at Insight Loan Advisors is to provide access to personal loans and credit
								cards, car loan, at insight competitive interest are timely manner. <br /> lorem ipsums deconse
								resonescon.
							</ABT.Para>
						</ABT.Cover>
					</ABT.Cover>
				</ABT.wrapper>
			</ABT.aboutusWrapper>
		</ABT.AboutUscontainer>
	);
};
