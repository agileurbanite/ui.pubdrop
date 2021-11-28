import { action } from 'easy-peasy';

export const hideError = action((state, payload) => {
  const { target } = payload;
  state.errors[target] = null;
});
