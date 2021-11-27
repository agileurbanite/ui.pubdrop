import css from './Input.module.css';

export const Input = ({ placeholder }) => {
  return <input type="text" placeholder={placeholder} className={css.input} />;
};
