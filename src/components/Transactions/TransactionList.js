import React, { useState, useEffect } from "react";
import axios from "../../api/api";

const TransactionList = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const response = await axios.get("/transactions");
                setTransactions(response.data);
            } catch (error) {
                alert("Error fetching transactions");
            }
        };
        fetchTransactions();
    }, []);

    return (
        <div className="container">
            <h2>Your Transactions</h2>
            <ul>
                {transactions.map((t) => (
                    <li key={t.id}>{t.description} - ${t.amount}</li>
                ))}
            </ul>
        </div>
    );
};

export default TransactionList;
