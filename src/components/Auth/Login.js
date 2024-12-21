// import React, { useState } from 'react';
// import { TextField, Button, Container } from '@mui/material';
//
// const Login = () => {
//     const [form, setForm] = useState({ username: '', password: '' });
//
//     const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
//
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(form);
//     };
//
//     return (
//         <Container maxWidth="sm">
//             <form onSubmit={handleSubmit}>
//                 <TextField
//                     label="Username"
//                     name="username"
//                     variant="outlined"
//                     fullWidth
//                     margin="normal"
//                     onChange={handleChange}
//                 />
//                 <TextField
//                     label="Password"
//                     name="password"
//                     type="password"
//                     variant="outlined"
//                     fullWidth
//                     margin="normal"
//                     onChange={handleChange}
//                 />
//                 <Button type="submit" variant="contained" color="primary" fullWidth>
//                     Login
//                 </Button>
//             </form>
//         </Container>
//     );
// };
//
// export default Login;

import React, {useState} from "react";
import {TextField, Button, Grid, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import AuthLayout from "./AuthLayout";
import {login} from "../../api/api"

const Login = () => {
    const [formData, setFormData] = useState({username: "", password: ""});
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(login(formData));
        console.log("Login data:", formData);
        navigate("/dashboard");
    };

    return (
        <AuthLayout title="Login">
            <form onSubmit={handleSubmit}>
                <Grid container direction="column" spacing={2}>
                    <Grid item>
                        {/*<TextField*/}
                        {/*    label="Email"*/}
                        {/*    name="email"*/}
                        {/*    type="email"*/}
                        {/*    value={formData.email}*/}
                        {/*    onChange={handleChange}*/}
                        {/*    fullWidth*/}
                        {/*    required*/}
                        {/*/>*/}
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
                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            Login
                        </Button>
                    </Grid>
                    <Grid item>
                        <Typography variant="body2" align="center">
                            Don’t have an account?{" "}
                            <Button variant="text" onClick={() => navigate("/signup")}>
                                Sign Up
                            </Button>
                        </Typography>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    );
};

export default Login;
