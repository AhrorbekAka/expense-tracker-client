import React, { useState } from "react";
import { TextField, Button, Grid, Typography, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AddBudget = () => {
    const today = new Date();
    const currentMonth = today.toLocaleString("en", { month: "long" });
    const currentYear = today.getFullYear();

    const [budget, setBudget] = useState({
        month: currentMonth,
        year: currentYear,
        amount: "",
    });

    const navigate = useNavigate();

    const months = [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",
    ];

    const years = Array.from({ length: 21 }, (_, i) => currentYear - 10 + i); // Range of years from -10 to +10

    const handleChange = (e) => {
        setBudget({ ...budget, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Budget Set:", budget);
        navigate("/dashboard");
    };

    return (
        <Grid container justifyContent="center" style={{ padding: 20 }}>
            <Grid item xs={12} sm={6}>
                <Typography variant="h4" align="center">Set Budget</Typography>
                <form onSubmit={handleSubmit} style={{ marginTop: 20 }}>
                    <TextField
                        select
                        label="Month"
                        name="month"
                        value={budget.month}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        required
                    >
                        {months.map((month) => (
                            <MenuItem key={month} value={month}>{month}</MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        select
                        label="Year"
                        name="year"
                        value={budget.year}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        required
                    >
                        {years.map((year) => (
                            <MenuItem key={year} value={year}>{year}</MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        label="Budget Amount"
                        name="amount"
                        type="number"
                        value={budget.amount}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <Button variant="contained" color="primary" type="submit" fullWidth style={{ marginTop: 20 }}>
                        Set Budget
                    </Button>
                </form>
            </Grid>
        </Grid>
    );
};

export default AddBudget;