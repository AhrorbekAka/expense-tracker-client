import React, { useState } from 'react';
import { signUp } from '../../api/api';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [form, setForm] = useState({ username: '', password: '', email: '' });
    const navigate = useNavigate();

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signUp(form);
            navigate('/login');
        } catch (err) {
            console.error(err.response?.data || 'Signup error');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder="Username" onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} />
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default Signup;
