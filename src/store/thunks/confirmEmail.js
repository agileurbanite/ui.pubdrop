import { thunk } from 'easy-peasy';
import ky from 'ky';
import { api } from '../../config/api';

const {
  REACT_APP_NEAR_WALLET: newWallet,
  REACT_APP_CAMPAIGN_ID: campaignId,
  REACT_APP_REDIRECT_TO: redirectTo,
} = process.env;

const getWalletUrl = (secretKey) =>
  `${newWallet}/linkdrop/${campaignId}/${secretKey}?redirectUrl=${redirectTo}`;

const target = 'confirmEmail';

export const confirmEmail = thunk(async (actions, payload, helpers) => {
  try {
    const { confirmationCode } = payload;
    const { email } = helpers.getStoreState();

    actions.enableLoading({ target });

    const { publicKey, secretKey } = await ky
      .post(api.confirmEmail, { json: { email, confirmationCode } })
      .json();

    actions.setClaimKey({ publicKey, secretKey });
    window.location.replace(getWalletUrl(secretKey));
  } catch (err) {
    const error = await err.response?.json();
    actions.showError({ target, message: error?.error });
    actions.disableLoading({ target });
  }
});
