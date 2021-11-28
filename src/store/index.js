import { createStore } from 'easy-peasy';
import { persistInitState } from './initState';
import { actions } from './actions';
import { thunks } from './thunks';

export const store = createStore(
  {
    ...persistInitState,
    ...actions,
    ...thunks,
  },
  {
    name: 'PubDrop',
  },
);
