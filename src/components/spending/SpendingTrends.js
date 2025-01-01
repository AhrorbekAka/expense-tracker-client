import React, {useEffect, useState} from "react";
import {Bar} from "react-chartjs-2";
import {Grid, Typography} from "@mui/material";
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from "chart.js";
import {fetchExpenseStatistics, fetchTransactions} from "../../api/api";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SpendingTrends = () => {

    const [transactions, setTransactions] = useState([]);
    const [expensesDataSet, setExpensesDataSet] = useState([])
    const [months, setMonths] = useState([])

    useEffect( () => {
        fetchStatistics()
    }, []);

    const fetchStatistics = async () => {
        await fetchExpenseStatistics().then(res => {
            setMonths([])
            setExpensesDataSet([])
            res.data.map(t => {
                console.log(t);
                // if (t.type === 'EXPENSE') {
                    setMonths(m=>[...m, t.month+' '+t.year])
                    setExpensesDataSet(expense => [...expense, t.totalExpenses])
                // }
            })
        })
    }

    const data = {
        // labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Nov", "Dec"],
        // datasets: [
        //     {
        //         label: "Expenses",
        //         data: [500, 700, 800, 600, 1400, 900],
        //         backgroundColor: "rgb(99,255,237)",
        //     },
        // ],
        labels: months,
        datasets: [
            {
                label: "Expenses",
                data: expensesDataSet, // Expense data
                backgroundColor: "rgba(255, 99, 132, 0.7)", // Color for expenses
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 1,
            },
            {
                label: "Budgets",
                data: [1000, 1200, 1100, 1000, 1200, 1300], // Budget data
                backgroundColor: "rgba(54, 162, 235, 0.7)", // Color for budgets
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1,
            },
        ],
    };

    // const options = {
    //     responsive: true,
    //     plugins: {
    //         legend: { position: "top" },
    //         title: { display: true, text: "Spending Trends" },
    //     },
    // };
    const options = {
        responsive: true,
        plugins: {
            legend: {position: "top"}, // Legend at the top
            title: {display: true, text: "Spending Trends"}, // Chart title
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: "Months",
                },
            },
            y: {
                title: {
                    display: true,
                    text: "Amount ($)",
                },
            },
        },
    };

    return (
        <Grid container justifyContent="center" style={{padding: 20}}>
            <Grid item xs={12} sm={8}>
                <Typography variant="h4" align="center">Spending Trends</Typography>
                <Bar data={data} options={options}/>
            </Grid>
        </Grid>
    );
};

export default SpendingTrends;