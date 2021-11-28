import { thunk } from 'easy-peasy';
import ky from 'ky';
import { pages } from '../../config/pages';
import { api } from '../../config/api';

const target = 'sendEmail';

export const signup = thunk(async (actions, payload) => {
  try {
    const { email } = payload;

    actions.enableLoading({ target });
    await ky.post(api.signup, { json: { email } }).json();

    actions.setEmail({ email });
    actions.toPage({ page: pages.confirmEmail });
    actions.hideError({ target });
  } catch (err) {
    const error = await err.response?.json();
    actions.showError({ target, message: error?.error });
  } finally {
    actions.disableLoading({ target });
  }
});
