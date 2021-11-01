import React from 'react';
import './NotFound.css';
import notFound from '../../images/404.jpg';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <section className="not-found" style={{
            backgroundImage: "url(" + notFound + ")"
        }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="h100vh position-relative d-flex flex-column justify-content-center align-items-center">
                            <p className="text-white">Sorry, the page you were looking for could not be found!</p>
                            <Link to="/" className="btn btn-primary">Go to Home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NotFound;