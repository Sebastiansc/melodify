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
