import React from 'react';
// import './App.css';
import Portfolio from './Portfolio'
// import Music from './assets/img/chill.mp3';
// import Typical from 'react-typical';
import Services from './ourservices';
import About from './aboutus';
import Contact from './contactus';
import Team from './team';
import {Switch, Route, Router, Link,BrowserRouter} from 'react-router-dom';

const Main = () => (
    <Switch>
        
        <Route exact path="/" component={About} />
        <Route path="/aboutme" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/team" component={Team} />
        <Route path="/services" component={Services}/>
    
    </Switch>
)

export default Main;