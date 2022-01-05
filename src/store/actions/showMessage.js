import { action } from 'easy-peasy';

export const showMessage= action((state, payload) => {
  const {
    message = '',
  } = payload;

  state.messages = message;
});
