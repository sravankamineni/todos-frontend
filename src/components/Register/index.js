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
        <div className="register-cont">
            <h2 className="mb-4"> Register</h2>
            <p className='register-route'>Already have an account  <Link className='link-text text-success' to="/login"> Login here</Link></p>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input
                        type="test"
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
                </div >
                {error && <p className='error-msg'>{error}*</p>}
                <div className='text-center mt-4'>
                    <button type="submit" className="btn btn-primary">Register</button>
                </div>
                
            </form>
            <p className='mt-5'>Note: Pls wait for some time, <span className='text-warning font-weight-bold'>Backend is slow</span></p>
        </div>
    );
}

export default Register;
