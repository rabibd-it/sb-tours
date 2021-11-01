import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../Shared/Loader/Loader';

const AddService = () => {
    const { user } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [services, setServices] = useState([]);
    const [service, setService] = useState({});
    const [page, setPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const size = 5;

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {
        data.created_by = user.email ?? '';
        data.created_at = new Date();
        if (service._id) {
            axios.put(`https://afternoon-island-48419.herokuapp.com/service/${service._id}`, data)
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
            axios.post(`https://afternoon-island-48419.herokuapp.com/services`, data)
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
        axios.get(`https://afternoon-island-48419.herokuapp.com/services/?page=${page}&&size=${size}`)
            .then(function (response) {
                setServices(response.data.services);
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
        axios.get(`https://afternoon-island-48419.herokuapp.com/service/${id}`)
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
            axios.delete(`https://afternoon-island-48419.herokuapp.com/services/${id}`)
                .then(function (response) {
                    if (response.data.deletedCount > 0) {
                        toast.success(`Data Deleted Successfully`);
                        const remainingServices = services.filter(service => service._id !== id);
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
                                <h2><span>Service</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-5">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="row">
                                    <div className="col-12 col-md-8 col-lg-8">
                                        <div className="form-group">
                                            <input type="text" className="form-control" defaultValue={service.name ?? ''} placeholder="Name" {...register("name", { required: true })} />
                                            <div className="help-block with-errors">
                                                {errors.name && <span>This field is required</span>}
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
                                    <input type="text" className="form-control" defaultValue={service.icon ?? ''} placeholder="Font Awesome Icon" {...register("icon", { required: true })} />
                                    <div className="help-block with-errors">
                                        {errors.icon && <span>This field is required</span>}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <textarea cols="20" rows="8" className="form-control" defaultValue={service.description ?? ''} placeholder="Description"  {...register("description", { required: true })}></textarea>
                                    <div className="help-block with-errors">
                                        {errors.description && <span>This field is required</span>}
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button className="btn btn-primary" type="submit">{service._id ? 'Update' : 'Add'}</button>
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
                                            <th scope="col">Icon</th>
                                            <th scope="col">Created By</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            isLoading ? <Loader></Loader>
                                                :
                                                services.map((service, index) => <tr key={service._id}>
                                                    <th scope="row">{index + 1}</th>
                                                    <td>{service.name}</td>
                                                    <td>{service.icon}</td>
                                                    <td>{service.created_by}</td>
                                                    <td>
                                                        <div className="btn-group" role="group">
                                                            <button type="button" className="btn btn-success" onClick={() => handleEdit(service._id)}>Edit</button>
                                                            <button type="button" className="btn btn-danger" onClick={() => handleDelete(service._id)}>Delete</button>
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

export default AddService;