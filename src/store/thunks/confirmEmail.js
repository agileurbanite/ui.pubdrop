import { thunk } from 'easy-peasy';
import ky from 'ky';
import { api } from '../../config/api';
import { goToWalletClaimPage } from '../helpers/goToWalletClaimPage';

const target = 'confirmEmail';

export const confirmEmail = thunk(async (actions, payload, helpers) => {
  try {
    const { confirmationCode } = payload;
    const { email } = helpers.getStoreState();

    actions.enableLoading({ target });

    const { publicKey, secretKey } = await ky
      .post(api.confirmEmail, {
        json: { email, confirmationCode: Number(confirmationCode) },
        searchParams: { event: process.env.REACT_APP_EVENT },
        timeout: 30000,
      })
      .json();

    actions.setClaimKey({ publicKey, secretKey });
    goToWalletClaimPage(secretKey);
  } catch (err) {
    const error = await err.response?.json();
    actions.showError({ target, message: error?.error });
    actions.disableLoading({ target });
  } finally {
    actions.disableLoading({ target });
  }
});
