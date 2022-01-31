import css from './ErrorText.module.css';
import cn from 'classnames';
import { event } from '../../../../config/event';

export const ErrorText = ({ error }) =>
  error ? <p className={cn(css.error, css[event.name])}>{error}</p> : null;
