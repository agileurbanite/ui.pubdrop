import { action } from 'easy-peasy';

export const toPage = action((state, payload) => {
  const { page, params = null } = payload;
  state.navigation.page = page;
  state.navigation.params = params;
});
