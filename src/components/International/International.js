import React from 'react';
import { Link } from 'react-router-dom';

const International = ({ international }) => {
    const { _id, name, image, price, duration, description } = international;
    return (
        <div className="col-12 col-md-6 col-lg-4">
            <div className="tour-item wow fadeIn bg-light">
                <div className="thumb">
                    <Link to={`/tours/booking/${_id}`}>
                        <img
                            src={image ? image : 'https://i.ibb.co/Wy1R6rV/no-photo.jpg'}
                            alt={name}
                            style={{ maxHeight: "250px" }}
                        />
                    </Link>
                </div>
                <div className="tour-info">
                    <h3>
                        <Link to={`/tours/booking/${_id}`}>{name}</Link>
                    </h3>
                    <p className="text-justify">
                        {description.slice(0, 200)}
                    </p>
                    <div className="tour-price">BDT {price} <small>- {duration}</small></div>
                    <div className="d-flex justify-content-center mt-1">
                        <Link to={`/tours/booking/${_id}`} className="btn btn-md btn-primary">
                            Book Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default International;