import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import App from '@/App';

const rootElement = document.querySelector('#root');

if (!rootElement) {
    throw new ReferenceError(
        "Couldn't find the root element to attach React DOM."
    );
}

createRoot(rootElement).render(
    <StrictMode>
        <App />
    </StrictMode>
);
