import React from "react";
import { Container, Grid, Paper, Typography } from "@mui/material";

const AuthLayout = ({ children, title }) => {
    return (
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
                    <Grid item style={{ width: "100%" }}>
                        {children}
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
};

export default AuthLayout;
