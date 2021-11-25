import { pages } from '../config/pages';

export const initState = {
  email: null,
  isEmailConfirmed: false,
  claimPublicKey: null,
  claimSecretKey: null,
  isLoading: {
    app: null,
  },
  navigation: {
    page: pages.main,
    params: null,
  },
};
