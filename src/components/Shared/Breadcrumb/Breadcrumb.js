import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../../images/banner.jpg';
import './Breadcrumb.css';

const Breadcrumb = ({ title }) => {
    return (
        <section className="inner-page-banner" style={{
            backgroundImage: "url('" + banner + "')"
        }}>
            <div className="page-banner-caption">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>{title}</h1>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item active">{title}</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Breadcrumb;