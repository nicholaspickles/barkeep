import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

//Components
import Head from './HeaderComponent';
import Foot from './FooterComponent';

const Main = () => {
    return (
        <Router>
            <Head />
            <Foot />
        </Router>
    );
}

export default Main;