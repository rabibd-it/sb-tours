import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import Breadcrumb from '../Shared/Breadcrumb/Breadcrumb';
import Loader from '../Shared/Loader/Loader';

const Services = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [services, setServices] = useState([]);

    // load services api data
    useEffect(() => {
        fetch('http://127.0.0.1:5000/services')
            .then(res => res.json())
            .then(data => setServices(data.services))
        setIsLoading(false);
    }, [setServices]);
    return (
        <div>
            <Breadcrumb title="Services"></Breadcrumb>
            {
                services.length > 0 && <section className="section-spacing">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-title text-center">
                                    <h2><span>SB Tours & Travels Services</span></h2>
                                    <p>Below Are Our Most Services That Client Can Get From Us</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {
                                isLoading ? <Loader></Loader>
                                    :
                                    services.map(service => <Service key={service._id} service={service}></Service>)
                            }
                        </div>
                    </div>
                </section>
            }
        </div>
    );
};

export default Services;
