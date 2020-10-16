import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import mainLogo from '../../../images/logos/logo.png';

const NavBar = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container">
                <a className="navbar-brand" href="/home"><img src={mainLogo} style={{ height: '35px' }} alt="" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link mr-4">
                               Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-4" href="/portfolio">Our Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-4" href="/portfolio">Our Team</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-4" href="/portfolio">Contact Us</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        {
                            loggedInUser.email?
                            <Link to="/order">
                            <button className="btn btn-dark my-2 my-sm-0" type="button">Dashboard</button>
                            </Link>
                            :
                            <Link to="/login">
                            <button className="btn btn-dark my-2 my-sm-0" type="button">Login</button>
                            </Link>
                        }
                        
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;