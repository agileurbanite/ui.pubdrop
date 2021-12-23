import miami from '../ui/images/miami/miami.svg';
import nyc from '../ui/images/newYork/nyc.svg';
import sf from '../ui/images/sf/sf.svg';

const events = {
  miami: {
    name: 'miami',
    pageTitle: 'NEAR Miami',
    logoText: miami,
    mainUrl: 'miami.near.org',
  },
  newYork: {
    name: 'newYork',
    pageTitle: 'NEAR NYC',
    logoText: nyc,
    mainUrl: 'nyc.near.org',
  },
  sf: {
    name: 'sf',
    pageTitle: 'NEAR SF',
    logoText: sf,
    mainUrl: 'sf.near.org',
  },
};

export const event = events[process.env.REACT_APP_EVENT];
