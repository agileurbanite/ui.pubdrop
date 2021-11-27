import { useStoreActions, useStoreState } from 'easy-peasy';
import { useEffect } from 'react';
import { pages } from '../../config/pages';
import { Logo } from './Logo/Logo';
import { Main } from './Main/Main';
import { VerifyCode } from './VerifyCode/VerifyCode';
import { AlreadyClaimed } from './AlreadyClaimed/AlreadyClaimed';
import { CampaignOver } from './CampaignOver/CampaignOver';
import styles from './App.module.css';

export const App = () => {
  const page = useStoreState((state) => state.navigation.page);
  const isLoading = useStoreState((state) => state.isLoading.app);
  const initApp = useStoreActions((actions) => actions.initApp);

  useEffect(() => {
    initApp();
  }, [initApp]);

  if (isLoading) return null;

  return (
    <div className={styles.container}>
      <Logo />
      {page === pages.main && <Main />}
      {page === pages.verifyCode && <VerifyCode />}
      {page === pages.alreadyClaimed && <AlreadyClaimed />}
      {page === pages.campaignOver && <CampaignOver />}
    </div>
  );
};
