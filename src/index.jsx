import { StrictMode } from 'react';
import { render } from 'react-dom';
import { StoreProvider } from 'easy-peasy';
import { StyledEngineProvider } from '@mui/material';
import { App } from './ui/components/App';
import { store } from './store';

render(
  <StrictMode>
    <StoreProvider store={store}>
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
    </StoreProvider>
  </StrictMode>,
  document.getElementById('root'),
);
