import {values} from 'lodash';

export const toArray = object => {
  return values(object) || [];
};

export const findTrackIdx = (array, track) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].id === track.id) return i;
  }
  return -1;
};


export const customUrl = (string) => {
  return string.toLowerCase()
               .replace(/[^a-z0-9 ]/g, '')
               .replace(/ +/g, ' ')
               .replace(/\s/g, '-');
};
