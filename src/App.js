import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Dashboard from './components/Dashboard';
import AddTransaction from "./components/Transactions/AddTransaction";
import AddBudget from "./components/Budgets/AddBudget";
import SpendingTrends from "./components/spending/SpendingTrends";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/dashboard" />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/add-transaction" element={<AddTransaction />} />
                <Route path="/set-budget" element={<AddBudget />} />
                <Route path="/spending" element={<SpendingTrends />} />

            </Routes>
        </Router>
    );
}

export default App;
