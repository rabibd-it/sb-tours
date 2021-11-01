import axios from 'axios';
import React, { useEffect, useState } from 'react';
import International from '../International/International';
import Breadcrumb from '../Shared/Breadcrumb/Breadcrumb';
import Loader from '../Shared/Loader/Loader';

const Internationals = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [internationals, setInternationals] = useState([]);

    // load international tour api data
    useEffect(() => {
        axios.get('https://afternoon-island-48419.herokuapp.com/tour-categories?category=international')
            .then(function (res) {
                setInternationals(res.data)
            })
            .catch(function (error) {
                console.log(error);
            });
        setIsLoading(false);
    }, [setInternationals]);
    return (
        <div>
            <Breadcrumb title="International Tours"></Breadcrumb>
            {
                internationals.length > 0 && <section className="section-spacing">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-title text-center">
                                    <h2><span>International Tours</span></h2>
                                    <p>Below Are Our Most Popular International Tour Packages</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {
                                isLoading ? <Loader></Loader>
                                    :
                                    internationals.map(international => <International key={international._id} international={international}></International>)
                            }
                        </div>
                    </div>
                </section>
            }
        </div>
    );
};

export default Internationals;