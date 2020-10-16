import React from 'react';
import { Container } from 'react-bootstrap';
import google from '../../../images/logos/google.png';
import airbnb from '../../../images/logos/airbnb.png';
import Netflix from '../../../images/logos/netflix.png';
import slack from '../../../images/logos/slack.png';
import uber from '../../../images/logos/uber.png';

const CompanyInfo = () => {
    return (
        <Container>
            <div className="d-flex flex-column flex-md-row align-items-center  justify-content-between p-5">
                <img src={google} className="img-fluid" style={{height: '50px',width: '160px'}} alt=""/>
                <img src={airbnb} className="img-fluid " style={{height: '50px',width: '160px'}} alt=""/>
                <img src={Netflix} className="img-fluid " style={{height: '50px',width: '160px'}} alt=""/>
                <img src={slack} className="img-fluid " style={{height: '50px',width: '160px'}} alt=""/>
                <img src={uber} className="img-fluid " style={{height: '50px',width: '160px'}} alt=""/>
            </div>
        </Container>
    );
};

export default CompanyInfo;