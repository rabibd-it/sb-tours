import React from 'react';
import Breadcrumb from '../Shared/Breadcrumb/Breadcrumb';
import aboutImg from '../../images/about.png';
import './About.css';
const About = () => {
    return (
        <div>
            <Breadcrumb title="About Us"></Breadcrumb>
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
        </div>
    );
};

export default About;