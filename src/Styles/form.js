import Style from 'styled-components';

export const Input = Style.input`
padding:${props => props.padding};
width:${props => props.width};
border:${props => props.border};
@media(max-width :450px){
  width:100%;
  padding-bottom:10px;
}
`;

export const Button = Style.button`
width:${props => props.width};
background: ${props => props.background};
color: ${props => props.color};
font-weight: ${props => props.fontWeight};
padding:${props => props.padding};
text-align:${props => props.align};
border:${props => props.border};
height:${props => props.height};
font-size:${props => props.size};
margin-bottom =:${props => props.marginbottom};
@media(max-width:450px){
  width:100%;
  font-size:17px;
  margin-top:10px;
  
}
`;
export const Form = Style.form`
width:${props => props.width};
  @media(max-width:450px){
    display:block;
    width:100%;
    marigin-top:20px;
  }
`;

export const label = Style.label``;
