import { thunk } from 'easy-peasy';
import ky from 'ky';
import { pages } from '../../config/pages';
import { api } from '../../config/api';

export const sendEmail = thunk(async (actions, payload, helpers) => {
  const { email = 'test@test.com' } = payload;

  try {
    await ky.post(api.sendEmail, { json: { email } });
    // actions.toPage({ page: pages.verifyCode });
  } catch (e) {
    const a = await e.response.json();
    console.log(a.error);
  }
});
