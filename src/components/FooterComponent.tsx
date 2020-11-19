import React from 'react';

//AESTHETICS imports
import { Layout, Row, Col } from 'antd';
import { InstagramOutlined, GithubOutlined, SmileOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import cutflower1 from '../images/cutflower1.png';
import cutflower2 from '../images/cutflower2.png';

const {Footer} = Layout;

const Queries = () => {
    return (
        <div>
            <div>
                <h4 className='footHeader'>S A Y &nbsp; H I !</h4>
            </div>
            <div className='footerText'>
                <p>Got any questions,enquires or ideas?<br/>Feel free to get in touch with us!</p>
                <div className='footerTextBold' style={{marginBottom:10}}>
                    <p style={{marginTop:20}}>nicholaskongsg@gmail.com</p>
                    <p>+65 9855 6745</p>
                </div>
            </div>
        </div>
    );
}

const FollowUs = () => {
    return (
        <div>
            <div className='footHeader'>
                <p>F O L L O W &nbsp; U S </p>
            </div>
            <div className='footerText' style={{marginBottom:10, alignContent:"center"}}>
                <p>Nicholas "Pickles" Kong</p>
                <a href="https://www.instagram.com/nicholaspickles/" target="_blank" style={{marginRight:20}}><InstagramOutlined style={{color:'white'}}/></a>
                <a href= "https://www.github.com/NicholasKSK" target="_blank"><GithubOutlined style={{color:'white'}}/></a>
            </div>
            <div className='footerText' style={{marginBottom:10}}>
                <p>Amanda "Sugarpeas" Kong</p>
                <a href="https://www.instagram.com/kong.pdf/" target="_blank" style={{marginRight:20}}><InstagramOutlined style={{color:'white'}}/></a>
                <a href="https://amandakongakk.wixsite.com/amandakong" target="_blank"><SmileOutlined style={{color:'white'}}/></a>
            </div>
        </div>
    );
}

const Policy = () => {
    return (
        <div>
            <div className='footHeader'>
                P O L I C Y
            </div>
            <div className='footerText'>
                <p>Don't get sick - after I sell it to you,<br/>IT AIN'T MY PROBLEM</p>
            </div>
        </div>
    );
}

const FooterText = () => {
    return (
        <div className='footInfo'>
            <Row justify='center' align='middle'>
                <Col xs={24} xl={8}><Queries /></Col>
                <Col xs={24} xl={8}><FollowUs /></Col>
                <Col xs={24} xl={8}><Policy /></Col>
            </Row>
        </div>
    );
}


const Foot = () => {
    return (
        <div className='footerWrapper'>
            <Layout>
                    <Footer style={{
                        borderTop: '1px solid #e8e8e8',
                        position: 'fixed',
                        left: 0,
                        bottom: 0,
                        width: '100%',
                        height: '30%',
                        backgroundColor: '#3E3F5A',
                        textAlign:"center",
                        overflowY:"scroll"
                        }}>
                            <div>
                                <img src={cutflower1} style={{position:"absolute", left:0, bottom:0, height:'75%', width:'15%', maxWidth:300, minWidth:200}}/>
                                <img src={cutflower2} style={{position:'absolute', right:0,top:0, height:'75%', width:'10%', maxWidth:300, minWidth:150}}/>
                            </div>
                            <FooterText />
                    </Footer>
            </Layout>
        </div>
    );
}

export default Foot;