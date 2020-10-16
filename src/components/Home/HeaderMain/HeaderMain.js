import React from 'react';
import { Container } from 'react-bootstrap';
import headeMainImg from './../../../images/logos/Frame.png';
const HeaderMain = () => {
    return (
        <Container>
            <main style={{ height: '100%' }} className="row d-flex align-items-center">
                <div className="col-md-4 offset-md-1 text-left">
                    <h1 style={{ color: '#000' }}>Lets Grow Your <br /> Brand To The <br /> Next Level<br /></h1>
                    <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>
                    <button className="btn btn-dark px-5">Hire Us</button>
                </div>
                <div className="col-md-6">
                    <img src={headeMainImg} alt="" className="img-fluid" />
                </div>
            </main>
        </Container>
    );
};

export default HeaderMain;