import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Background } from './components/Background.jsx';
import { Audio } from './components/Audio.jsx';
import App from './App.jsx';
import './styles/index.css';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Audio url={'/sfx/littleroot.mp3'} />
        <Background />
        <App />
    </StrictMode>
);
