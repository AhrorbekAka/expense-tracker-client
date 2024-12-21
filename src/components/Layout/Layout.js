import React from "react";
import {AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText, CssBaseline, Container} from "@mui/material";
import {useNavigate} from "react-router-dom";

const drawerWidth = 240;

const Layout = ({children}) => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    const menuItems = [
        {text: "Dashboard", path: "/dashboard"},
        {text: "Add Transaction", path: "/add-transaction"},
        {text: "Set Budget", path: "/set-budget"},
        {text: "Spending Trends", path: "/spending-trends"},
    ];

    return (
        <div style={{display: "flex"}}>
            <CssBaseline/>
            {/* AppBar */}
            <AppBar position="fixed" style={{zIndex: 1201}}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        Expense Tracker
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* Drawer */}
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {width: drawerWidth, boxSizing: "border-box"},
                }}
            >
                <Toolbar/>
                <List>
                    {menuItems.map((item) => (
                        <ListItem button key={item.text} onClick={() => handleNavigation(item.path)}>
                            <ListItemText primary={item.text}/>
                        </ListItem>
                    ))}
                </List>
            </Drawer>

            {/* Main Content */}
            <Container
                component="main"
                style={{
                    flexGrow: 1,
                    padding: 24,
                    marginTop: 64, // To account for AppBar height
                    marginLeft: drawerWidth,
                }}
            >
                {children}
            </Container>
        </div>
    );
};

export default Layout;
// import React from "react";
// import { AppBar, Toolbar, Typography, Container, Box, IconButton } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu"; // For a mobile menu icon
// import { useNavigate } from "react-router-dom";
//
// const Layout = ({ children }) => {
//     const navigate = useNavigate();
//
//     return (
//         <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
//             {/* Navbar */}
//             <AppBar position="static" sx={{ bgcolor: "primary.main" }}>
//                 <Toolbar>
//                     <IconButton
//                         edge="start"
//                         color="inherit"
//                         aria-label="menu"
//                         sx={{ display: { xs: "block", sm: "none" }, mr: 2 }}
//                     >
//                         <MenuIcon />
//                     </IconButton>
//                     <Typography
//                         variant="h6"
//                         component="div"
//                         sx={{ flexGrow: 1, fontSize: { xs: "1rem", sm: "1.5rem" } }}
//                     >
//                         Expense Tracker
//                     </Typography>
//                     <button
//                         style={{
//                             color: "white",
//                             background: "transparent",
//                             border: "none",
//                             cursor: "pointer",
//                             fontSize: "1rem",
//                         }}
//                         onClick={() => navigate("/login")}
//                     >
//                         Logout
//                     </button>
//                 </Toolbar>
//             </AppBar>
//
//             {/* Main Content */}
//             <Container
//                 maxWidth="md"
//                 sx={{
//                     flex: 1,
//                     mt: 2,
//                     mb: 2,
//                     px: { xs: 2, sm: 3 },
//                 }}
//             >
//                 {children}
//             </Container>
//
//             {/* Footer (Optional) */}
//             <Box
//                 component="footer"
//                 sx={{
//                     py: 2,
//                     textAlign: "center",
//                     bgcolor: "primary.light",
//                     color: "white",
//                     fontSize: { xs: "0.8rem", sm: "1rem" },
//                 }}
//             >
//                 © 2024 Expense Tracker App
//             </Box>
//         </Box>
//     );
// };
//
// export default Layout;
