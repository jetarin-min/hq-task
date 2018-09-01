import configs from '../configs';

const { mediaURL } = configs;

const getMedia = (path, preset = 'default') => {
  const resolution = {
    default: '/600/600/',
    cardCover: '/200/400/',
  };
  // return `${mediaURL}${resolution[preset]}${path}`;
  return `${mediaURL}${resolution[preset]}any`;
};

export default getMedia;
