import BeatLoader from 'react-spinners/BeatLoader';
import css from './Button.module.css';

export const Button = ({ onClick, text, isLoading = false }) => (
  <button className={css.button} onClick={onClick}>
    {isLoading ? (
      <>
        <span>Loading</span>
        <BeatLoader size={8} color="#ffffff"/>
      </>
    ) : (
      text
    )}
  </button>
);
