import React from "react";
import {Container, Grid, Paper, Typography} from "@mui/material";
import {Navigate} from "react-router-dom";

const AuthLayout = ({children, title}) => {
    const token = localStorage.getItem('ExpenseTrackerToken');

    return token ?
        <Navigate to="/dashboard"/> :
        (
            <Container maxWidth="xs">
                <Paper
                    elevation={3}
                    style={{
                        marginTop: "100px",
                        padding: "20px",
                        borderRadius: "8px",
                    }}
                >
                    <Grid container direction="column" alignItems="center" spacing={2}>
                        <Grid item>
                            <Typography variant="h5" component="h1" align="center">
                                {title}
                            </Typography>
                        </Grid>
                        <Grid item style={{width: "100%"}}>
                            {children}
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        );
};

export default AuthLayout;
