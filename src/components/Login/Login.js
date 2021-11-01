import React, { useState } from 'react';
import Breadcrumb from '../Shared/Breadcrumb/Breadcrumb';
import { useForm } from "react-hook-form";
import './Login.css';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';

const Login = () => {

    const [error, setError] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();

    const { logInUsingEmailPassword, logInUsingGoogle, logInUsingGithub } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';

    const onSubmit = data => {
        const { email, password } = data;
        logInUsingEmailPassword(email, password).then((result) => {
            history.push(redirect_uri);
        }).catch((error) => {
            setError(error.message);
        });
    };

    const handleGoogleSignIn = () => {
        logInUsingGoogle().then((result) => {
            history.push(redirect_uri);
        })
    }

    const handleGithubSignIn = () => {
        logInUsingGithub().then((result) => {
            history.push(redirect_uri);
        })
    }
    return (
        <div>
            <Breadcrumb title="Login"></Breadcrumb>
            {/* Login Start */}
            <section className="section-spacing login">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 mx-auto">
                            <div className="card">
                                <div className="card-body">
                                    <div className="section-title">
                                        <h2 className="section-separator">Sign In</h2>
                                    </div>
                                    {error && <div className="text-danger fw-bold mb-3">{error}</div>}
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text" id="email"> <i className="fa fa-envelope-o"></i></span>
                                            <input type="email" className="form-control" id="email" placeholder="Email" {...register("email", { required: true })} />
                                            {errors.email && <span className="text-danger w-100">This field is required</span>}
                                        </div>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text" id="password"> <i className="fa fa-lock"></i></span>
                                            <input type="password" className="form-control" id="password" placeholder="Password" {...register("password", { required: true })} />
                                            {errors.password && <span className="text-danger w-100">This field is required</span>}
                                        </div>
                                        <div className="d-grid">
                                            <button className="btn btn-primary" type="submit">Submit</button>
                                        </div>
                                    </form>
                                    <p className="text-center mt-5">
                                        <span className="mx-2">New to SB Tours & Travels?</span>
                                        <Link to="/register">
                                            <span>Create an account</span>
                                        </Link>
                                    </p>
                                </div>
                                <div className="login-separator"></div>
                                <div className="card-footer">
                                    <div className="d-flex justify-content-between">
                                        <button onClick={handleGoogleSignIn} type="button" className="btn btn-danger rounded px-3">
                                            <i className="fa fa-google px-2"></i>
                                            Google Sign In
                                        </button>
                                        <button onClick={handleGithubSignIn} type="button" className="btn btn-dark rounded px-3">
                                            <i className="fa fa-github px-2"></i>
                                            Github Sign In
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Login End */}
        </div>
    );
};

export default Login;