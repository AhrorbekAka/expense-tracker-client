import React, {useEffect, useState} from "react";
import {Button, Card, CardContent, Grid, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {fetchBudgets, fetchTransactions} from "../api/api";

const Dashboard = () => {
    const [transactions, setTransactions] = useState([]);
    const [expenses, setExpenses] = useState(0);
    const [budgets, setBudgets] = useState({amount: 0});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('ExpenseTrackerToken');
            try {
                await fetchTransactions()
                    .then(res => {
                        setTransactions(res.data)
                        calculateExpenses(res.data)
                    })

                await fetchBudgets()
                    .then(res => {
                        setBudgets(res.data);
                        setLoading(false);
                    }).catch(error => {
                        console.error('Error fetching data:', error);
                        setLoading(false);
                    })
            } catch (e) {
                console.log(e);
            }
        };
        fetchData()
    }, []);

    const calculateExpenses = (transactions) => {
        let sum = 0;
        for (const transaction of transactions) {
            if(transaction.type === 'EXPENSE')
                sum+=transaction.amount
        }
        setExpenses(sum)
    }

    const navigate = useNavigate();

    const handleAddTransaction = () => navigate("/add-transaction");
    const handleSetBudget = () => navigate("/set-budget");

    if (loading) return <p>Loading...</p>;

    return (
        <Grid container spacing={3} justifyContent="center" style={{padding: 20}}>
            <Grid item xs={12}>
                <Typography variant="h4" align="center">Dashboard</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Card>
                    <CardContent>
                        <Typography variant="h6">Total Budget</Typography>
                        <Typography variant="h5">{budgets.amount}</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Card>
                    <CardContent>
                        <Typography variant="h6">Total Expenses</Typography>
                        <Typography variant="h5">{expenses}</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Card>
                    <CardContent>
                        <Typography variant="h6">Remaining Budget</Typography>
                        <Typography variant="h5">{budgets.amount-expenses}</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} style={{textAlign: "center"}}>
                <Button variant="contained" color="primary" onClick={handleAddTransaction} style={{margin: 5}}>
                    Add Transaction
                </Button>
                <Button variant="contained" color="secondary" onClick={handleSetBudget} style={{margin: 5}}>
                    Set Budget
                </Button>
            </Grid>
        </Grid>
    );
};

export default Dashboard;