import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Shop from './pages/shop/Shop'
import './App.css';
import HomePage from './pages/homepage/HomePage'
import Header from '../src/components/header/Header'


function App() {
  return (
    <div>
        <Header/>
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={Shop} />
        </Switch>
    
    </div>
  );
}

export default App;
