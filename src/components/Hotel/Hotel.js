import React from 'react';
import { Link } from 'react-router-dom';

const Hotel = () => {
    return (
        <div class="col-12 col-md-6 col-lg-6">
            <div class="hotel-item wow fadeIn bg-light">
                <div class="media">
                    <div className="row">
                        <div className="col-lg-5 p-0">
                            <div class="thumb">
                                <Link>
                                    <img
                                        src={'http://themecrazy.net/html/manali/img/destination/1.jpg'}
                                        alt=""
                                        style={{
                                            minHeight: "100px",
                                            maxHeight: "100%",
                                            width: "100%"
                                        }}
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div class="media-body">
                                <div class="hotel-info">
                                    <h3><a href="hotel-single.html">Herta Berlin Hotel</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing Suscipit tas aperiam.</p>
                                    <div class="hotel-price">$150.00 <small>- Per Night</small></div>
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