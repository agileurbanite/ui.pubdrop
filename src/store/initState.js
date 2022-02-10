import { persist } from 'easy-peasy';
import { pages } from '../config/pages';

const initState = {
  email: null,
  phone: null,
  claimPublicKey: null,
  claimSecretKey: null,
  loading: {
    app: true,
    sendEmail: false,
    confirmEmail: false,
    sendPhoneNumber: false,
    confirmPhoneNumber: false,
  },
  errors: {
    app: null,
    sendEmail: null,
    confirmEmail: null,
    sendPhoneNumber: null,
    confirmPhoneNumber: null,
  },
  messages: '',
  navigation: {
    page: pages.signup,
  },
};

export const persistInitState = persist(initState, {
  storage: 'localStorage',
  allow: ['claimPublicKey', 'claimSecretKey'],
});
