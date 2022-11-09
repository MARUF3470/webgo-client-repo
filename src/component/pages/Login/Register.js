import React, { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';

import img from '../../../pictures/img2.webp'
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Register = () => {
    const { userRegister, updateUserProfile, goolgeLogin } = useContext(AuthContext)
    const handleRegisterForm = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        const name = form.name.value;
        const photo = form.photo.value;
        if (password !== confirm) {
            return
        }
        userRegister(email, password)
            .then(res => {
                const user = res.user;
                // console.log(user)
                const profile = {
                    displayName: name, photoURL: photo
                }
                handleUserProfile(profile)
                form.reset();
                toast.success('Registration Completed')
            })
            .catch(err => console.error(err))

    }
    const handleUserProfile = profile => {
        updateUserProfile(profile)
            .then(res => {

            })
            .catch(err => console.error(err))
    }
    const handleGoogleLogin = () => {
        goolgeLogin()
            .then(res => {
                const user = res.user;
                console.log(user)
            })
            .catch(err => console.error(err))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <img src={img} className='w-3/4 rounded mt-2' alt="" />
                </div>
                <form onSubmit={handleRegisterForm} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" name='name' placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='photo' placeholder="photoURL" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name='confirm' placeholder="confirm password" className="input input-bordered" />
                            <label className="label">
                                <p>Allready Have an Account? <Link to='/login'>Login</Link></p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </div>
                    <button onClick={handleGoogleLogin} className="btn btn-outline">Google login</button>
                </form>
            </div>
        </div>
    );
};

export default Register;