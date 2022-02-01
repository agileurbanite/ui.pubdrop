import { useStoreActions, useStoreState } from 'easy-peasy';
import CircleLoader from 'react-spinners/CircleLoader';
import { useEffect } from 'react';
import cn from 'classnames';
import { pages } from '../../config/pages';
import { Logo } from './Logo/Logo';
import { SignUp } from './SignUp/SignUp';
import { ConfirmEmail } from './СonfirmEmail/ConfirmEmail';
import { AlreadyClaimed } from './AlreadyClaimed/AlreadyClaimed';
import { CampaignOver } from './CampaignOver/CampaignOver';
import { ErrorText } from './general/ErrorText/ErrorText';
import { Footer } from './Footer/Footer';
import { event } from '../../config/event';
import css from './App.module.css';
import { MessageText } from './general/MessageText/MessageText';
import ConfirmPhoneNumber from './СonfirmPhoneNumber/СonfirmPhoneNumber';
import { loadReCaptcha } from 'recaptcha-v3-react-function-async';

export const App = () => {
  const page = useStoreState((state) => state.navigation.page);
  const isLoading = useStoreState((state) => state.loading.app);
  const error = useStoreState((state) => state.errors.app);
  const message = useStoreState((state) => state.messages);
  const initApp = useStoreActions((actions) => actions.initApp);

  useEffect(() => {
    initApp();
  }, [initApp]);

  useEffect(() => {
    if (event.name !== 'hongbao') {
      loadReCaptcha(process.env.REACT_APP_CAPTCHA_KEY)
        .then()
        .catch((e) => {
          console.error('Error when load ReCaptcha', e);
        });
    }
  }, []);

  return (
    <div className={cn(css.container, css[event.name])}>
      <Logo />
      {isLoading && (
        <div className={css.loader}>
          <CircleLoader color="white" size={128} />
        </div>
      )}
      {!isLoading && error && <ErrorText error={error} />}
      {!isLoading && !error && (
        <>
          {page === pages.signup && <SignUp />}
          {page === pages.confirmEmail && <ConfirmEmail />}
          {page === pages.confirmPhoneNumber && <ConfirmPhoneNumber />}
          {page === pages.alreadyClaimed && <AlreadyClaimed />}
          {page === pages.campaignOver && <CampaignOver />}
        </>
      )}
      <MessageText message={message} />
      <Footer />
    </div>
  );
};
