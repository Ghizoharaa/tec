import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { AuthContextProvider } from './context/authContext';
import { DarkContextProfider } from './context/darkContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkContextProfider>
    <AuthContextProvider>
    <App />
    </AuthContextProvider>
    </DarkContextProfider>
    
   


  </React.StrictMode>
);
