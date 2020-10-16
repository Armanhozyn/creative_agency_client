import React from 'react';
import service1 from '../../../images/icons/service1.png';
import service2 from '../../../images/icons/service2.png';
import service3 from '../../../images/icons/service3.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        title : 'Web and Mobile design',
        description : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, repellat.",
        img : service1

    },
    {
        title : 'Graphics design',
        description : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, repellat.",
        img : service2

    },
    {
        title : 'Web development',
        description : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, repellat.",
        img : service3

    }

]

const Services = () => {
    return (
        <section className="container service-container mt-5">
            <div className="text-center">
                <h2>Provide awesome <span style={{color : '#7AB259'}}>services</span></h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="row mt-5">
                    {
                        serviceData.map(service => <ServiceDetail service={service} key={service.title}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;