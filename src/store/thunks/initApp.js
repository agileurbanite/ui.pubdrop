import { thunk } from 'easy-peasy';
import ky from 'ky';
import { api } from '../../config/api';
import { pages } from '../../config/pages';
import { goToWalletClaimPage } from '../helpers/goToWalletClaimPage';
import { store } from '../index';
import { event } from '../../config/event';

export const initApp = thunk(async (actions) => {
  await store.persist.resolveRehydration();
  const { claimPublicKey, claimSecretKey } = store.getState();

  window.document.title = event.pageTitle;

  try {
    const campaignStatus = await ky
      .get(api.campaignStatus, { searchParams: { event: process.env.REACT_APP_EVENT } })
      .json();

    if (!campaignStatus.isActive) return actions.toPage({ page: pages.campaignOver });
    // If there is no key in Local Storage that's means it is a first launch or email wasn't confirmed
    if (!claimPublicKey) return;

    const keyStatus = await ky
      .get(api.keyStatus, {
        searchParams: { publicKey: claimPublicKey, event: process.env.REACT_APP_EVENT },
      })
      .json();

    if (keyStatus.isActive) {
      goToWalletClaimPage(claimSecretKey);
    } else {
      actions.toPage({ page: pages.alreadyClaimed });
    }
  } catch (e) {
    actions.showError({ target: 'app', message: 'Fail to load application. Please try later' });
  } finally {
    actions.disableLoading({ target: 'app' });
  }
});
