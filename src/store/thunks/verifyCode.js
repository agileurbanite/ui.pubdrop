import { thunk } from 'easy-peasy';
import { pages } from '../../config/pages';

export const verifyCode = thunk((actions, payload, helpers) => {
  actions.toPage({ page: pages.verifyCode });
});
