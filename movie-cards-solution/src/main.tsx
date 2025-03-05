import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components/App.tsx';
import { MovieContextProvider } from './context/MovieContextProvider.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MovieContextProvider>
      <App />
    </MovieContextProvider>
  </StrictMode>
);
