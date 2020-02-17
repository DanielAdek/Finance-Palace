import Style from 'styled-components';
import img from '../assests/images/walletCard.png';

export const Wrapper = Style.div``;

export const Container = Style.div`
  display: grid;
  grid-template-columns: 60% 38%;
  width: 80%;
  margin: auto;
`;

export const Form = Style.form`
  height: 400px;
  max-height: 700px;
  width: 98%;
  display: flex;
  flex-direction: column;
`;

export const Label = Style.label`
  font-size: 12px;
  font-family: Rubik sans-sefif;
  margin-bottom: 10px;
`;

export const Input = Style.input`
  background: #cccccc5b;
  padding: 10px;
  width: 80%;
  border: none;
  margin-bottom: 50px;
  color: coral;
`;

export const Button = Style.button`
  width: 80%;
  height: 48px;
  background-color: rgb(76, 126, 255);
  border-radius: 4px;
  color: rgb(255, 255, 255);
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  cursor: pointer;
`;

export const PageInfoCont = Style.div`
  background: #00e7602d;
  width: 80%;
  padding: 20px;
  margin: 20px auto;
`;

export const PageInfo = Style.div`
  font-size: 12px;
  color: #333;
`;

export const Title = Style.div`
  margin: 10px 0 30px 0;
  font-size: 2rem;
  color: #4C7EFF;
`;

export const Select = {
  background: '#F9F9F9',
  border: '1px solid rgba(130, 154, 177, 0.2)',
  boxSizing: 'border-box',
  borderRadius: '4px',
  width: '80%',
  height: '48px',
  paddingLeft: '16px',
  color: '#243B53',
  marginBottom: '50px'
}

export const Account = Style.div``;

export const Card = Style.div`
  background: url(${img}) no-repeat;
  width: 100%;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CardHeaders = Style.div`
  font-weight: 500;
  line-height: 14px;
  font-size: 11.5px;
  font-family: "Open Sans";
  color: rgb(255, 255, 255);
  margin-left: 24px;
  margin-bottom: 10px;
`;

export const CardBankName = Style.div`
  font-weight: 600;
  font-size: 15px;
  font-family: "Open Sans";
  color: rgb(255, 255, 255);
  margin-left: 24px;
`;

export const CardWalletBalance = Style.div`
  font-weight: 600;
  line-height: 33px;
  font-size: 17px;
  font-family: "Open Sans";
  color: rgb(255, 255, 255);
  margin-left: 24px;
  margin-bottom: 20px;
`;

export const Exit = Style.div`
  width: 40%;
  background-color: #fff;
  border: 1px solid coral;
  border-radius: 4px;
  color: coral;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  cursor: pointer;
  text-align: center;
  margin-top: 30px;
  padding: 12px;

  &:hover {
    background-color: coral;
    color: #fff;
  }
`;