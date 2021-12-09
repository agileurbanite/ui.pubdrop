import { Button } from '../general/Button/Button';
import { redirects } from '../../../config/redirects';
import css from './AlreadyClaimed.module.css';

export const AlreadyClaimed = () => {
  const goToNear = () => {
    window.location.assign(redirects.learnMore);
  };

  return (
    <div className={css.container}>
      <h1 className={css.h1}>Welcome back</h1>
      <h2 className={css.h2}>It looks like you’ve already claimed your drop</h2>
      <Button text="Learn more about NEAR" onClick={goToNear} className={css.button} />
    </div>
  );
};
