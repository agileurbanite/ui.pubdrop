import nearText from '../../images/near-logo-text.svg';
import nextIcon from '../../images/near-logo-icon.svg';
import { event } from '../../../config/event';
import styles from './Logo.module.css';

export const Logo = () => (
  <div className={styles.container}>
    <img src={nearText} alt="NEAR" className={styles.nearText} />
    <img src={nextIcon} alt="NEAR logo" className={styles.nearIcon} />
    <img src={event.logoText} alt="Event city" className={styles.eventName} />
  </div>
);
