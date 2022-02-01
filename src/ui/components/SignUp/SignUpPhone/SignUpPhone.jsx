import { useEffect, useRef, useState } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { Controller, useForm } from 'react-hook-form';
import { resolver } from './validations';
import 'react-phone-number-input/style.css';
import css from '../SignUp.module.css';
import style from '../../general/Input/Input.module.css';
import classes from './SignUpPhone.module.css';
import { Checkbox } from '@mui/material';
import { Disclaimer } from '../Disclaimer/Disclaimer';
import { Button } from '../../general/Button/Button';
import { ErrorText } from '../../general/ErrorText/ErrorText';
import PhoneInput, { getCountries, getCountryCallingCode } from 'react-phone-number-input/input';
import metadata from 'libphonenumber-js/metadata.min.json';
import 'react-phone-number-input/style.css';
import en from 'react-phone-number-input/locale/en.json';
import { reCaptchaExecute } from 'recaptcha-v3-react-function-async';
import cn from 'classnames';
import { event } from '../../../../config/event';
import ReCaptchaV2 from 'react-google-recaptcha';

const DEF_COUNTRY = process.env.REACT_APP_DEF_COUNTRY || 'US';

const SignUpPhone = () => {
  const isLoading = useStoreState((state) => state.loading.sendPhoneNumber);
  const error = useStoreState((state) => state.errors.sendPhoneNumber);
  const signup = useStoreActions((actions) => actions.signup);
  const [isOpen, setOpen] = useState(false);
  const anchorEl = useRef();
  const [country, setCountry] = useState(DEF_COUNTRY);
  const methods = useForm({ resolver });
  const { handleSubmit, watch, register, control, reset, setValue } = methods;
  const { errors } = methods.formState;
  const onSubmit = handleSubmit(signup);

  const isChecked = watch('disclaimer', false);

  const handleCountry = (e) => {
    reset({ phone: '' });
    setCountry(e.target.value);
  };

  const CountrySelect = ({ name, labels }) => (
    <>
      <label className={classes.label}>
        <p>Choose country</p>
      </label>
      <div className={cn(classes.wrapper, classes[event.name])}>
        <select
          name={name}
          className={cn(classes.select, classes[event.name])}
          value={country}
          onChange={handleCountry}
        >
          {getCountries().map((country) => (
            <option key={country} value={country}>
              {labels[country]} +{getCountryCallingCode(country)}
            </option>
          ))}
        </select>
        <span className={classes.arrow}>▼</span>
      </div>
    </>
  );

  const onVerifyCaptcha = (token) => {
    setValue('gToken', token);
  };

  useEffect(() => {
    register('gToken');
  });

  const openDisclaimer = () => setOpen(true);
  const closeDisclaimer = () => setOpen(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (event.name !== 'hongbao') {
      await signUpV3captchaToken();
    } else {
      signUpV2captchaToken();
    }
  };

  const signUpV3captchaToken = async () => {
    const gtoken = await reCaptchaExecute(process.env.REACT_APP_CAPTCHA_KEY, 'homepage');
    onVerifyCaptcha(gtoken);
    onSubmit();
  };

  const signUpV2captchaToken = () => {
    onSubmit();
  };

  const handleCaptchaToken = (token) => {
    onVerifyCaptcha(token);
  };

  return (
    <>
      <div style={{ marginBottom: '12px' }}>
        <CountrySelect name="country" labels={en} />
      </div>
      <Controller
        render={({ field: { onChange, value } }) => (
          <PhoneInput
            defaultCountry={country}
            className={cn(classes.input, classes[event.name])}
            value={value}
            metadata={metadata}
            placeholder="Enter your phone number"
            onChange={onChange}
          />
        )}
        control={control}
        name="phone"
      />
      {errors['phone'] && (
        <div className={cn(style.error, style[event.name])}>{errors['phone'].message}</div>
      )}
      {event.name === 'hongbao' && (
        <div style={{ marginTop: '16px' }}>
          <ReCaptchaV2 sitekey={process.env.REACT_APP_CAPTCHA_KEY} onChange={handleCaptchaToken} />
        </div>
      )}
      <div className={css.label}>
        <Checkbox {...register('disclaimer')} className={cn(css.checkbox, css[event.name])} />
        <span className={css.labelText}>
          I have read, understood and subscribe to the{' '}
          <button className={css.disclaimer} ref={anchorEl} onClick={openDisclaimer}>
            Disclaimer
          </button>
        </span>
        <Disclaimer open={isOpen} anchorEl={anchorEl.current} onClose={closeDisclaimer} />
      </div>
      <Button disabled={!isChecked} text="Submit" onClick={handleSignUp} isLoading={isLoading} />
      <ErrorText error={error} />
    </>
  );
};

export default SignUpPhone;
