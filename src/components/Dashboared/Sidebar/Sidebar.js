import {  faShoppingCart, faSignOutAlt,faList,faComment} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    const history = useHistory();
    return  (
        <div className="sidebar d-flex flex-column align-items-center justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link   className={history.location.pathname === '/order' ? 'text-success' : ''} to="/order" >
                        <FontAwesomeIcon  icon={faShoppingCart} /> <span>Order</span>
                    </Link>
                </li>
                <li>
                    <Link   className={history.location.pathname === '/servicelist' ? 'text-success' : ''} to="/servicelist">
                        <FontAwesomeIcon icon={faList} /> <span>Service list</span>
                    </Link>
                </li>
                <li >
                    <Link  className={history.location.pathname === '/review' ? 'text-success' : ''}  to="/review">
                        <FontAwesomeIcon icon={faComment} /> <span>Review</span>
                    </Link>
                </li>
            </ul>
            <div>
                <Link to="/" ><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;