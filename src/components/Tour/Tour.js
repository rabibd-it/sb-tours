import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import Breadcrumb from '../Shared/Breadcrumb/Breadcrumb';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Tour = () => {

    const { id } = useParams();
    const [tour, setTour] = useState([]);
    const { user } = useAuth();
    const [isLoading, setIsLoading] = useState(true);

    // load tour api data
    useEffect(() => {
        axios.get(`http://127.0.0.1:5000/tour/${id}`)
            .then(function (res) {
                setTour(res.data);
            })
            .catch(function (error) {
                console.log(error);
            });
        setIsLoading(false);
    }, [setTour]);


    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {
        data.tour_id = id;
        data.created_at = new Date();
        axios.post(`http://localhost:5000/tour/booking`, data)
            .then(function (res) {
                if (res.data.insertedId) {
                    toast.success(`Booking Successfully`);
                    e.target.reset();
                }
            })
            .catch(function (error) {
                toast.error(error);
            });
    }

    return (
        <div>
            <ToastContainer />
            <Breadcrumb title={tour.name}></Breadcrumb>
            <section className="section-spacing">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="news-details">
                                <div className="post-thumb">
                                    <img className="img-fluid w-100" src={tour.image ?? 'https://i.ibb.co/Wy1R6rV/no-photo.jpg'} alt={tour.name} />
                                </div>
                                <div className="d-flex justify-content-between">
                                    <h3 className="mt-3">{tour.name}</h3>
                                    <p className="mt-3">{tour.duration}</p>
                                </div>
                                <div className="content-block">
                                    <p>{tour.description}</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="sidebar" id="sidebar">
                                <div className="sidebar-inner">
                                    <div className="book-tour">
                                        <h3><small>From</small> BDT {tour.price} <small>per person</small></h3>
                                        <div className="sidebar-item sidebar-widget">
                                            <form onSubmit={handleSubmit(onSubmit)}>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" defaultValue={user?.displayName} placeholder="Name" {...register("name", { required: true })} />
                                                    <div className="help-block with-errors">
                                                        {errors.name && <span>This field is required</span>}
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <input type="text" className="form-control" defaultValue={user?.email} placeholder="Email" {...register("email", { required: true })} />
                                                    <div className="help-block with-errors">
                                                        {errors.email && <span>This field is required</span>}
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Phone" {...register("phone", { required: true })} />
                                                    <div className="help-block with-errors">
                                                        {errors.phone && <span>This field is required</span>}
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Person" {...register("person", { required: true })} />
                                                    <div className="help-block with-errors">
                                                        {errors.person && <span>This field is required</span>}
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <textarea cols="20" rows="8" className="form-control" placeholder="Description"  {...register("description")}></textarea>
                                                    <div className="help-block with-errors">
                                                    </div>
                                                </div>
                                                <div className="text-center">
                                                    <button className="btn btn-primary" type="submit">Book Now</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Tour;