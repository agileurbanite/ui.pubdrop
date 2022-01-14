import { action } from 'easy-peasy';

export const setPhoneNumber = action((state, payload) => {
  state.phone = payload.phone;
});
