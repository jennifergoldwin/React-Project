import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import {Dropdown} from 'react-bootstrap'; 

class Navigate extends React.Component{

    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
      
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    render(){
        // console.log(this.state.width);
        if (this.state.width < 992){
            return (
                <Dropdown>
                    <Dropdown.Toggle variant="warning" id="dropdown-basic">
                        Menu
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="/Services">Services</Dropdown.Item>
                        <Dropdown.Item href="/Portfolio">Portfolio</Dropdown.Item>
                        <Dropdown.Item href="/About">About</Dropdown.Item>
                        <Dropdown.Item href="/Team">Team</Dropdown.Item>
                        <Dropdown.Item href="/Contact">Contact</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            )
        } else {
            return(
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
            )
        }

       
    }

}

export default Navigate;