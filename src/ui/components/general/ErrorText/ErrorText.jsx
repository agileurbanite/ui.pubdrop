import css from './ErrorText.module.css';

export const ErrorText = ({ error }) => (error ? <p className={css.error}>{error}</p> : null);
