import miami from '../ui/images/miami/miami.svg';
import nyc from '../ui/images/newYork/nyc.svg';
import sanFrancisco from '../ui/images/sf/san-francisco.svg';
import hongbao from '../ui/images/hongbao/hongbao.svg';
import brand from "../ui/images/brand/brand-copy.svg";

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
  hongbao: {
    name: 'hongbao',
    logoText: hongbao,
    mainUrl: 'hongbao.near.org',
  },
  ethdenver: {
    name: 'ethdenver',
    logoText: '',
    mainUrl: 'ethdenver.near.org',
  },
  brand: {
    name: 'brand',
    logoText: brand,
    mainUrl: 'brand.near.org',
  }
};

export const event = events[process.env.REACT_APP_EVENT];
