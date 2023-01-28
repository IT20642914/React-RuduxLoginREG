import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Importing the Bootstrap CSS
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.css'
import './interceptors/axios'

import 'react-toastify/dist/ReactToastify.css';

import { store,persistore } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
<Provider store={store} >
<PersistGate persistor={persistore}>
    <App />
  </PersistGate>

    </Provider>
  </React.StrictMode>
);


