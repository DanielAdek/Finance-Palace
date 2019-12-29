import Style from 'styled-components';

export const ApplicationContainer = Style.div`
height:${props => props.height};
margin: ${props => props.margin};
width:${props => props.width};
background: ${props => props.background};

`;

export const Header = Style.h3`
margin-top:${props => props.marginTop};
text-align:${props => props.textALign};
padding-top:${props => props.paddingTop};
color:${props => props.color};
margin:${props => props.margin};
font-size:${props => props.size}
`;

export const Para = Style.p`
color:${props => props.color};
margin-top:${props => props.marginTop};
text-align:${props => props.textALign};
padding:${props => props.padding};
font-style :${props => props.Style};
line-height :${props => props.lineHignt};
font-weight:${props => props.fontWeight};
font-size:${props => props.fontSize};
`;

export const wrapper = Style.div`
display:${props => props.display};
margin: ${props => props.margin};
width:${props => props.width};
height:${props => props.height};
background:${props => props.background};
margin-bottom:${props => props.marginBottom};

`;
export const ApplicationHeader = Style.h1`
text-align:center;
margin-top:100px;
`;
export const ApllicationPara = Style.div``;
export const ApplicationWrapper = Style.div`
    margin:1px auto;
    width:100%;
    height:200px;
`;

export const Circle = Style.div`
    background-color: #e3f0fe;
    width: 70px;
    height: 70px;
    border: 1px solid #15549a;
    border-radius: 100px;
    color: #15549a;
    padding: 10px;
    text-align: center;
    line-height: 1.7;
    position: relative;
    top: -15%;
    left: 38%;
    font-weight:500;
    font-size:25px
`;
export const Button = Style.button`
text-align:center;
background:#f51f8A;
padding:20px;
width:15%;
color:#fff;
font-weight:700;
border:none;
margin: 6% 0px 6% 43%;

`;
export const LinkWrapper = Style.div`
width:100%;
display:flex;
justify-content:center;
margin-bottom:30px;
`;

export const Link = Style.div`
marign:1px auto;
width:45%;
border:1px solid #dee4ee;
padding:15px;
text-align:center;
color:#9aa9c3;
font-weight:700;
text-transform:capitalize;
`;
export const imageWrapper = Style.div`
display:flex;
justify-content:space-between;
margin-right:140px;
color:white;
margnin-bottom:150px;
`;

export const img = Style.img`
width: 88px;
height: 88px;
}
`;
