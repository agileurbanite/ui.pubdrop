import css from './Footer.module.css';
import { event } from '../../../config/event';
import builtOnNear from '../../images/bermuda/builtonnear.svg';
import styles from './Footer.module.css';

const BuiltNear = () => {
  return <img class={styles.builtNear} src={builtOnNear} alt="brand logo" />;
};

export const Footer = () => (
  <div className={css.container}>
    {event.name === 'bermuda' && <BuiltNear /> }
    <a href="https://near.org/privacy" rel="noreferrer" target="_blank">
      Privacy Policy
    </a>
  </div>
);
