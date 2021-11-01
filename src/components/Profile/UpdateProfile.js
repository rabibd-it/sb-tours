import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import Breadcrumb from '../Shared/Breadcrumb/Breadcrumb';

const UpdateProfile = () => {
    const { user, updateUserProfile } = useAuth();
    const [error, setError] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const { name } = data;
        updateUserProfile({
            displayName: name
        }).then(() => {
            setError('Successfully updated your profile');
        }).catch((error) => {
            setError(error.message);
        });
    };

    return (
        <div>
            <Breadcrumb title="Update Profile"></Breadcrumb>
            {/* Update Profile Start */}
            <section className="section-spacing">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title text-center">
                                <h2><span>Update Profile</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-5 mx-auto">
                            <div className="card p-5">
                                <div className="card-body">
                                    {error && <div className="text-danger fw-bold mb-3">{error}</div>}
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text" id="name"> <i className="fa fa-user"></i></span>
                                            <input type="text" className="form-control" id="name" defaultValue={user.displayName} placeholder="Name" {...register("name", { required: true })} />
                                            {errors.name && <span className="text-danger w-100">This field is required</span>}
                                        </div>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text" id="email"> <i className="fa fa-envelope-o"></i></span>
                                            <input type="email" disabled className="form-control" id="email" defaultValue={user.email} placeholder="Email" {...register("email")} />
                                        </div>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text" id="phone"> <i className="fa fa-phone"></i></span>
                                            <input type="text" className="form-control" id="phone" defaultValue={user.phoneNumber} placeholder="Phone" {...register("phone")} />
                                        </div>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text" id="photo"> <i className="fa fa-image"></i></span>
                                            <input type="file" className="form-control" id="photo" {...register("photo")} />
                                        </div>
                                        <div className="d-grid">
                                            <button className="btn btn-primary" type="submit">Update</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Update Profile End */}
        </div>
    );
};

export default UpdateProfile;