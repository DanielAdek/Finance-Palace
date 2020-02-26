import Style from 'styled-components';

export const AccountContainer = Style.div`
  width:100%;
`;

export const Wrapper = Style.div`
  flex:${props => props.flex};
  display:${props => props.display};
  justify-content:${props => props.justifyContent};
  padding-top:${props => props.paddingTop};
  padding:${props => props.padding};

  @media only screen and (max-width:800px){
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
  }

  @media only screen and (max-width:540px){
    display:${props => props.mediaDisplay};
    flex-direction:${props => props.mediaflexdirection};
    align-items:${props => props.mediaAlignItems};
  }

`;


export const sectionWrapper = Style.div`
  background: #DCEEFB80;
  width: 80%;
  margin: 0 auto;
  margin-top: 50px;
  padding-top: 30px;
  border-radius: 4px solid #DCEEFB80;
`;


export const PageTitle = Style.div`
  color: #62B0E8;
  font-size: 2rem;
  padding-bottom: 20px;
  margin: 0 0 0 25px;
`;

export const Cover = Style.div`
  background: #fff;
  height: auto;
  width: 80%;
  margin: 0 auto;
`;


export const Card = Style.div`
  width:30%;
  @media only screen and (max-width:800px){
    width:46%;
  }

  @media only screen and (max-width:540px){
    width:90%;
  }
`;

export const TabNavPanel = Style.div`
  background-color: #343a40;
  padding-top: 10px;
`;

export const Header = Style.h2`
  text-align:center;
  text-transform:capitalize;
`;

export const StatisticalCard = Style.div`
  background: ${props => props.bg};
  font-size: 20px;
  font-family: Rubik sans-serif;
  border: none;
  padding: 20px;
  font-weight: 900;
  border-radius: 8px;
  width: 90%;
  text-align: center;
  box-shadow: 2px 2px 2px 2px ${props => props.bg};
`;

export const StatCardHeading = Style.div``;

export const StatCardInfo = Style.div`
  color: ${props => props.color};
`;