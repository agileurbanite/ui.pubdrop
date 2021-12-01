import BeatLoader from 'react-spinners/BeatLoader';
import cn from 'classnames';
import css from './Button.module.css';

export const Button = ({ onClick, text, isLoading = false, className, disabled = false }) => (
  <button className={cn(css.button, className)} onClick={onClick} disabled={disabled}>
    {isLoading ? (
      <>
        <span>Loading</span>
        <BeatLoader size={8} color="#ffffff" />
      </>
    ) : (
      text
    )}
  </button>
);
