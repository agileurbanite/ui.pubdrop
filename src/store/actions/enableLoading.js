import { action } from 'easy-peasy';

export const enableLoading = action((state, payload) => {
  const { target, params = {} } = payload;
  state.loading[target] = params;
});
