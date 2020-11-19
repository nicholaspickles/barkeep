<<<<<<< HEAD
import Styled from 'styled-components';
=======
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Layout } from 'antd';
const {Footer} = Layout;

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
>>>>>>> tmp
