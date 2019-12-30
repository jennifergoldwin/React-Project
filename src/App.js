import React from 'react';
import './App.css';
import Portfolio from './components/Portfolio'
import Music from './assets/img/chill.mp3';
import Services from './components/ourservices';
import About from './components/aboutus';
import Contact from './components/contactus';
import Team from './components/team';
import Footer from './components/Shared/Footer/Footer'
import Header from './components/Shared/Header/Header'
import {Route,Switch } from 'react-router-dom';



function App() {
  const portfolioLinks = [
    {
      title: 'Threads',
      caption: 'Illustration'
    },
    {
      title: 'Explore',
      caption: 'Graphic Design'
    },
    {
      title: 'Finish',
      caption: 'Identity'
    },
    {
      title: 'Lines',
      caption: 'Branding'
    },
    {
      title: 'Southwest',
      caption: 'Website Design'
    },
    {
      title: 'Window',
      caption: 'Photography'
    }

  ];
  

    return (
        <div className="App">
            <audio  autoPlay loop src={Music}></audio>
            <Header/>
        <Switch>
            <Route exact path='/'>
                <header className="masthead" id="page-top">
                    <div className="container">
                    <div className="intro-text">
                        <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="/Services">Tell Me More</a>
                    </div>
                    </div>
                </header>
            </Route>

            <Route path="/About">
                <About />
            </Route>

            <Route path="/Services">
                <Services />
            </Route>

            <Route path="/Team">
                <Team />
            </Route>

            <Route path="/Portfolio">
                <Portfolio portfolioLinks={portfolioLinks}/>
            </Route>

            <Route path="/Contact">
                <Contact/>
            </Route>
        </Switch>
        <Footer/>
    </div>


  );
}
export default App;