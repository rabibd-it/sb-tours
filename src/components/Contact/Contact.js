import React from 'react';
import { useForm } from "react-hook-form";
import Breadcrumb from '../Shared/Breadcrumb/Breadcrumb';
import './Contact.css';

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <Breadcrumb title="Contact Us"></Breadcrumb>
            <section className="section-spacing">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="contact-info text-center wow fadeIn">
                                <i className="fa fa-phone-square"></i>
                                <h3>Make a Call</h3>
                                <p>
                                    <a href="tel:+88 01711 001122">+88 01711 001122</a>
                                    <br />
                                    <a href="tel:+88 01611 001122">+88 01611 001122</a>
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="contact-info text-center wow fadeIn">
                                <i className="fa fa-envelope-open-o"></i>
                                <h3>Send a Mail</h3>
                                <p>
                                    <a href="mailto:info@sbtour.com">info@sbtour.com</a>
                                    <br />
                                    <a href="mailto:sbtour@gmail.com">sbtour@gmail.com</a>
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="contact-info text-center wow fadeIn">
                                <i className="fa fa-map-marker"></i>
                                <h3>Find Us</h3>
                                <p>
                                    Shahid Kazol Sarani
                                    <br />
                                    Palaspole, Satkhira.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title text-center">
                                <h2><span>Have Any Question?</span></h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 col-lg-8 offset-lg-2">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="row">
                                        <div className="col-12 col-md-6 col-lg-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Name" {...register("name", { required: true })} />
                                                <div className="help-block with-errors">
                                                    {errors.name && <span>This field is required</span>}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Email" {...register("email", { required: true })} />
                                                <div className="help-block with-errors">
                                                    {errors.email && <span>This field is required</span>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-md-6 col-lg-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Phone" {...register("phone", { required: true })} />
                                                <div className="help-block with-errors">
                                                    {errors.phone && <span>This field is required</span>}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Subject" {...register("subject", { required: true })} />
                                                <div className="help-block with-errors">
                                                    {errors.subject && <span>This field is required</span>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <textarea cols="20" rows="8" className="form-control" placeholder="Your Messages"  {...register("message", { required: true })}></textarea>
                                        <div className="help-block with-errors">
                                            {errors.message && <span>This field is required</span>}
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <button className="btn btn-primary" type="submit">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;