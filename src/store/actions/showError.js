import { action } from 'easy-peasy';

export const showError = action((state, payload) => {
  const {
    target,
    message = 'Unknown error. Please reload the page and try again in a few minutes',
  } = payload;

  state.errors[target] = message;
});
