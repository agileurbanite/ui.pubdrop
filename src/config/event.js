import mLogoText from '../ui/images/miami/miami-text.svg';
import nyLogoText from '../ui/images/newYork/new-york-text.svg';

const events = {
  miami: {
    name: 'miami',
    pageTitle: 'NEAR Miami',
    logoText: mLogoText,
    mainUrl: 'miami.near.org',
  },
  newYork: {
    name: 'newYork',
    pageTitle: 'NEAR New York',
    logoText: nyLogoText,
    mainUrl: 'nyc.near.org',
  },
};

export const event = events[process.env.REACT_APP_EVENT];
