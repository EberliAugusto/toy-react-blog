import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import navigationReducer from './redux/navigationReducer';
import articlesReducer from './redux/articlesReducer';
import Routing from './layouts/Routing';
import ErrorBoundary from './components/ErrorBoundary';


export const store = configureStore({
        reducer: {
                navigation: navigationReducer,
                articles: articlesReducer
        }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <React.StrictMode>
                <ErrorBoundary>
                        <Provider store={store}>
                                <CssBaseline />
                                <BrowserRouter>
                                        <Routing />
                                </BrowserRouter>
                        </Provider>
                </ErrorBoundary>
        </React.StrictMode>
);