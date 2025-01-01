import React, {useState} from "react";
import {Alert, Button, Grid, Snackbar, TextField, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import AuthLayout from "./AuthLayout";
import {login} from "../../api/api";

const Login = () => {
    const [formData, setFormData] = useState({phoneNumber: "", password: ""});
    const [error, setError] = useState("")


    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await login(formData)
            if (res.status === 200) {
                let userToken = res.data.token
                localStorage.setItem("ExpenseTrackerToken", userToken)
                navigate("/dashboard");
            }
        } catch (e) {
            setFormData({...formData, password: ""})
            setError("Incorrect phone number or password.")
            setTimeout(() => setError(""), 3000)
        }
    };

    const closeSnackbar = () => {
        setError("")
    }

    return (
        <AuthLayout title="Login">
            <Snackbar open={error.length > 0} autoHideDuration={3000} onClose={closeSnackbar}>
                <Alert onClose={closeSnackbar} severity="error" sx={{width: "100%"}}>
                    {error}
                </Alert>
            </Snackbar>
            <form onSubmit={handleSubmit}>
                <Grid container direction="column" spacing={2}>
                    <Grid item>
                        <TextField
                            label="Phone number
                            "
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
