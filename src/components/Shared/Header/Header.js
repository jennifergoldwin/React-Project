import React,{ Component } from "react";
import Typical from 'react-typical';



import { Navigation } from "react-mdl";

import Navigate from '../../Navigate';

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
                    {/* <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fa fa-bars"/>
                    </button> */}
                    
                    <Navigate/>
                </div>
            </nav>
        )
    }
}

export default Header;