import { persist } from 'easy-peasy';
import { pages } from '../config/pages';

const initState = {
  email: null,
  claimPublicKey: null,
  claimSecretKey: null,
  loading: {
    app: true,
    sendEmail: false,
    confirmEmail: false,
  },
  errors: {
    app: null,
    sendEmail: null,
    confirmEmail: null,
  },
  messages: "",
  navigation: {
    page: pages.signup,
  },
};

export const persistInitState = persist(initState, {
  storage: 'localStorage',
  allow: ['claimPublicKey', 'claimSecretKey'],
});
