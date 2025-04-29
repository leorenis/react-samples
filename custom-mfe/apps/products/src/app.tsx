import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import ProductsList from './components/ProductsList/ProductsList';
import './styles.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <p>
      You are running in the remote
    </p>
    <ProductsList />
  </StrictMode>
);
