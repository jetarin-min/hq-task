import configs from '../configs';

const { mediaURL } = configs;

const getMedia = (path, preset = 'default') => {
  const resolution = {
    default: '/600/600/',
    cardCover: '/200/400/',
    detailCover: '/500/500/',
  };
  return `${mediaURL}${resolution[preset]}${path}`;
};

export default getMedia;
