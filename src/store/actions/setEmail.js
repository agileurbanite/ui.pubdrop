import { action } from 'easy-peasy';

export const setEmail = action((state, payload) => {
  state.email = payload.email;
});
