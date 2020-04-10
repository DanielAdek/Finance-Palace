import Style from 'styled-components';

export const Div = Style.div``;

export const wrapper = Style.div`
  width:${props => props.width};
  margin:${props => props.margin};

  @media(max-width: 32rem){
    width: 100%;
   }
`;

export const Grid3Col = Style.div`
  display: grid;
  grid-template-columns: 20% 49% 30%;
  grid-gap: 6px;
  margin-top: 3px;

  @media(max-width: 32rem){
    display: flex;
    flex-direction: column;
    width: 100%;
   }
`;

export const Grid1 = Style.div`
  background: #fff;
  padding: 20px;
  max-height: ${ props => props.increase ? '200px' : '100px'};

  @media(max-width: 32rem){
    background: #F2C94C;
    color: #fff;
    font-weight: bold;
   }
`;

export const SimpleForm = Style.form`
  margin-top: 15px;
`;

export const InputPassword = Style.input`
  width: 100%;
  background: #DCEEFB80;
  border: none;
  padding: 15px;
  color: #ccc;
`;

export const GenerateBtn = Style.button`
  width: 100%;
  border: none;
  background: #62B0E8;
  padding: 10px;
  margin-top: 10px;
  color: #fff;
`;

export const Account = Style.div`
  font-size: 1rem;
  font-weight: 400;
  font-family: Rubik sans-serif;
  color: #62B0E8;
`;

export const CreateBtn = Style.div`
  color: #62B0E8;
  font-size: 12px;
  cursor: pointer;
  margin-top: 10px;
`;

export const Grid2 = Style.div`
  background: #fff;
  min-height: 500px;

  @media(max-width: 32rem){
    margin-bottom: 4px;
   }
`;

export const NoAccount = Style.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: whitesmoke;
  height: ${props => props.h}
  background: #fff;
`;

export const Container = Style.div`
  padding: 20px;
`;

export const Contain = Style.div`
  display: grid;
  grid-template-columns: 28% 52% 15%;
  grid-gap: 10px;
  margin: 35px 0;
`;

export const Label = Style.div`
  font-size: 1rem;
  font-weight: 400px;
  margin-right: 20px;
  font-family: Rubik Open Sans sans-serif;

  @media(max-width: 32rem) {
    margin: 0;
   }
`;

export const Bvn = Style.div`
  font-size: 1rem;
  font-weiht: 400px;
  color: #62B0E8;
  font-family: Rubik Open Sans sans-serif;
`;

export const RevelBtn = Style.div`
  color: #62B0E8;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

export const Username = Style.div`
  font-size: 1rem;
  font-weiht: 400px;
  font-family: Rubik Open Sans sans-serif;
`;

export const Address = Style.div`
  font-size: 1rem;
  font-weiht: 400px;
  font-family: Rubik Open Sans sans-serif;
`;

export const Email = Style.div`
  font-size: 1rem;
  font-weiht: 400px;
  font-family: Rubik Open Sans sans-serif;
`;

export const PhoneNumber = Style.div`
  font-size: 1rem;
  font-weiht: 400px;
  font-family: Rubik Open Sans sans-serif;
`;

export const Grid3 = Style.div`
  height: ${props => props.h}
`;

export const ListMarchants = Style.div`
  padding: 30px 24px;
  background: #fff;
  margin-bottom: 4px;
  
  &:hover {
    box-shadow: 2px 2px 6px 2px #ccc;
  }

  @media(max-width: 32rem){
    background: #15549A;
    color: #fff;
   }
`;

export const Header = Style.div`
  font-weight: 500;
  line-height: 14px;
  font-family: Open Sans;
  margin-bottom: 5px;
`;


export const Marchant = Style.div`
  font-weight: 500;
  line-height: 33px;
  font-size: 16px;
  font-family: Open Sans;
  margin-bottom: 20px;
`;

export const Balance = Style.div`
  font-weight: 600;
  line-height: 33px;
  font-size: 17px;
  font-family: Open Sans;
`;

export const UpdateBal = Style.button`
  border: none;
  background: none;
  color: blue;
  text-decoration: underline;
  margin: 17px 0 0 0;
  padding: 0;
  cursor: pointer;
  color: #62B0E8;
`;

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


export const PageTitle = Style.div`
  color: #62B0E8;
  font-size: 2rem;
  padding-bottom: 20px;
  margin: 0 0 0 25px;

  @media(max-width: 32rem){
    width: 100%;
    padding-left: 25px;
    margin: 0;
   }
`;