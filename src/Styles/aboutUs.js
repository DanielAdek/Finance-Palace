import Style from 'styled-components';
export const AboutUscontainer = Style.div`
  height:auto;
  width:100%;
  font-family;Poppins, sans-serif;
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
  margin:0px auto;
`;

export const banner = Style.div`
  background:url("https://homenets.ng/wp-content/uploads/2018/02/contactus-banner.jpg");
  height:450px;
  width:100%;
  background-repeat:no-repeat;
  background-size:100% 100%;
`;

export const section1 = Style.div`
  position:relative;
  top:-40px;
  height:auto;
  background:#fff;
  display:flex;
  @media  only screen and (max-width:450px){
    flex-direction:column;
  }
`;
export const Textheader = Style.h2`
  text-align:${props => props.align};
  color:#3c4d68;
  padding-top:${props => props.paddingTop};
  padding-bottom:${props => props.paddingBottom};
  @media  only screen and (max-width:450px){
    padding:20px;
    font-size:25px;
  }
`;

export const Para = Style.p`
  padding-top:50px;
  text-align:${props => props.align};
  padding-Bottom:${props => props.paddingBottom};
`;

export const Text = Style.div`
  width:50%;
  padding-right:40px
  padding-left:50px;
  @media  only screen and (max-width:450px){
  width:100%;
  }
`;
export const Span = Style.span`
  font-size:21px;
`;
