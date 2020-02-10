import React from 'react';
import AppRoutes from './app.routing';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { Provider } from 'react-redux';
import store from './store';
// 
const App = () => {
    return (
        <div>
            <Provider store={store}>
                <AppRoutes />
            </Provider>
            <ToastContainer />
        </div>
    )
}

export default App;