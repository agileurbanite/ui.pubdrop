import { useStoreActions, useStoreState } from 'easy-peasy';
import { Checkbox } from '@mui/material';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '../general/Input/Input';
import { Button } from '../general/Button/Button';
import { ErrorText } from '../general/ErrorText/ErrorText';
import { Disclaimer } from './Disclaimer/Disclaimer';
import { resolver } from './validations';
import css from './SignUp.module.css';

export const SignUp = () => {
  const isLoading = useStoreState((state) => state.loading.sendEmail);
  const error = useStoreState((state) => state.errors.sendEmail);
  const signup = useStoreActions((actions) => actions.signup);
  const [isOpen, setOpen] = useState(false);
  const anchorEl = useRef();
  const methods = useForm({ resolver });

  const { handleSubmit, watch, register } = methods;
  const { errors } = methods.formState;
  const onSubmit = handleSubmit(signup);
  const isChecked = watch('disclaimer', false);

  const openDisclaimer = () => setOpen(true);
  const closeDisclaimer = () => setOpen(false);

  return (
    <div className={css.container}>
      <h1 className={css.h1}>Welcome</h1>
      <h2 className={css.h2}>Claim your NEARDROP</h2>
      <Input placeholder="Enter your email" register={register} name="email" error={errors.email} />
      <div className={css.label}>
        <Checkbox {...register('disclaimer')} className={css.checkbox} />
        <span className={css.labelText}>
          I have read, understood and subscribe to the{' '}
          <button className={css.disclaimer} ref={anchorEl} onClick={openDisclaimer}>
            Disclaimer
          </button>
        </span>
        <Disclaimer open={isOpen} anchorEl={anchorEl.current} onClose={closeDisclaimer} />
      </div>
      <Button disabled={!isChecked} text="Submit" onClick={onSubmit} isLoading={isLoading} />
      <ErrorText error={error} />
    </div>
  );
};
