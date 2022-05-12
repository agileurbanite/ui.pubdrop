import SignUpPhone from './SignUpPhone/SignUpPhone';
import SignUpEmail from './SignUpMail/SignUpEmail';
import css from './SignUp.module.css';
import cn from 'classnames';
import { event } from '../../../config/event';
import nearIcon from '../../images/hongbao/near-logo.png';

export const SignUp = () => {
  const signUpMethod = process.env.REACT_APP_SIGNUP_METHOD || 'email';

  return (
    <div className={cn(css.container, css[event.name])}>
      {event.name === 'hongbao' && (
        <div className={css.headerWrapper}>
          <div className={css.header}>
            <img src={nearIcon} className={css.logo} alt="NEAR logo" />
          </div>
        </div>
      )}
      {event.name !== 'bermuda' && (
        <div>
          <h1 className={cn(css.h1, css[event.name])}>Welcome</h1>
          <h2 className={cn(css.h2, css[event.name])}>Claim your NEARDROP</h2>
        </div>
      )}
      {signUpMethod.toLowerCase() === 'email' ? <SignUpEmail /> : <SignUpPhone />}
    </div>
  );
};
