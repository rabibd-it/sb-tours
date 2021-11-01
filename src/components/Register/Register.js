import React, { useState } from 'react';
import Breadcrumb from '../Shared/Breadcrumb/Breadcrumb';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';

const Register = () => {
    const [error, setError] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();

    const { SignUpUsingEmailPassword, logInUsingGoogle, logInUsingGithub } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';

    const onSubmit = data => {
        const { email, password } = data;
        SignUpUsingEmailPassword(email, password)
            .then((result) => {
                history.push(redirect_uri);
            }).catch((error) => {
                setError(error.message);
            });
    };

    const handleGoogleSignUp = () => {
        logInUsingGoogle().then((result) => {
            history.push(redirect_uri);
        }).catch((error) => {
            setError(error.message);
        });
    }

    const handleGithubSignUp = () => {
        logInUsingGithub().then((result) => {
            history.push(redirect_uri);
        }).catch((error) => {
            setError(error.message);
        });
    }
    return (
        <div>
            <Breadcrumb title="Sign Up"></Breadcrumb>
            {/* Sign Up Start */}
            <section className="section-spacing login">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 mx-auto">
                            <div className="card">
                                <div className="card-body">
                                    <div className="section-title">
                                        <h2 className="section-separator">Sign Up</h2>
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
                                        <span className="mx-2">Already have an account?</span>
                                        <Link to="/login">
                                            <span>Sign In</span>
                                        </Link>
                                    </p>
                                </div>
                                <div className="login-separator"></div>
                                <div className="card-footer">
                                    <div className="d-flex justify-content-between">
                                        <button onClick={handleGoogleSignUp} type="button" className="btn btn-danger rounded px-3">
                                            <i className="fa fa-google px-2"></i>
                                            Google Sign Up
                                        </button>
                                        <button onClick={handleGithubSignUp} type="button" className="btn btn-dark rounded px-3">
                                            <i className="fa fa-github px-2"></i>
                                            Github Sign Up
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Sign Up End */}
        </div>
    );
};

export default Register;