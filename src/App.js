import React from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Dashboard from './components/Dashboard';
import AddTransaction from "./components/Transactions/AddTransaction";
import AddBudget from "./components/Budgets/AddBudget";
import SpendingTrends from "./components/spending/SpendingTrends";
import Layout from "./components/Layout/Layout";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/login"/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route
                    path="/dashboard"
                    element={
                        <Layout>
                            <Dashboard/>
                        </Layout>
                    }/>
                <Route
                    path="/add-transaction"
                    element={
                        <Layout>
                            <AddTransaction/>
                        </Layout>
                    }/>
                <Route
                    path="/set-budget"
                    element={
                        <Layout>
                            <AddBudget/>
                        </Layout>
                    }/>
                <Route
                    path="/spending-trends"
                    element={
                        <Layout>
                            <SpendingTrends/>
                        </Layout>
                    }/>

            </Routes>
        </Router>
    );
}

export default App;
