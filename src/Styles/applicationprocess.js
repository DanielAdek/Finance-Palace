import Style from 'styled-components';

export const ApplicationContainer = Style.div`
  height:${props => props.height};
  margin: ${props => props.margin};
  width:${props => props.width};
  background: ${props => props.background};
  padding-top:${props => props.paddingTop};
  margin-top:${props => props.marginTop};
  margin-bottom: 100px;

  @media (max-width: 32rem) {
    margin-bottom: 0;
  }
`;

export const Header = Style.h3`
  margin-top: ${props => props.marginTop};
  text-align: ${props => props.textALign};
  padding-top: ${props => props.paddingTop};
  color: ${props => props.color};
  margin: ${props => props.margin};
  font-size: ${props => props.size}

  @media (max-width: 60rem) {
    font-size: 1rem;
  }

  @media (max-width: 32rem) {
    font-size: 1.6rem;
  }
`;

export const Card = Style.div`
  width: 100%;
  height: ${props => props.height};
  border: ${props => props.border};
  margin-left: ${props => props.marginLeft};
  box-shadow: ${props => props.boxShadow};
  display:${props => props.display};
  background:${props => props.background};
  margin:${props => props.margin};
  flex: ${props => props.flex};
  font-family:${props => props.fontFamily};
  margin-bottom:${props => props.marginBottom};
  text-align:${props => props.textAlign};
  padding:${props => props.padding};

  @media(max-width: 60rem){
    margin-left: 0;
    border: 1px solid #e3f0fe;
  }

  @media(max-width: 32rem) {
    box-shadow: none;
    margin-top: 15px;
  }
`;

export const CardContainer = Style.div`
  display: flex;
  margin: 10px auto;
  width: 94%;
  justify-content: space-between;
  padding-bottom: 12px;

  @media(max-width: 60rem){
    width: 100%;
  }

  @media(max-width: 32rem){
    display:block;
    margin-top:15px;
  }
`;

export const Para = Style.p`
  color:${props => props.color};
  margin-top: ${props => props.marginTop};
  text-align:${props => props.textALign};
  padding:${props => props.padding};
  font-style :${props => props.Style};
  line-height :${props => props.lineHignt};
  font-weight:${props => props.fontWeight};
  font-size:${props => props.fontSize};

  @media (max-width: 60rem) {
    max-width: 80%;
    margin: auto;
    margin-top: ${props => props.marginTop};
  }
`;

export const CardsWrapper = Style.div`
  display: ${props => props.display};
  margin: ${props => props.margin};
  width: ${props => props.width};
  height: ${props => props.height};
  background: ${props => props.background};
  margin-bottom: ${props => props.marginBottom};

  @media(max-width: 60rem){
    width: 94%;
  }

  @media(max-width: 32rem){
    display:block;
    width: 90%;
    box-shadow: none;
    margin-bottom:${props => props.mb};
  }
`;

export const ApplicationHeader = Style.h1`
  text-align: center;
  margin-top: 50px;

  @media (max-width: 48rem) {
    font-size: 1.7rem;
    max-width: 90%;
    margin: auto;
    margin-top: 50px;
  }
`;
export const ApllicationPara = Style.div``;

export const ApplicationWrapper = Style.div`
  margin:1px auto;
  width:100%;
  height:160px;

  @media(max-width: 48rem){
    margin-bottom: 50px;
  }
  
`;

export const Circle = Style.div`
  background-color: #e3f0fe;
  width: 70px;
  height: 70px;
  border: 1px solid #15549a;
  border-radius: 100px;
  color: #15549a;
  padding: 10px;
  text-align: center;
  line-height: 1.7;
  position: relative;
  top: -15%;
  left: 38%;
  font-weight:500;
  font-size:25px;

  @media (max-width: 32rem) {
    top: -15px;
  }
`;
export const Button = Style.button`
  text-align:center;
  background:#f51f8A;
  padding:20px;
  width:15%;
  color:#fff;
  font-weight:700;
  border:none;
  margin: 3% 0px 3% 43%;

  @media(max-width:450px) {
    width:50%;
    margin: 3% 0px 3% 27%;
  }
  @media(max-width:800px) {
    width:50%;
    margin: 3% 0px 3% 24%;
  }

`;
export const LinkWrapper = Style.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Link = Style.div`
  marign: 1px auto;
  width: 45%;
  border: 1px solid #dee4ee;
  padding: 10px;
  text-align: center;
  color: #9aa9c3;
  font-weight: 400;
  text-transform: capitalize;
  cursor: pointer;

  @media(max-width: 60rem){
    width: 70%;
  }

  @media(max-width: 32rem){
    width: 50%;
  }
`;
export const imageWrapper = Style.div`
  display: flex;
  justify-content: space-between;
  margin-right: 140px;
  color: white;
  margnin-bottom: 150px;
`;

export const img = Style.img`
  width: 88px;
  height: 88px;
`;

export const Img = Style.i`
  font-size:48px;
  position:relative;
  left:190px;
  margin-bottom:30px;
  padding-top:30px;
  color:#17a2b8;

  @media (max-width: 48rem){
    left: 8.5rem;
  }
`;