import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import  { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { loadCats } from './actions/catActions';
import { loadHobbies } from './actions/hobbyActions';

const store = configureStore();

store.dispatch(loadCats());
store.dispatch(loadHobbies());

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
