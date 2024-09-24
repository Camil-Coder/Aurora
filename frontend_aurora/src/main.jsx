import "./main.css"
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import LoginPage from './Modules/Login/login';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginPage></LoginPage>
  </StrictMode>,
);
