import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import img from '../../../pictures/img2.webp'
import toast, { Toaster } from 'react-hot-toast';
import useTitle from '../../../hooks/useTitle';
import { useState } from 'react';

const Login = () => {
    useTitle('Login')
    const [error, setError] = useState('')
    const { userLogin, goolgeLogin } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const handleLoginForm = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        userLogin(email, password)
            .then(res => {
                form.reset()
                toast.success('Login Successfully')
                // navigate(from, { replace: true })
                const user = res.user;

                const currentUser = {
                    email: user.email
                }

                console.log(currentUser);

                // get jwt token
                fetch('https://webgo-personal-developer-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        // local storage is the easiest but not the best place to store jwt token
                        localStorage.setItem('genius-token', data.token);
                        navigate(from, { replace: true });
                    });
            })
            .catch(err => {
                console.error(err)
                setError(err.message)
            })

    }
    const handleGoogleLogin = () => {
        goolgeLogin()
            .then(res => {
                toast.success('Login Successfully')
                navigate(from, { replace: true })
            })
            .catch(err => {
                console.error(err)
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <img src={img} className='lg:w-3/4 mt-2 rounded' alt="" />
                </div>
                <form onSubmit={handleLoginForm} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
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
                            <p>{error}</p>
                            <label className="label">
                                <p>Do not have an account? <Link className='btn-link' to='/register'>Register</Link></p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </div>
                    <button onClick={handleGoogleLogin} className="btn btn-outline">Google login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;