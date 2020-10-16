import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import TopBar from '../TopBar/TopBar';
import './Review.css';

const Review = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();
    
    const onSubmit = data => {
        data.name = loggedInUser.name;
        data.img = loggedInUser.photo;
        fetch('http://localhost:5000/addReview', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            if(success){
               // closeModal();
                alert('Review Added successfully.');
            }
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
                    <section class="review-container">
                        <form onSubmit = {handleSubmit(onSubmit)}>
                            <div class="form-group">
                                <input type="text" ref={register({ required: true })} class="form-control" placeholder="Your name" name="name" />
                                {errors.name && <span className="text-danger">This field is required</span>}
                            </div>
                            <div class="form-group">
                                <input type="text" ref={register({ required: true })} class="form-control" placeholder="Company Name Designation" name="company_name" />
                                {errors.company_name && <span className="text-danger">This field is required</span>}
                            </div>
                            <div class="form-group">
                                <textarea ref={register({ required: true })} placeholder="Description" className="form-control" cols="30" name="description" rows="5"></textarea>
                                {errors.description && <span className="text-danger">This field is required</span>}
                            </div>
                            <button type="submit" class="btn btn-dark px-5 py-3">Send</button>
                        </form>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default Review;