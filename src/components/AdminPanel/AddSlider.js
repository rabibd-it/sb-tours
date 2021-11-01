import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../Shared/Loader/Loader';

const AddSlider = () => {
    const { user } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [sliders, setServices] = useState([]);
    const [slider, setService] = useState({});
    const [page, setPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const size = 5;

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {
        data.created_by = user.email ?? '';
        data.created_at = new Date();
        if (slider._id) {
            axios.put(`https://afternoon-island-48419.herokuapp.com/slider/${slider._id}`, data)
                .then(function (response) {
                    if (response.data.modifiedCount > 0) {
                        toast.success(`Data Updated Successfully.`);
                        e.target.reset();
                        setService({})
                        setPage(0);
                    }
                })
                .catch(function (error) {
                    toast.error(error);
                });
        } else {
            axios.post(`https://afternoon-island-48419.herokuapp.com/sliders`, data)
                .then(function (response) {
                    if (response.data.insertedId) {
                        toast.success(`Data Inserted Successfully`);
                        e.target.reset();
                        setPage(0);
                    }
                })
                .catch(function (error) {
                    toast.error(error);
                });
        }

    };

    // Get Service Data
    useEffect(() => {
        axios.get(`https://afternoon-island-48419.herokuapp.com/sliders/?page=${page}&&size=${size}`)
            .then(function (response) {
                setServices(response.data.sliders);
                const count = response.data.count;
                const pageNumber = Math.ceil(count / size);
                setPageCount(pageNumber);
            })
            .catch(function (error) {
                toast.error(error);
            });
        setIsLoading(false);
    }, [page]);


    // Edit Service
    const handleEdit = id => {
        axios.get(`https://afternoon-island-48419.herokuapp.com/slider/${id}`)
            .then(function (response) {
                setService(response.data);
                setIsLoading(false);
            })
            .catch(function (error) {
                toast.error(error);
            });
    }
    // Delete Service
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            axios.delete(`https://afternoon-island-48419.herokuapp.com/sliders/${id}`)
                .then(function (response) {
                    if (response.data.deletedCount > 0) {
                        toast.success(`Data Deleted Successfully`);
                        const remainingServices = sliders.filter(slider => slider._id !== id);
                        setServices(remainingServices);
                    }
                })
                .catch(function (error) {
                    toast.error(error);
                });
        }
    }
    return (
        <div>
            <ToastContainer />
            <section className="section-spacing bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                                <h2><span>Sliders</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-5">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="row">
                                    <div className="col-12 col-md-8 col-lg-8">
                                        <div className="form-group">
                                            <input type="text" className="form-control" defaultValue={slider.title ?? ''} placeholder="Title" {...register("title", { required: true })} />
                                            <div className="help-block with-errors">
                                                {errors.title && <span>This field is required</span>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-4 col-lg-4">
                                        <div className="form-group">
                                            <select className="form-control select" {...register("status")}>
                                                <option value="">Select Status</option>
                                                <option value="1">Active</option>
                                                <option value="0">Inactive</option>
                                            </select>
                                            <div className="help-block with-errors">
                                                {errors.status && <span>This field is required</span>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" defaultValue={slider.image ?? ''} placeholder="Image URL" {...register("image", { required: true })} />
                                    <div className="help-block with-errors">
                                        {errors.image && <span>This field is required</span>}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <textarea cols="20" rows="8" className="form-control" defaultValue={slider.description ?? ''} placeholder="Description"  {...register("description", { required: true })}></textarea>
                                    <div className="help-block with-errors">
                                        {errors.description && <span>This field is required</span>}
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button className="btn btn-primary" type="submit">{slider._id ? 'Update' : 'Add'}</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-12 col-md-6 col-lg-7">
                            <div className="table-responsive">
                                <table className="table table-hover table-striped">
                                    <thead className="table-dark">
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Title</th>
                                            <th scope="col">Image</th>
                                            <th scope="col">Created By</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            isLoading ? <Loader></Loader>
                                                :
                                                sliders.map((slider, index) => <tr key={slider._id}>
                                                    <th scope="row">{index + 1}</th>
                                                    <td>{slider.title}</td>
                                                    <td>
                                                        <img className="img-thumbnail" src={slider.image ?? 'https://i.ibb.co/Wy1R6rV/no-photo.jpg'} alt={slider.title} />
                                                    </td>
                                                    <td>{slider.created_by}</td>
                                                    <td>
                                                        <div className="btn-group" role="group">
                                                            <button type="button" className="btn btn-success" onClick={() => handleEdit(slider._id)}>Edit</button>
                                                            <button type="button" className="btn btn-danger" onClick={() => handleDelete(slider._id)}>Delete</button>
                                                        </div>
                                                    </td>
                                                </tr>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <div className="d-flex">
                                {
                                    [...Array(pageCount).keys()]
                                        .map(number => <button
                                            className={`btn btn-info mx-2 ${number === page ? ' text-white' : ''}`}
                                            key={number}
                                            onClick={() => setPage(number)}
                                        >{number + 1}</button>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AddSlider;