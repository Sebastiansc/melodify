import {values} from 'lodash';

export const toArray = object => {
  return values(object).reverse() || [];
};

export const commentsArray = comments => {
  return values(comments) || [];
};

export const selectPhoto = (photos, id) => {
  return toArray(photos).filter( photo => (
    photo.id === id
  ))[0] || {} ;
};

export const publicPhotos = photos => (
  toArray(photos).filter(photo => photo.public)
);


export const findIndex = (tags, tag) => {
  for (let i = 0; i < tags.length; i++) {
    if(tags[i].id === tag.id) return i;
  }
};


export const formatUrl = (url, size) => {
  const rootUrl = url.slice(0,46);
  const tailUrl = url.slice(46);
  return `${rootUrl}c_scale,h_${size}/${tailUrl}`;
};
