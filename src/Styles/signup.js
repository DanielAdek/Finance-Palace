import Style from 'styled-components';

export const signupContainer = Style.div`
  display: flex;
`;

export const SignupLeft = Style.div`
  flex:1;
  background: url("https://myupdatesystems.com/wp-content/uploads/2018/03/addiction-professional-networking-events-behavioral-health-network-resources.jpg");
  background-size: cover;
  background-position: left 40%;
  background-repeat: no-repeat;
  height: 100vh;

  @media(max-width: 60rem) {
    display: none;
  }
`;

export const Div = Style.div`
  margin-top: 20px;
  margin-left: 10px;
  color: blue;
  text-decoration: underline;
`;

export const Signupright = Style.div`
  flex: 1;
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
  border: none;
  position: relative;

  @media(max-width: 48rem) {
    width: 100%;
    margin: 0;
  }
`;
export const formRow = Style.div``;
export const formGroup = Style.div``;

export const Form = Style.form`
  margin: 1px auto;
  width: 80%;
 
  @media(max-width: 48rem) {
    width: 90%;
  }
`;
export const SiteLogo = Style.div``;

export const SignupBotton = Style.button`
  padding: 20px;
  width: 96%;
  background: #62B0E8;
  color: #fff;

  &:focus {
    outline: none;
  }
  @media(max-width: 48rem) {
    width: 100%;
  }
`;
export const SignupHeadText = Style.div`
  font-size: 20px;
  color: #49393b;
  line-height: 22px;
  margin-top: 100px;
  margin-bottom: 30px;
  font-family: CircularStd,Helvetica,sans-serif;
  text-align:center;

  @media(max-width: 48rem) {
    font-size: 16px;
  }
`;
export const SignupLeftImage = Style.img``;
