import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import TopBar from '../TopBar/TopBar';
import ServiceItemList from './ServiceItemList';
import './Servicelist.css';

const Servicelist = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [Service, setService] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/getServicesByEmail', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setService(data))
    }, [loggedInUser.email])
    return (
        <section>
            <div className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <h5 className="text-center p-5">Logo Here</h5>
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 col-sm-12 col-12 px-0">
                    <TopBar></TopBar>
                    <section class="servicelist-container">
                        <div className="row">
                            {
                               Service.map(serve =>  <ServiceItemList key={serve._id} service={serve}></ServiceItemList>)
                            }
                           
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default Servicelist;