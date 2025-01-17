import { useState } from 'react';
import axios from 'axios';
import { useNavigate ,Link} from 'react-router-dom';
import "./index.css"

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("")
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://todos-backend-sravan.onrender.com/api/users/login', { email, password });
            
            console.log(response)
            localStorage.setItem('token', response.data.token);
            alert("Login Successful")
            navigate('/todos');
        } catch (error) {
            console.log(error); 
            setError(error.response.data.message)
        
            
        }
    };



    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="login-cont">
                <h2 className="mb-4 text-center">Login</h2>
                <p className="mb-5 text-center">
                    Don't have an account? <Link className="text-decoration-none" to="/register">Create One</Link>
                </p>
                <form onSubmit={handleSubmit}>
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
                        <button className="btn btn-primary" type="submit">Login</button>
                    </div>
                </form>
                <p className="mt-5">
                    Note: Please wait for some time after clicking login,
                    <span className="text-danger font-weight-bold"> Backend is slow/ Restrart</span>
                </p>
            </div>
        </div>
    );
}

export default Login;
