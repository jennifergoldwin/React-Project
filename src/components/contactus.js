import React,{Component} from 'react';
import ParticlesBg from 'particles-bg';

class Contact extends Component{

    constructor(){
        super();
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            this.setState({value: e.target.value})
        }
    }



    render(){
        return(
            <React.Fragment>
                <ParticlesBg type="color" bg={true}/>
                <section className="page-section" id="contact">
                    
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="section-heading text-uppercase">Contact Us</h2>
                                <h3 className="section-subheading text-muted">Stop by and say "hi." Or drop us a note.</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <form id="contactForm" name="sentMessage">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input className="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name."/>
                                                <p className="help-block text-danger"></p>
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address."/>
                                                <p className="help-block text-danger"></p>
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control" id="phone" type="text" maxLength="12" value = {this.state.value} onChange={this.handleChange} placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number."/>
                                                <p className="help-block text-danger"></p>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <textarea className="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                                                <p className="help-block text-danger"></p>
                                            </div>
                                        </div>
                                        <div className="clearfix"></div>
                                        <div className="col-lg-12 text-center">
                                            <div id="success"/>
                                            <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                
            </React.Fragment>
        )
    }
}

export default Contact;