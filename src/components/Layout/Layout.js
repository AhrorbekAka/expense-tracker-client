import React from 'react';
import {
    AppBar,
    Box,
    Container,
    CssBaseline,
    Drawer,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Toolbar,
    Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {useNavigate} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

const drawerWidth = 240;

const Layout = ({children}) => {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    const signOut = () => {
        localStorage.removeItem("ExpenseTrackerToken")
        navigate('/login')
    }

    const menuItems = [
        {text: "Dashboard", path: "/dashboard"},
        {text: "Add Transaction", path: "/add-transaction"},
        {text: "Set Budget", path: "/set-budget"},
        {text: "Spending Trends", path: "/spending-trends"},
        {text: "Settings", path: "/settings"},
    ];

    const drawer = (
        <PrivateRoute>
            <Toolbar/>
            <List>
                {menuItems.map((item) => (
                    <ListItem button key={item.text} onClick={() => handleNavigation(item.path)}>
                        <ListItemText primary={item.text}/>
                    </ListItem>
                ))}

                <ListItem button key={'sign-out'} onClick={signOut}>
                    <ListItemText primary={'Sign out'}/>
                </ListItem>
            </List>
        </PrivateRoute>
    );

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            {/* AppBar */}
            <AppBar position="fixed" sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{mr: 2, display: {sm: 'none'}}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Expense Tracker
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* Drawer */}
            <Box
                component="nav"
                sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: {xs: 'block', sm: 'none'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: {xs: 'none', sm: 'block'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>

            {/* Main Content */}
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: {sm: `calc(100% - ${drawerWidth}px)`},
                }}
            >
                <Toolbar/>
                <Container>
                    <Grid container spacing={3}>
                        {/* Expense Cards */}
                        {/*{[...Array(8)].map((_, index) => (*/}
                        {/*    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>*/}
                        {/*        <Card>*/}
                        {/*            <CardContent>*/}
                        {/*                <Typography variant="h6">Expense {index + 1}</Typography>*/}
                        {/*                <Typography variant="body2">Category: Food</Typography>*/}
                        {/*                <Typography variant="body2">Amount: $50</Typography>*/}
                        {/*            </CardContent>*/}
                        {/*        </Card>*/}
                        {/*    </Grid>*/}
                        {/*))}*/}
                        {children}
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default Layout;
