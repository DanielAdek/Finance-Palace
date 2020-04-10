import Style from 'styled-components';

export const FormContainer = Style.div`
  width:80%;
  margin:0px auto;
  padding-top:30px;
  background:#fff;
  height:auto;
  margin-top:30px;
  margin-bottom:60px;

  @media (max-width: 48rem) {
    width: 100%;
    padding-top: 0;
    margin: 0;
  }

`;
export const formWrapper = Style.div`
  padding: 20px;
`;

export const Form = Style.form`
  width: 70%;
  margin: 1px auto 70px;
  background: #f8f9fa;
  padding: 40px;

  @media (max-width: 48rem) {
    width: 80%;
    font-size: 1.7rem;
    padding: 20px;
  }

  @media (max-width: 32rem) {
    width: 100%;
    font-size: 1rem;
  }
`;

export const Heading = Style.div`
  text-align: center;
  margin-bottom: 40px;
  font-size: 1.5rem;
  color: #15549a;
`;

export const Div = Style.div``;

export const FormRow = Style.div``;

export const formGroup = Style.div``;

export const BannerWrapper = Style.div``;

export const banner = Style.div`
  background: url("https://www.doughroller.net/wp-content/uploads/2019/05/apps-that-loan-you-money-now-payday-loan-alternatives-648x364-c-default.jpg");
  height:450px;
  width:100%;
  background-repeat:no-repeat;
  background-size:cover;
  background-position: center;

  @media (max-width: 32rem) {
    height: 200px;
  }
`;

export const label = Style.label`
  color: #999;
`;

export const Input = Style.input`
  padding: 20px;
  border: none;
`;

export const Button = Style.button`
  width: 45%;
  font-weight: 500;
  background: #15549a;
  color: #fff;
  padding: 13px;
  text-align: center;
  border: none;
  margin-top: 30px;

  @media (max-width: 32rem) {
    width: 100%;
  }
`;