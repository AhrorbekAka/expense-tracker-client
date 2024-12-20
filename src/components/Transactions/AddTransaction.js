import React, { useState } from "react";
import { TextField, Button, MenuItem, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AddTransaction = () => {
    const [transaction, setTransaction] = useState({
        type: "",
        category: "",
        amount: "",
        date: "",
        description: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setTransaction({ ...transaction, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Transaction Added:", transaction);
        navigate("/dashboard");
    };

    return (
        <Grid container justifyContent="center" style={{ padding: 20 }}>
            <Grid item xs={12} sm={6}>
                <Typography variant="h4" align="center">Add Transaction</Typography>
                <form onSubmit={handleSubmit} style={{ marginTop: 20 }}>
                    <TextField
                        select
                        label="Type"
                        name="type"
                        value={transaction.type}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        required
                    >
                        <MenuItem value="Income">Income</MenuItem>
                        <MenuItem value="Expense">Expense</MenuItem>
                    </TextField>
                    <TextField
                        label="Category"
                        name="category"
                        value={transaction.category}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        label="Amount"
                        name="amount"
                        type="number"
                        value={transaction.amount}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        label="Date"
                        name="date"
                        type="date"
                        value={transaction.date}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        InputLabelProps={{ shrink: true }}
                        required
                    />
                    <TextField
                        label="Description"
                        name="description"
                        value={transaction.description}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        multiline
                        rows={3}
                    />
                    <Button variant="contained" color="primary" type="submit" fullWidth style={{ marginTop: 20 }}>
                        Add
                    </Button>
                </form>
            </Grid>
        </Grid>
    );
};

export default AddTransaction;
