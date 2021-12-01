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
    app: null,
    // sendEmail: 'An email with a confirmation code was not sent. Please try again later',
    confirmEmail: null,
  },
  navigation: {
    page: pages.signup,
  },
};

export const persistInitState = persist(initState, {
  storage: 'localStorage',
  allow: ['claimPublicKey', 'claimSecretKey'],
});
