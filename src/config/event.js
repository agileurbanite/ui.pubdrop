import miami from '../ui/images/miami/miami.svg';
import nyc from '../ui/images/newYork/nyc.svg';
import sanFrancisco from '../ui/images/sf/san-francisco.svg';

const events = {
  miami: {
    name: 'miami',
    logoText: miami,
    mainUrl: 'miami.near.org',
  },
  newYork: {
    name: 'newYork',
    logoText: nyc,
    mainUrl: 'nyc.near.org',
  },
  sf: {
    name: 'sf',
    logoText: sanFrancisco,
    mainUrl: 'sf.near.org',
  },
};

export const event = events[process.env.REACT_APP_EVENT];