import React from "react";
import { Bar } from "react-chartjs-2";
import { Grid, Typography } from "@mui/material";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SpendingTrends = () => {
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                label: "Expenses",
                data: [500, 700, 800, 600, 1400, 900],
                backgroundColor: "rgb(99,255,237)",
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { position: "top" },
            title: { display: true, text: "Spending Trends" },
        },
    };

    return (
        <Grid container justifyContent="center" style={{ padding: 20 }}>
            <Grid item xs={12} sm={8}>
                <Typography variant="h4" align="center">Spending Trends</Typography>
                <Bar data={data} options={options}/>
            </Grid>
        </Grid>
    );
};

export default SpendingTrends;