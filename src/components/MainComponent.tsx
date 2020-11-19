import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

//Components
import Head from './HeaderComponent';

const Main = () => {
    return (
        <Router >
            <Head />
        </Router>
    );
}

export default Main;