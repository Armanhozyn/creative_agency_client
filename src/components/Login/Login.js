import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/logos/logo.png';
import { handleGoogleSignIn, initializeLoginFrameWork } from './loginManager';
import './Login.css';
const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    initializeLoginFrameWork();

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                handleRespose(res, true);
            });
    }

    const handleRespose = (res, redirect) => {
        // setUser(res);
        setLoggedInUser(res);
        if (redirect) {
            history.replace(from);
        }
    }
    return (
        <section className="login-container text-center container">
            <img src={logo} className="img-fluid mt-5" width="250px" alt="" />
            <div className="log__in border mt-5">
                <h5>Login With</h5>
                <button className="btn mt-4" onClick={googleSignIn}>Continue With Google</button>
                <p className='mt-3'>Dont have an account? <span style={{color: 'blue'}} onClick={googleSignIn}>Create and account</span></p>
            </div>
        </section>
    );
};

export default Login;