import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import App from './App';
import topicReducer from './reducers/topics'
import { ContextProvider } from './context';
import './index.css';

const store = configureStore({ 
    reducer: {
        topics: topicReducer
    },
    middleware: [thunk]
});

ReactDOM.render(
    <Provider store={store}>
        <ContextProvider>
            <App />
        </ContextProvider>
    </Provider>,
    document.getElementById('root'));