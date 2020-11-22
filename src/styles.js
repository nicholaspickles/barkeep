import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

//HEADERS
export const HeaderLogo = styled(NavLink)`
    position: absolute;
    left:3%;
    color: black;
`

export const TopRightIcons = styled.div`
    color:rgb(146, 146, 146);
    position: absolute;
    right: 7%;
    top: 0;
`

//FOOTERS
export const FootHeader = styled.div`
    color:rgb(230, 220, 220);
    font-size:15px;
    font-family:"Muli";
`

export const FootText = styled.div`
    color:rgb(230, 220, 220);
    font-size: 12px;
    font-family: 'Muli';
    font-weight: 100;
    margin-top: 5px;
    margin:4px;
    padding:0;
`

export const FootTextBold = styled.div`
    font-weight:bold;
    margin-bottom: 10px;
`

export const FootInfo = styled.div`
    bottom:0;
    z-index:2;
`

export const Flower1 = styled.img`
    position:absolute;
    float:left;
    left:0;
    bottom:0;
    height:200px;
    width:200px;
    maxWidth: 300px;
    minWidth: 200px;
    z-index:1;
`

export const Flower2 = styled.img`
    position:absolute;
    right:0;
    bottom:0;
    height:200px;
    width:200px;
    maxWidth: 300px;
    minWidth: 200px;
    overflowX: hidden;
    z-index:1;
`
