import Style from 'styled-components';

export const AboutUscontainer = Style.div`
  height:auto;
  width:100%;
  font-family: Poppins sans-serif;
`;

export const Cover = Style.div`
  background :${props => props.background};
  margin:${props => props.margin};
  text-align:${props => props.align};
  width:${props => props.width};
`;

export const aboutusWrapper = Style.div``;

export const wrapper = Style.div`
  width:80%;
  margin: 0px auto;
`;

export const banner = Style.div`
  background:url("https://homenets.ng/wp-content/uploads/2018/02/contactus-banner.jpg");
  height: 450px;
  width: 100%;
  background-repeat: no-repeat;
  background-size: 100% 100%;

  @media (max-width: 32rem) {
    height: 225px;
    background-size: 100% 90%;
  }

`;

export const section1 = Style.div`
  position: relative;
  top: -40px;
  height: auto;
  background: #fff;
  display: flex;

  @media (max-width: 32rem) {
    flex-direction: column;
    top: 0;
  }

`;
export const Textheader = Style.h2`
  text-align: ${props => props.align};
  color: #3c4d68;
  padding-top: ${props => props.paddingTop};
  padding-bottom: ${props => props.paddingBottom};

  @media (max-width: 48rem){
    font-size: 25px;
    text-align: center;
  }
`;

export const Para = Style.p`
  padding-top: 10px;
  text-align: ${props => props.align};
  padding-Bottom: ${props => props.paddingBottom};

  @media (max-width: 32rem){
    font-size: .9rem;
    font-family: Rubik Poppins sans-serif;
  }
`;

export const Text = Style.div`
  width:50%;
  padding-right: 40px
  padding-left: 40px;
  @media (max-width: 32rem){
    width: 100%;
    margin-bottom: 30px;
  }
`;
export const Span = Style.span`
  font-size: 21px;

  @media (max-width: 32rem){
    font-size: 1rem;
  }

`;
