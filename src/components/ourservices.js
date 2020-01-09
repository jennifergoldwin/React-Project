import React,{Component} from 'react';
// import './App.css';
import ParticlesBg from 'particles-bg';

class Services extends Component{
    render(){
        return(
            <React.Fragment>
                {/* <ParticlesBg type="cobweb" bg={true}/> */}
            
                <section className="page-section" id="services">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="section-heading text-uppercase">Our Services</h2>
                                <h3 className="section-subheading text-muted">We offer the full spectrum of services to help organizations work better.</h3>
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="col-md-4">
                                <span className="fa-stack fa-4x">
                                    <i className="fa fa-circle fa-stack-2x text-primary"></i>
                                    <i className="fa fa-bullhorn fa-stack-1x fa-inverse"></i>
                                </span>
                                <h4 className="service-heading">Corporate Events</h4>
                                <p className="text-muted">
                                    Desire is the key to motivation, but it’s determination and commitment to an unrelenting pursuit of your goal -- a commitment to excellence -- 
                                    that will enable you to attain the success you seek
                                </p>
                            </div>
                            <div className="col-md-4">
                                <span className="fa-stack fa-4x">
                                    <i className="fa fa-circle fa-stack-2x text-primary"></i>
                                    <i className="fa fa-camera-retro fa-stack-1x fa-inverse"></i>
                                </span>
                                <h4 className="service-heading">Exhibitions/Trade Shows</h4>
                                <p className="text-muted">
                                    Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life
                                </p>
                            </div>
                            <div className="col-md-4">
                                <span className="fa-stack fa-4x">
                                    <i className="fa fa-circle fa-stack-2x text-primary"></i>
                                    <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
                                </span>
                                <h4 className="service-heading">Commercial Photo Shots</h4>
                                <p className="text-muted">
                                    Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )

    }
}
export default Services