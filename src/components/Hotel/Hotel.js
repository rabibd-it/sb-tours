import React from 'react';
import { Link } from 'react-router-dom';

const Hotel = ({ hotel }) => {
    const { _id, name, price, image, description, type } = hotel;
    return (
        <div className="col-12 col-md-6 col-lg-6">
            <div className="hotel-item wow fadeIn bg-light h-100">
                <div className="media">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="thumb h-100">
                                <Link to={`/tours/booking/${_id}`}>
                                    <img
                                        src={image ? image : 'https://i.ibb.co/Wy1R6rV/no-photo.jpg'}
                                        alt={name}
                                        style={{
                                            height: "100%",
                                            width: "100%"
                                        }}
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="media-body">
                                <div className="hotel-info">
                                    <h3><Link to={`/tours/booking/${_id}`}>{name}</Link></h3>
                                    <p className="text-justify">
                                        {description.slice(0, 100)}
                                    </p>
                                    <div className="tour-price">BDT {price} <small>- {type}</small></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hotel;