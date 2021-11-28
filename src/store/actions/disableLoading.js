import { action } from 'easy-peasy';

export const disableLoading = action((state, payload) => {
  const { target } = payload;
  state.loading[target] = null;
});
