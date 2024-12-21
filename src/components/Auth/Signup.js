// import React, { useState } from 'react';
// import { signUp } from '../../api/api';
// import { useNavigate } from 'react-router-dom';
//
// const Signup = () => {
//     const [form, setForm] = useState({ username: '', password: '', email: '' });
//     const navigate = useNavigate();
//
//     const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
//
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await signUp(form);
//             navigate('/login');
//         } catch (err) {
//             console.error(err.response?.data || 'Signup error');
//         }
//     };
//
//     return (
//         <form onSubmit={handleSubmit}>
//             <input type="text" name="username" placeholder="Username" onChange={handleChange} />
//             <input type="password" name="password" placeholder="Password" onChange={handleChange} />
//             <input type="email" name="email" placeholder="Email" onChange={handleChange} />
//             <button type="submit">Sign Up</button>
//         </form>
//     );
// };
//
// export default Signup;
import React, { useState } from "react";
import { TextField, Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import {signUp} from "../../api/api";

const Signup = () => {
    const [formData, setFormData] = useState({
        username:"",
        email: "",
        phoneNumber:"",
        password: "",
        confirmPassword: "",
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        console.log(signUp(formData));
        console.log("Signup data:", formData);
        navigate("/login");
    };

    return (
        <AuthLayout title="Sign Up">
            <form onSubmit={handleSubmit}>
                <Grid container direction="column" spacing={2}>
                    <Grid item>
                        <TextField
                            label="Username"
                            name="username"
                            type="text"
                            value={formData.username}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            label="Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            label="Phone number"
                            name="phoneNumber"
                            type="text"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            label="Password"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            label="Confirm Password"
                            name="confirmPassword"
                            type="password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid item>
                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            Sign Up
                        </Button>
                    </Grid>
                    <Grid item>
                        <Typography variant="body2" align="center">
                            Already have an account?{" "}
                            <Button variant="text" onClick={() => navigate("/login")}>
                                Login
                            </Button>
                        </Typography>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    );
};

export default Signup;
