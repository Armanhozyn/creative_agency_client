import React from 'react';

const FeedBackDetail = ({ feedback }) => {
    return (
        <div className="col-md-4">
            <div class="card">
                <div class="card-body">
                    <div className="d-flex align-items-center">
                        <img src={feedback.img} className="img-fluid" style={{ width: '70px' }} alt="" />
                        <div className="text-left ml-3">
                            <h5 className="font-weight-bold">{feedback.name}</h5>
                            <h6  className="font-weight-bold">{feedback.company_name}</h6>
                        </div>
                    </div>
                    <p className="text-secondary text-left mt-3">
                        {feedback.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FeedBackDetail;