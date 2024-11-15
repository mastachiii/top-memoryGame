import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Background } from './components/Background.jsx';
import { Audio } from './components/Audio.jsx';
import App from './App.jsx';
import './styles/index.css';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Audio url={'/sfx/littleroot.mp3'} loop={true} autoPlay={true} />
        <Audio url={'/sfx/select.mp3'} id={'select'} />
        <Background />
        <App />
        <a href='https://github.com/mastachiii' target='blank'>
            <img src='/icons/github.svg' className='github' />
        </a>
    </StrictMode>
);
