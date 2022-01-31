import nearText from '../../images/near-logo-text.svg';
import nextIcon from '../../images/near-logo-icon.svg';
import { event } from '../../../config/event';
import styles from './Logo.module.css';
import cn from 'classnames';

export const Logo = () => (
  <div className={cn(styles.container, styles[event.name])}>
    <img src={nearText} alt="NEAR" className={cn(styles.nearText, styles[event.name])} />
    {event.name !== 'hongbao' && <img src={nextIcon} alt="NEAR logo" className={styles.nearIcon} />}
    <img
      src={event.logoText}
      alt="Event city"
      className={cn(styles.eventName, styles[event.name])}
    />
  </div>
);
