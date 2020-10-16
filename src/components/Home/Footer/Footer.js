import React from 'react';
import './Footer.css';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <section className="footer-container mt-5">
            <Container>
                <div className="row">
                    <div className="col-md-6">
                        <h2>Let us handle your <br /> project , professionally</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quae aliquam ex, deleniti quas laudantium.</p>
                    </div>
                    <div className="col-md-6">
                        <form>
                            <div className="form-group">
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="You email address"/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="You name/company" />
                            </div>
                            <div className="form-group">
                                <textarea name="" placeholder="Your message"className="form-control" id="" cols="30" rows="10"></textarea>
                            </div>
                            <button type="submit" className="btn btn-dark px-5 rounded">Send</button>
                        </form>
                    </div>


                </div>
                <p className="text-center pt-5 pb-0 mb-0">copyright orango labs {(new Date()).getFullYear()}</p>
            </Container>
        </section>
    );
};

export default Footer;