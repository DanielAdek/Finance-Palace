import Style from 'styled-components';

export const signupContainer = Style.div`
  display: flex;
`;

export const SignupLeft = Style.div`
  flex:1;
  background-image: url("https://myupdatesystems.com/wp-content/uploads/2018/03/addiction-professional-networking-events-behavioral-health-network-resources.jpg");
  background-size: cover;
  background-position: left 40%;
  background-repeat: no-repeat;
  height: 100vh;

  @media(max-width: 60rem) {
    display: none;
  }
`;
export const Signupright = Style.div`
  flex: 1;
`;

export const SignupRightContainer = Style.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Div = Style.div`
  text-align: center;
  font-size: 20px;
  font-weight: bolder;
`;

export const SignupHeadText = Style.div`
  font-size: 20px;
  color: #49393b;
  text-align: center;
  line-height: 22px;
  font-family: CircularStd, Helvetica, sans-serif;
  text-decoration: none;

  @media(max-width: 32rem) {
    font-size: 16px;
  }
`;
export const FormInput = Style.input`
  background: #fff;
  border: 1px solid #9a9a9a;
  border-radius: 4px;
  padding: 30px 4%;
  margin: 13px 0;
  font-size: 16px;
  line-height: 22px;
  color: #3e4c59;
  width: 90%;
  position: relative;
  border: none;

  @media(max-width: 32rem) {
    width: 100%;
    margin: 0;
  }
`;
export const formRow = Style.div``;

export const formGroup = Style.div``;

export const Form = Style.form`
  margin: 1px auto;
  width: 80%;

  @media(max-width: 32rem) {
    width: 90%;
  }
 
`;
export const SiteLogo = Style.div``;

export const SignupBotton = Style.button`
  padding: 20px;
  width: 90.5%;
  background: #62B0E8;
  color: #fff;
  font-weigth: bold;
  &:focus {
    outline: none;
  }
  @media(max-width: 32rem) {
    width: 100%;
  }
`;
export const Para = Style.p`
  margin-left:190px;
  font-size:16px;
`;

export const SignupLeftImage = Style.img``;

export const ChangePage = Style.div`
  display: flex;
  justify-content: space-between;
  width: 95%;

  @media(max-width: 32rem) {
    font-size: 12px;
    width: 100%;
  }
`;

export const ForgetPassword = Style.div`
  text-decoration: none;
  color: #62B0E8;
  font-weight: bolder;
  margin-top: 30px;
`;

export const PTag = Style.p`
  text-align: left;
  padding-right: 30px;
  text-decoration: underline;
  color: blue;
  margin-top: 30px;

  @media(max-width: 32rem) {
    padding-right: 0px;
  }
`;