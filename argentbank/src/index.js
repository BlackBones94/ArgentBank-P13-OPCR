import React from 'react';
import ReactDOM from 'react-dom/client';

import Footer from './componant/footer';

import Home from './pages/Home';
import Sign from './pages/Sign';
import User from './pages/User';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path = '/' element = {<Home />}/>
          <Route path = '/sign' element = {<Sign />}/>
          <Route path = '/ProfilPage' element = {<User />}/>
        </Routes>
        <Footer />
      </Router>
    </Provider>
  </React.StrictMode>
);

