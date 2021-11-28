import { action } from 'easy-peasy';

export const showError = action((state, payload) => {
  const { target, message = 'Unknown error' } = payload;
  state.errors[target] = message;
});
