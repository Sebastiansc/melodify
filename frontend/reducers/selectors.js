import {values} from 'lodash';

export const toArray = object => {
  return values(object) || [];
};
