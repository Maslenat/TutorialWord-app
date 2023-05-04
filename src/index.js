import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style/normalize.css";
import App from './pages/app/App';
import { ContentProvider } from './components/Mycontext/Mycontext';


const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(
    <ContentProvider>  

      <App />
      
    </ContentProvider>
);
