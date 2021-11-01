import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';
import Loader from '../Shared/Loader/Loader';
import Slider from '../Slider/Slider';
import aboutImg from '../../images/about.png';
import Service from '../Service/Service';
import Domestic from '../Domestic/Domestic';
import Hotel from '../Hotel/Hotel';
import International from '../International/International';

const Home = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [sliders, setSliders] = useState([]);
    const [services, setServices] = useState([]);
    const [domestics, setDomestics] = useState([]);
    const [internationals, setInternationals] = useState([]);
    const [hotels, setHotels] = useState([]);

    // load sliders api data
    useEffect(() => {
        axios.get('https://afternoon-island-48419.herokuapp.com/sliders')
            .then(function (res) {
                setSliders(res.data.sliders)
            })
            .catch(function (error) {
                console.log(error);
            });
        setIsLoading(false);
    }, [setSliders]);

    // load services api data
    useEffect(() => {
        axios.get('https://afternoon-island-48419.herokuapp.com/services')
            .then(function (res) {
                setServices(res.data.services)
            })
            .catch(function (error) {
                console.log(error);
            });
        setIsLoading(false);
    }, [setServices]);

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

    // load hotel api data
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
            {/* start slider */}
            {
                sliders.length > 0 && <div id="slider" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {
                            isLoading ? <Loader></Loader>
                                :
                                sliders.map((slider, index) => <Slider index={index} key={slider._id} slider={slider}></Slider>)
                        }
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#slider" data-bs-slide="prev">
                        <i className="fa fa-chevron-circle-left"></i>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#slider" data-bs-slide="next">
                        <i className="fa fa-chevron-circle-right"></i>
                    </button>
                </div>
            }
            {/* end slider */}

            {/* start about */}
            <section className="section-spacing">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="about-text wow fadeIn">
                                <h2>We are SB Tours and Travels Agency</h2>
                                <p>On behalf of SB Tours and Travels Agency is committed to offering an informative, user-friendly website with competitive rates of various hotels, guest house and resorts of Bangladesh . Our goal is to provide business and leisure travelers worldwide with a pleasant, efficient and cost-effective way to book hotel accommodation.</p>
                                <p>We know that today's travelers need useful information and professional consultation, regardless of whether they stay is for business or for leisure. This is why both our web site and our professional team are at your service. Do not hesitate to contact us.</p>
                                <p>SB Tours and Travels Agency is a Tour Operator and Travel Agency being managed by a team of professionals with several years of experience in the field of Tours & Travel trade and in the field of hospitality in Bangladesh .</p>
                                <ul>
                                    <li>We offer daily tours</li>
                                    <li>Best price guarantee</li>
                                    <li>Never lose your deposit</li>
                                    <li>5 star accommodations</li>
                                    <li>Handpicked hotels</li>
                                    <li>Special gifts &amp; offers for you</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="about-img text-xl-right text-center wow fadeIn">
                                <img className="tilt-img" src={aboutImg} alt="about" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end about */}

            {/* start services */}
            {
                services.length > 0 && <section className="section-spacing inverse-bg">
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
                                    services.slice(0, 6).map(service => <Service key={service._id} service={service}></Service>)
                            }
                        </div>
                    </div>
                </section>
            }
            {/* end services */}

            {/* start domestic tour */}

            {domestics.length > 0 && <section className="section-spacing">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                                <h2><span>Domestic Tours</span></h2>
                                <p>Below Are Our Most Popular Domestic Tour Packages</p>
                            </div>
                        </div>
                    </div>
                    <div className="row g-4">
                        {
                            isLoading ? <Loader></Loader>
                                :
                                domestics.slice(0, 6).map(domestic => <Domestic key={domestic._id} domestic={domestic}></Domestic>)
                        }
                    </div>
                </div>
            </section>
            }
            {/* end domestic tour */}

            {/* start international tour */}

            {internationals.length > 0 && <section className="section-spacing inverse-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                                <h2><span>International Tours</span></h2>
                                <p>Below Are Our Most Popular International Tour Packages</p>
                            </div>
                        </div>
                    </div>
                    <div className="row g-4">
                        {
                            isLoading ? <Loader></Loader>
                                :
                                internationals.slice(0, 6).map(international => <International key={international._id} international={international}></International>)
                        }
                    </div>
                </div>
            </section>
            }
            {/* end international tour */}

            {/* start hotel */}

            {internationals.length > 0 && <section className="section-spacing">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
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
                                hotels.slice(0, 6).map(hotel => <Hotel key={hotel._id} hotel={hotel}></Hotel>)
                        }
                    </div>
                </div>
            </section>
            }
            {/* end hotel */}
        </div>
    );
};

export default Home;