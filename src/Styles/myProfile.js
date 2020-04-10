import Style from 'styled-components';

export const sectionWrapper = Style.div`
  background: #DCEEFB80;
  width: 80%;
  margin: 0 auto;
  margin-top: 50px;
  padding-top: 30px;
  border-radius: 4px solid #DCEEFB80;

  @media(max-width: 32rem){
    width: 100%;
    margin-top: 1px;
   }
`;

export const Heading = Style.div`
  text-align: center;
  margin-bottom: 20px;
  font-size: 1.5rem;
  color: #15549a;
  padding-top: 30px;
`;

export const wrapper = Style.div`
  width: 80%;
  margin: auto;

  @media(max-width: 32rem){
    width: 100%;
   }
`;

export const FormContainer = Style.div`
  background: #fff;
`;

export const formGroup = Style.div``;

export const formWrapper = Style.div``;

export const container = Style.div``;

export const FormRow = Style.div``;

export const Form = Style.div`
  width: 90%;
  margin: 1px auto;
  margin-top: 70px;
  background: #f8f9fa;
  padding: 20px;

  @media(max-width: 32rem){
    margin-top: 10px;
    width: 90%;
  }
`;

export const Div = Style.div``;

export const label = Style.label``;

export const Input = Style.input`
  background: #fff;
  border: 1px solid #9a9a9a;
  border-radius: 4px;
  padding: 30px 4%;
  margin: 13px 0;
  font-size: 16px;
  line-height: 22px;
  color: #3e4c59;
  border: none;
  color: #62B0E8;

  @media(max-width: 32rem){
    width: 100%;
   }
`;

export const PageTitle = Style.div`
  color: #62B0E8;
  font-size: 2rem;
  padding-bottom: 20px;
  margin: 0 0 0 25px;

  @media(max-width: 32rem){
    width: 100%;
   }
`;

export const ChangePasswordText = Style.h4`
  color: #62B0E8;
  font-size: 1rem;
  cursor: pointer;
  margin: 20px 0;
`;

export const Button = Style.button`
  width: 45%;
  font-weight: 500;
  background: #15549a;
  color: #fff;
  font-size: 20px;
  border: none;
  text-align: center;
  padding: 13px;
  margin-top: 20px;

  @media(max-width: 32rem){
    width: 100%;
    font-size: 17px;
    margin-top: 10px;
  }
`;