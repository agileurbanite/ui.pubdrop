import { createStore } from 'easy-peasy';
import { initState } from './initState';
import { actions } from './actions';
import { thunks } from './thunks';

export const store = createStore(
  {
    ...initState,
    ...actions,
    ...thunks,
  },
  {
    name: 'PubDrop',
  },
);
