import React from 'react';
const ServiceItemList = ({service}) => {
    return (
        <div className="col-md-6 mt-3">
            <div className="service_card">
                <div className="d-flex align-items-center justify-content-between mb-3">
                    <img src={`data:image/png;base64,${service.image.img}`} style={{ width: '80px' }} className="img-fluid" alt="" />
                    <span class="badge badge-service-danger px-4 py-3">Pending</span>
                </div>
                <h5>{service.service_name}</h5>
                <p className="text-secondary">{service.description}</p>
            </div>
        </div>
    );
};

export default ServiceItemList;