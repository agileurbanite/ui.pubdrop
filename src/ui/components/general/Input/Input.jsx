import css from './Input.module.css';

export const Input = ({ register, name, placeholder, error }) => (
  <>
    <input {...register(name)} placeholder={placeholder} className={css.input} />
    <div className={css.error}>{error?.message}</div>
  </>
);
