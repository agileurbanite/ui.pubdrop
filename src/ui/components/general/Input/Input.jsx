import css from './Input.module.css';
import cn from 'classnames';
import { event } from '../../../../config/event';

export const Input = ({ register, name, placeholder, error }) => (
  <>
    <input
      {...register(name)}
      placeholder={placeholder}
      className={cn(css.input, css[event.name])}
    />
    <div className={cn(css.error, css[event.name])}>{error?.message}</div>
  </>
);
