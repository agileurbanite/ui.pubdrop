import css from './Button.module.css';

export const Button = ({ onClick, text }) => {
  return <button className={css.button} onClick={onClick}>{text}</button>;
};
