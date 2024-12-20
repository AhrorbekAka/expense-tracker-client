// import React, { useEffect, useState } from 'react';
// import { fetchTransactions, fetchBudgets } from '../api/api';
//
// const Dashboard = () => {
//     const [transactions, setTransactions] = useState([]);
//     const [budgets, setBudgets] = useState([]);
//
//     useEffect(() => {
//         const fetchData = async () => {
//             const transactionsData = await fetchTransactions();
//             const budgetsData = await fetchBudgets();
//             setTransactions(transactionsData.data);
//             setBudgets(budgetsData.data);
//         };
//         fetchData();
//     }, []);
//
//     return (
//         <div>
//             <h1>Dashboard</h1>
//             <h2>Transactions</h2>
//             <ul>
//                 {transactions.map((tx) => (
//                     <li key={tx.id}>
//                         {tx.type}: {tx.amount} ({tx.category})
//                     </li>
//                 ))}
//             </ul>
//             <h2>Budgets</h2>
//             <ul>
//                 {budgets.map((budget) => (
//                     <li key={budget.id}>
//                         {budget.month}/{budget.year}: {budget.amount}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };
//
// export default Dashboard;


import React from "react";
import { Button, Card, CardContent, Typography, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();

    const handleAddTransaction = () => navigate("/add-transaction");
    const handleSetBudget = () => navigate("/set-budget");

    return (
        <Grid container spacing={3} justifyContent="center" style={{ padding: 20 }}>
            <Grid item xs={12}>
                <Typography variant="h4" align="center">Dashboard</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Card>
                    <CardContent>
                        <Typography variant="h6">Total Budget</Typography>
                        <Typography variant="h5">$5000</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Card>
                    <CardContent>
                        <Typography variant="h6">Total Expenses</Typography>
                        <Typography variant="h5">$2000</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Card>
                    <CardContent>
                        <Typography variant="h6">Remaining Budget</Typography>
                        <Typography variant="h5">$3000</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} style={{ textAlign: "center" }}>
                <Button variant="contained" color="primary" onClick={handleAddTransaction} style={{ margin: 5 }}>
                    Add Transaction
                </Button>
                <Button variant="contained" color="secondary" onClick={handleSetBudget} style={{ margin: 5 }}>
                    Set Budget
                </Button>
            </Grid>
        </Grid>
    );
};

export default Dashboard;