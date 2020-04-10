import Style from 'styled-components';

export const NavContainer = Style.div`
  display: flex;
  background: #343a40;

  @media(max-width: 32rem){
    display:block;
  }
`;

export const Container = Style.div`
  width: 80%;
  margin-left: 8.5rem;
  padding: 0;

  @media(max-width: 32rem){
    padding-top:0px;
    margin-left: 1.5rem;
  }
`;

export const LogoutCont = Style.div`
  position: absolute;
  top: 25px;
  right: 20px;

  @media(max-width: 48rem){
    position: static;
    top: 0;
    right: 0;
    margin-top: 10px;
  }
`;

export const LogoutTitle = Style.div`
  color: rgba(255,255,255,.5);
  cursor: pointer;
`;
