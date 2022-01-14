import { useStoreState } from 'easy-peasy';
import SignUpPhone from './SignUpPhone/SignUpPhone';
import SignUpEmail from './SignUpMail/SignUpEmail';
import css from './SignUp.module.css';

export const SignUp = () => {
  const signUpMethod = useStoreState((state) => state.confirmMethod);

  return (
    <div className={css.container}>
      <h1 className={css.h1}>Welcome</h1>
      <h2 className={css.h2}>Claim your NEARDROP</h2>
      {signUpMethod === 'email' ? <SignUpEmail /> : <SignUpPhone />}
    </div>
  );
};
