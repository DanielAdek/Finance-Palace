import Style from 'styled-components';

export const TopNav = Style.div`
  background: #15549A;
  height: 50px;
  color: #83BCFA;
  width: 100%;
`;
export const NavContainer = Style.div`
  display: flex;
  width: 80%;
  margin: 0px auto;

  @media(max-width: 48rem) {
    width: 87%;
  }
`;

export const WelcomeText = Style.p`
  padding-top: 15px;
`;

export const para = Style.div`
  width: 100%;
`;

export const Span = Style.span`
  flex: 1;
  margin-left: 30px;
`;

export const Container = Style.div`
  text-align: right;
  padding: 15px 0px 0px 0px;
  width: 100%;
`;
