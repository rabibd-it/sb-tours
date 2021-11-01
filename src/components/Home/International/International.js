import React from 'react';
import { Link } from 'react-router-dom';

const International = ({ international }) => {
    const { category, name, image, price, duration, description } = international;
    return (
        <div class="col-12 col-md-6 col-lg-4">
            <div class="tour-item wow fadeIn">
                <div class="thumb">
                    <Link to="/">
                        <img
                            src={image ? image : ''}
                            alt=""
                            style={{ maxHeight: "250px" }}
                        />
                    </Link>
                </div>
                <div class="tour-info">
                    <h3>
                        <Link to="/">{name}</Link>
                    </h3>
                    <p className="text-justify">
                        {description}
                    </p>
                    <div class="tour-price">${price} <small>- {duration}</small></div>
                    <div className="d-flex justify-content-center mt-1">
                        <Link to="/" className="btn btn-md btn-primary">
                            Book Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default International;