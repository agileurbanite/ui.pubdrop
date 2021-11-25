import { StrictMode } from 'react';
import { render } from 'react-dom';
import { StoreProvider } from 'easy-peasy';
import { App } from './ui/components/App';
import { store } from './store';

render(
  <StrictMode>
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  </StrictMode>,
  document.getElementById('root'),
);
