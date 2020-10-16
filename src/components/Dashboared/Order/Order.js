import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import TopBar from '../TopBar/TopBar';
import './Order.css';

const Order = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData()
        console.log(info);
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('email', info.email);
        formData.append('price', info.price);
        formData.append('description', info.description);
        formData.append('service_name', info.service_name);

        fetch('http://localhost:5000/addOrders', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                alert('Order add succesfully')
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <section>
            <div className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <h5 className="text-center p-5">Logo Here</h5>
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 col-sm-12 col-12 px-0">
                    <TopBar></TopBar>
                    <section className="order-container">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input type="text" onBlur={handleBlur} name="name" className="form-control" placeholder="Your name / Company name" />
                            </div>
                            <div className="form-group">
                                <input type="email" onBlur={handleBlur} name="email" className="form-control" placeholder="Your email address" />
                            </div>
                            <div className="form-group">
                                <input type="text" onBlur={handleBlur} name="service_name"className="form-control" placeholder="Graphics Design" />
                            </div>
                            <div class="form-group">
                                <textarea onBlur={handleBlur} name='description' placeholder="Project Details" className="form-control" cols="30" rows="5"></textarea>
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <input type="number"onBlur={handleBlur} name="price" className="form-control" placeholder="price" />
                                    </div>
                                    <div className="col-lg-6">
                                        <label className="custom-file-upload">
                                            <input onChange={handleFileChange} type="file" />
                                            <FontAwesomeIcon style={{color: '#129B52'}} className="mr-2" icon={faCloudUploadAlt}></FontAwesomeIcon> Upload Project File
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-dark px-5 py-3">Send</button>
                        </form>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default Order;