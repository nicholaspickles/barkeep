import React from 'react';
import './App.css';
import {ApplicationState} from './redux/store';
import {updateCartNum} from './redux/ducks/cart';
import {useSelector, useDispatch} from 'react-redux';

import Main from './components/MainComponent';

const App = () =>{
  return (
    <div>
      <Main />
    </div>
  )
}

export default App;
