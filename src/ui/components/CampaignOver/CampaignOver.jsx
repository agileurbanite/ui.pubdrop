import { Button } from '../general/Button/Button';
import css from './CampaignOver.module.css';

export const CampaignOver = () => {
  const goToNear = () => {
    window.location.assign(process.env.REACT_APP_LEARD_ABOUT_NEAR);
  };

  return (
    <div className={css.container}>
      <h1 className={css.h1}>The campaign is over</h1>
      <h2 className={css.h2}>Everything has been claimed</h2>
      <Button text="Learn more about NEAR" onClick={goToNear} className={css.button} />
    </div>
  );
};
