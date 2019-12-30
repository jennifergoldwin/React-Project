import React,{ Component } from "react";
import Typical from 'react-typical';
import {NavLink} from 'react-router-dom'

class Header extends Component{

    render(){
        const steps = [
            'Hello 👋', 1000,
            'Welcome to our studio 😍', 1000,
            'Nice to meet you 😊', 1000,
            'Click me if you want go back to home',1500,
            'The joy of dressing is an art.👌',2000
        ];

        return(
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                <div className="container">
                    <a className="navbar-brand js-scroll-trigger" href="/"><Typical steps={steps} loop={Infinity} className={'caca'}/></a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fa fa-bars"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav text-uppercase ml-auto">
                            <li className="nav-item">
                                <NavLink to="/Services" className="nav-link js-scroll-trigger">Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/Portfolio" className="nav-link js-scroll-trigger">Portfolio</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/About" className="nav-link js-scroll-trigger">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/Team" className="nav-link js-scroll-trigger">Team</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/Contact" className="nav-link js-scroll-trigger">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header;