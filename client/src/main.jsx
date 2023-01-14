import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";;
import { store } from './store';;
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import './index.css';


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain="pfreactbooks.us.auth0.com"
      clientId="9IZgG6zW44CbTKsAamnybc6m7GmHZ9lR"
      redirectUri={window.location.origin}
      audience="https://pfreactbooks.us.auth0.com/api/v2/"
      scope="read:current_user update:current_user_metadata"
    >
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </Auth0Provider>
  </React.StrictMode>,
);
