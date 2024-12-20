import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8008/api' });

// Intercept requests to attach auth tokens
API.interceptors.request.use((req) => {
    const token = localStorage.getItem('token');
    if (token) req.headers.Authorization = `Bearer ${token}`;
    return req;
});

export const signUp = (userData) => API.post('/auth/signup', userData);
export const login = (credentials) => API.post('/auth/login', credentials);

export const fetchTransactions = () => API.get('/transactions');
export const addTransaction = (data) => API.post('/transactions', data);

export const fetchBudgets = () => API.get('/budgets');
export const addBudget = (data) => API.post('/budgets', data);
