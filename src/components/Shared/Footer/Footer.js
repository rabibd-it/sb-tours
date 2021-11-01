import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [tours, setTours] = useState([]);
    useEffect(() => {
        fetch('http://127.0.0.1:5000/tours')
            .then(res => res.json())
            .then(data => setTours(data.tours))
        setIsLoading(false);
    }, [setTours]);

    return (
        <footer id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="footer-widget">
                                <h3>About Us</h3>
                                <p className="text-justify">
                                    On behalf of SB Tours & Travels, is committed to offering an informative, user-friendly website with competitive rates of various hotels, guest house and resorts of Bangladesh.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footer-widget">
                                <h3>Quick Links</h3>
                                <ul>
                                    <li><Link to="/about">Abouts Us</Link></li>
                                    <li><Link to="/services">Services</Link></li>
                                    <li><Link to="/tours">Tours</Link></li>
                                    <li><Link to="/contact-us">Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footer-widget">
                                <h3>Tours</h3>
                                <ul>
                                    {
                                        tours.length > 0 && tours.slice(0, 4).map(tour => <li key={tour._id}><Link to={`tour/${tour._id}`}>{tour.name}</Link></li>)
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footer-widget">
                                <h3>Contact Info</h3>
                                <ul>
                                    <li><i className="fa fa-send" aria-hidden="true"></i> Shahid Kazol Sarani, Palaspole, Satkhira.</li>
                                    <li><i className="fa fa-phone" aria-hidden="true"></i> +8801711 001122</li>
                                    <li><i className="fa fa-envelope-o" aria-hidden="true"></i> info@sbtour.com</li>
                                    <li><i className="fa fa-fax" aria-hidden="true"></i> Fax : 02 9635 0247</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="copyright">
                                <p>Copyright &copy; 2021 SB Tours & Travels. All Rights Reserved.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <ul className="social-icons text-right">
                                <li><a href="#" target="_blank"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#" target="_blank"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#" target="_blank"><i className="fa fa-linkedin"></i></a></li>
                                <li><a href="#" target="_blank"><i className="fa fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;