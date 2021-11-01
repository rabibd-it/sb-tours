import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Domestic from '../Domestic/Domestic';
import Breadcrumb from '../Shared/Breadcrumb/Breadcrumb';
import Loader from '../Shared/Loader/Loader';

const Domestics = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [domestics, setDomestics] = useState([]);

    // load domestic tour api data
    useEffect(() => {
        axios.get('https://afternoon-island-48419.herokuapp.com/tour-categories?category=domestic')
            .then(function (res) {
                setDomestics(res.data)
            })
            .catch(function (error) {
                console.log(error);
            });
        setIsLoading(false);
    }, [setDomestics]);
    return (
        <div>
            <Breadcrumb title="Domestic Tours"></Breadcrumb>
            {
                domestics.length > 0 && <section className="section-spacing">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-title text-center">
                                    <h2><span>Domestic Tours</span></h2>
                                    <p>Below Are Our Most Popular Domestic Tour Packages</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {
                                isLoading ? <Loader></Loader>
                                    :
                                    domestics.map(domestic => <Domestic key={domestic._id} domestic={domestic}></Domestic>)
                            }
                        </div>
                    </div>
                </section>
            }
        </div>
    );
};

export default Domestics;