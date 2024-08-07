import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';
import "./index.css"


const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("")
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://todos-backend-sravan.onrender.com/api/users/register', {username, email, password });
            console.log(response)
            alert("User Registration Successful")
            navigate('/login');
            
        } catch (error) {
            console.log(error);
            setError(error.response.data.message)
            
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="register-cont">
                <h2 className="mb-4 text-center">Register</h2>
                <p className="text-center mb-5">
                    Already have an account? <Link className="text-decoration-none" to="/login">Login here...</Link>
                </p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Username*"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email*"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password*"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {error && <p className="error-msg">{error}*</p>}
                    <div className="text-center mt-4">
                        <button type="submit" className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className="mt-5">
                    Note: Please wait for some time after clicking register,
                    <span className="text-danger font-weight-bold"> Backend is slow</span>
                </p>
            </div>
        </div>
    );
}

export default Register;
