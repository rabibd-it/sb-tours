import React, { useEffect, useState } from 'react';
import Breadcrumb from '../Shared/Breadcrumb/Breadcrumb';
import Loader from '../Shared/Loader/Loader';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyOrders = () => {
    const { user } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [orders, setOrders] = useState([]);

    // load my order api data
    useEffect(() => {
        axios.get(`https://afternoon-island-48419.herokuapp.com/my-orders?email=${user.email}`)
            .then(function (res) {
                setOrders(res.data);
            })
            .catch(function (error) {
                console.log(error);
            });
        setIsLoading(false);
    }, [setOrders]);

    // Change Status
    const handleStatus = (id, status) => {
        const proceed = window.confirm('Are you sure, you want to change status?');
        if (proceed) {
            const data = { status: status === 'pending' ? 'complete' : 'pending' };
            axios.put(`https://afternoon-island-48419.herokuapp.com/my-order/${id}`, data)
                .then(res => {
                    toast.success(`Status Updated Successfully`);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
    // Delete Service
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            axios.delete(`https://afternoon-island-48419.herokuapp.com/my-orders/${id}`)
                .then(function (response) {
                    if (response.data.deletedCount > 0) {
                        toast.success(`Data Deleted Successfully`);
                        const remainingOrders = orders.filter(order => order._id !== id);
                        setOrders(remainingOrders);
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
            <Breadcrumb title="My Orders"></Breadcrumb>
            {
                orders.length > 0 && <section className="section-spacing">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-title text-center">
                                    <h2><span>My Orders</span></h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {
                                isLoading ? <Loader></Loader>
                                    :
                                    <div className="table-responsive">
                                        <table className="table table-hover table-striped">
                                            <thead className="bg-dark text-white">
                                                <tr>
                                                    <th>#Sl</th>
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>Phone</th>
                                                    <th>Person</th>
                                                    <th>Description</th>
                                                    <th>Status</th>
                                                    <th>Created</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    orders.map((order, index) => <tr key={order._id}>
                                                        <td>{index + 1}</td>
                                                        <td>{order.name}</td>
                                                        <td>{order.email}</td>
                                                        <td>{order.phone}</td>
                                                        <td>{order.person}</td>
                                                        <td>{order.description.slice(0, 20)}</td>
                                                        <td>
                                                            {
                                                                order.status && order.status === 'pending' ? <span className="badge bg-danger">Pending</span>
                                                                    :
                                                                    <span className="badge bg-success">Complete</span>
                                                            }
                                                        </td>
                                                        <td>{order.created_at}</td>
                                                        <td>
                                                            <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                                                                <button type="button" className="btn btn-success" onClick={() => handleStatus(order._id, order.status)}>Change Status</button>
                                                                <button type="button" className="btn btn-danger" onClick={() => handleDelete(order._id)}>Delete</button>
                                                            </div>
                                                        </td>
                                                    </tr>)
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                            }
                        </div>
                    </div>
                </section>
            }
        </div>
    );
};

export default MyOrders;