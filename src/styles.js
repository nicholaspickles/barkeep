import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Button, Card } from 'antd';

//GLOBAL 
export const GeneralWrapper = styled.div`
    margin-top: 5%;
`
export const GeneralHeader = styled.h1`
    text-align: center;
`
export const GeneralBody = styled.p`
    margin-left: 12%;
    margin-right:12%;
    font-size:15px;
`

//LANDING
export const LandingButton = styled(Button)`
    border-radius: 10px;
    height: 50px;
    width: auto;
    background-color: #9992E0;

    &:hover{
        height:55px;
        background-color: #BECAFF;
        color:black;
        transition:0.8s;
    }
`


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

//ABOUT
export const StyledImage = styled.img`
    display: block;
    height:100%;
    margin-left:auto;
    margin-right:auto;
    margin-bottom:auto;
`
export const CarouselWrapper = styled.div`
    height: 500px;
    overflow:hidden;
    display:flex;
    align-items:center;
    justify-content:center;
`
export const Carouselh3 = styled.h3`
    height: 500px;
    color: black;
    background-color:white;
    margin-right:10%;
    margin-left:10%;
    line-height: 160px;
    text-align: center;
`

//PRODUCTS

export const AddToCart = styled(Button)`
    background-color: #707F9C;
    margin-top : 4px;
    transition: all 0.5s;
    &:hover {
        background-color:#42C7F5;
        transform:scale(1.1);
    }
`
//INSTRUCTIONS
export const InstructionCard = styled(Card)`
    height: 120%;
    margin-left: 5%;
    border-radius: 20px;
`

//CART
export const MiniImg = styled.img`
    height: 50px;
    width:auto;
`