import { thunk } from 'easy-peasy';
import ky from 'ky';
import { pages } from '../../config/pages';
import { api } from '../../config/api';
import { goToWalletClaimPage } from '../helpers/goToWalletClaimPage';

let target = 'sendEmail';

export const signup = thunk(async (actions, payload) => {
  try {
    const { email, phone, gToken } = payload;
    if (email) {
      actions.enableLoading({ target });

      const response = await ky
        .post(api.signup, {
          json: { email },
          searchParams: { event: process.env.REACT_APP_EVENT },
        })
        .json();

      actions.setEmail({ email });

      // If user confirmed email on another device but hasn't claimed it - redirect to wallet
      if (response.secretKey) {
        actions.setClaimKey(response);
        return goToWalletClaimPage(response.secretKey);
      }
      actions.toPage({ page: pages.confirmEmail });
      actions.hideError({ target });
    }
    if (phone) {
      target = 'sendPhoneNumber';
      actions.enableLoading({ target });

      const response = await ky
        .post(api.signup, {
          json: { phone, 'g-recaptcha-response': gToken },
          searchParams: { event: process.env.REACT_APP_EVENT },
        })
        .json();

      actions.setPhoneNumber({ phone });

      // If user confirmed email on another device but hasn't claimed it - redirect to wallet
      if (response.secretKey) {
        actions.setClaimKey(response);
        return goToWalletClaimPage(response.secretKey);
      }
      actions.toPage({ page: pages.confirmPhoneNumber });
      actions.hideError({ target });
    }
  } catch (err) {
    const error = await err.response?.json();
    actions.showError({ target, message: error?.error });
  } finally {
    actions.disableLoading({ target });
  }
});
