import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { FaEdit, FaTrash } from 'react-icons/fa';
import "./index.css"

const Todos = () => {
    const [todos, setTodos] = useState([]);
    const [title, setTitle] = useState('');
    const token = localStorage.getItem('token');
    const navigate = useNavigate()

    useEffect(() => {
        if (!token) {
            navigate('/login');
            return;
        }

        const fetchTodos = async () => {
                try {
                    const response = await axios.get('https://todos-backend-sravan.onrender.com/api/todos', {
                        headers: { Authorization: `Bearer ${token}` }
                    });
                    console.log(response)
                    setTodos(response.data.todos);
                } catch (error) {
                    console.log(error);
                }
            
        
        
          
        };
        fetchTodos();
    }, [token,navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://todos-backend-sravan.onrender.com/api/todos', { title }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            console.log(response)
            setTodos([...todos, response.data.newTodo]);
            setTitle('');

        } catch (error) {
            console.log(error);
            alert(error.response.data.message)
            setTitle("")
        }
    };

    const handleUpdateTodo = async (id, completed) => {
        try {
            const response = await axios.put(`https://todos-backend-sravan.onrender.com/api/todos/${id}`,
                { completed: !completed }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            console.log(response.data);
            setTodos(todos.map(todo =>
                todo._id === id ? { ...todo, completed: response.data.updateTodo.completed } : todo
            ));
        } catch (error) {
            console.log(error);
           
        }
    };


 
    const handleLogout =  () => {
    localStorage.removeItem("token")
     navigate("/login")
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://todos-backend-sravan.onrender.com/api/todos/${id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setTodos(todos.filter(todo => todo._id !== id));
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="todos-bg-container">
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h1 className="todos-heading">Todos</h1>
                        <div className='mt-3 mb-3  d-flex flex-row align-items-center justify-content-between'>
                            <h1 className="create-task-heading">
                                Create <span className="create-task-heading-subpart">Task</span>
                            </h1>

                            <button onClick={()=>handleLogout()} className='btn btn-danger'>
                                Logout
                            </button>

                        </div>



                        <form onSubmit={handleSubmit} className="mb-4">
                            <div>
                                <input
                                    type="text"
                                    className="todo-user-input"
                                    placeholder="Add a task"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    required
                                />
                                <button className="button" type="submit">
                                    Add
                                </button>
                            </div>
                        </form>
                        <h1 className="todo-items-heading">
                            My <span className="todo-items-heading-subpart">Tasks</span>
                        </h1>

                        <ul className="todo-items-container">
                            {todos.map(todo => (
                                <li key={todo._id} className="todo-item-container d-flex flex-row">
                                    <input
                                        type="checkbox"
                                        className="checkbox-input"
                                        checked={todo.completed}
                                        onChange={() => handleUpdateTodo(todo._id, todo.completed)}
                                    />
                                    <div className="label-container d-flex flex-row">
                                        <label
                                            className={`checkbox-label ${todo.completed ? "completed" : ""}`}
                                        >
                                            {todo.title}
                                        </label>
                                        <div className="delete-icon-container">
                                            {/* <i
                                                className="far fa-trash-alt delete-icon"
                                            ></i> */}
                                            <button onClick={() => handleDelete(todo._id)} className="btn delete-icon">
                                                <FaEdit />
                                            </button>
                                            <button onClick={() => handleDelete(todo._id)} className="btn delete-icon">
                                                <FaTrash />
                                            </button>
                                        </div>
                                    </div>



                                </li>
                            ))}
                        </ul>

                    </div>

                </div>
            </div>

        </div>
    );
}

export default Todos;
