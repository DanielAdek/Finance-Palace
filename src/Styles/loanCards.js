import Style from 'styled-components';

export const cardContainer = Style.div`
  display:flex;

  @media (max-width: 48rem){
    margin-top: 0px;
  }

  @media (max-width: 32rem){
    display: block;
  }

`;
export const cards = Style.div`
  flex: 1;
  color: blue;
  height: 100px;
  border-right: 0.2px solid #778191;
  display: flex;

  @media (max-width: 60rem) {
    width: 25%;
    height: 100px;
  }

  @media (max-width: 32rem) {
    display: block;
    height: auto;
    text-align: center;
    width: 100%;
    border-bottom: 0.2px solid #778191;
  }

`;

export const Diviver = Style.div``;

export const LoanRate = Style.h1`
  margin-top: 20px;
  color: #778191;

  @media (max-width: 48rem){
    font-size: 20px;
  }

  @media (max-width: 32rem) {
    margin-top: 5px;
    font-size: 30px;
  }
`;
export const RateTitle = Style.small`
  color: #778191;
  font-size: 16px;

  @media (max-width: 48rem) {
    font-size: 17px;
  }

`;
export const FontAwesome = Style.i`
  font-size: 48px;
  color: #17a2b8;
  padding: 25px 40px 10px 30px;

  @media (max-width: 48rem) {
    font-size: 30px;
    width: 30%;
  }

  @media (max-width: 32rem) {
    padding-top: 5px;
  }
`;
