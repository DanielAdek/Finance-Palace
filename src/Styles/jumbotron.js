import Style from 'styled-components';

export const JumbotronSection = Style.div`
  width: 100%;
  z-index:-1;
`;

export const JumbotronContainter = Style.div``;

export const JumbotronSliderIndicator = Style.ol``;

export const JumbotronSliderLine = Style.li``;

export const JumbtronSliderContainer = Style.div;

export const clear = Style.div`
  display: flex;
  flex-direction: column;
`;

export const MyPic = Style.img`
  width: 95%;
`;

export const AboutMe = Style.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 10px;
  font-weight: bold;
`;

export const MyName = Style.div`
  font-family: Rubik;
  font-size: 1.2rem;
`;

export const MyProfession = Style.div`
  font-family: -webkit-pictograph;
`;

export const JumbotronImageCont = Style.div`
  @media(max-width: 60rem) {
    height: 325px;
  }
  @media(max-width: 32rem) {
    height: 175px;
  }
`;

export const JumbtronImageCover = Style.div``;

export const JumbotronImage = Style.img`
  width: 100%;
  height: 400px;

  @media(max-width: 48rem) {
    height: 100%;
  }
`;

export const JumbotronButton = Style.a`
  @media(max-width: 48rem) {
    height: 100%;
  }
`;

export const JumbotronBtnSpan = Style.span``;
