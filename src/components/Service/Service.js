import React from 'react';

const Service = ({ service }) => {
    const { name, icon, description } = service;
    return (
        <div className="col-12 col-md-6 col-lg-4">
            <div className="service-item text-center wow fadeIn">
                <div className="icon">
                    <i className={icon}></i>
                </div>
                <h3>{name}</h3>
                <p className="text-justify">
                    {description.slice(0, 180)}
                </p>
            </div>
        </div>
    );
};

export default Service;