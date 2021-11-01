import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Hotel from '../Hotel/Hotel';
import Breadcrumb from '../Shared/Breadcrumb/Breadcrumb';
import Loader from '../Shared/Loader/Loader';

const Hotels = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [hotels, setHotels] = useState([]);

    // load domestic tour api data
    useEffect(() => {
        axios.get('https://afternoon-island-48419.herokuapp.com/hotels')
            .then(function (res) {
                setHotels(res.data.hotels)
            })
            .catch(function (error) {
                console.log(error);
            });
        setIsLoading(false);
    }, [setHotels]);
    return (
        <div>
            <Breadcrumb title="Hotels"></Breadcrumb>
            {
                hotels.length > 0 && <section className="section-spacing">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-title text-center">
                                    <h2><span>Hotel Booking</span></h2>
                                    <p>Below Are Our Most Popular Hotel Packages</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {
                                isLoading ? <Loader></Loader>
                                    :
                                    hotels.map(hotel => <Hotel key={hotel._id} hotel={hotel}></Hotel>)
                            }
                        </div>
                    </div>
                </section>
            }
        </div>
    );
};

export default Hotels;