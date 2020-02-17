import Style from 'styled-components';

export const NavContainer = Style.div`
  display: flex;
  background: #343a40 !important;
  @media(max-width:450px){
    display:block;
  }
`;

export const Container = Style.div`
  width: 80%;
  @media(max-width:450px){
    padding-top:0px;
  }
`;

export const LogoutCont = Style.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

export const LogoutTitle = Style.div`
  font-size: 12px;
  font-family: Rubik;
  color: #fff;
  cursor: pointer;
`;

export const Opacity = Style.div`
  background: #15549A;
  height: 400px;
  z-index: 10;
  opacity:.0.5;
  position: relative;
`;
