import React, { useContext } from 'react';
import { UserContext } from '../../../App';

const TopBar = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    return (
        <div className="d-flex justify-content-between">
            <h2 className="p-5">Order</h2>
    <h2 className="p-5">{loggedInUser.name}</h2>
        </div>
    );
};

export default TopBar;