import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Background } from './components/Background.jsx';
import App from './App.jsx';
import './styles/index.css';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Background />
        <App />
    </StrictMode>
);
