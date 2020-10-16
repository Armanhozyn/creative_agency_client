import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import client1 from '../../../images/customer-1.png';
import client2 from '../../../images/customer-2.png';
import client3 from '../../../images/customer-3.png';
import FeedBackDetail from '../FeedBackDetail/FeedBackDetail';
// const feedBackData = [
//     {
//         name: 'Arman Hossain',
//         position: 'Ceo',
//         description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque minus magnam magni provident dolores sed eaque veritatis modi dolorem voluptas",
//         img: client1,
//     },
//     {
//         name: 'Rabbi Hoque',
//         position: 'Ceo general',
//         description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque minus magnam magni provident dolores sed eaque veritatis modi dolorem voluptas",
//         img: client2,
//     },
//     {
//         name: 'Shimanta Hossain',
//         position: 'Ceo in high',
//         description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque minus magnam magni provident dolores sed eaque veritatis modi dolorem voluptas",
//         img: client3,
//     },
// ]

const FeedBack = () => {
    const [feedBackData,setFeedBackData] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/getReviews')
        .then(res => res.json())
        .then(data => setFeedBackData(data));
    },[])
    return (
        <section className="FeedBack-container container mt-5">
            <h2  className="text-center mb-5">Clients <span style={{color : '#7AB259'}}>Feedback</span></h2>
            <div className="row">
                {
                    feedBackData.map(feedBack =>  <FeedBackDetail key={feedBack._id} feedback={feedBack}></FeedBackDetail>)
                }
                
            </div>

        </section>
    );
};

export default FeedBack;