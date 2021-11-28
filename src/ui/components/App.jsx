import { useStoreActions, useStoreState } from 'easy-peasy';
import { useEffect } from 'react';
import { pages } from '../../config/pages';
import { Logo } from './Logo/Logo';
import { SignUp } from './SignUp/SignUp';
import { ConfirmEmail } from './СonfirmEmail/ConfirmEmail';
import { AlreadyClaimed } from './AlreadyClaimed/AlreadyClaimed';
import { CampaignOver } from './CampaignOver/CampaignOver';
import css from './App.module.css';

export const App = () => {
  const page = useStoreState((state) => state.navigation.page);
  const isLoading = useStoreState((state) => state.loading.app);
  const initApp = useStoreActions((actions) => actions.initApp);

  useEffect(() => {
    initApp();
  }, [initApp]);

  return (
    <div className={css.container}>
      <Logo />
      {isLoading ? null : (
        <>
          {page === pages.signup && <SignUp />}
          {page === pages.confirmEmail && <ConfirmEmail />}
          {page === pages.alreadyClaimed && <AlreadyClaimed />}
          {page === pages.campaignOver && <CampaignOver />}
        </>
      )}
    </div>
  );
};
