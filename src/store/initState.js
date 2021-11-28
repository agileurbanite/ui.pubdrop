import { persist } from 'easy-peasy';
import { pages } from '../config/pages';

const initState = {
  email: null,
  claimPublicKey: null,
  claimSecretKey: null,
  loading: {
    app: false,
    sendEmail: false,
    confirmEmail: false,
  },
  errors: {
    sendEmail: null,
    confirmEmail: null,
  },
  navigation: {
    page: pages.signup,
  },
};

export const persistInitState = persist(initState, {
  storage: 'localStorage',
  allow: ['email', 'claimPublicKey', 'claimSecretKey'],
});
