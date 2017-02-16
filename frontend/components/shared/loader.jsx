import React from 'react';
import { values } from 'lodash';

const setDisplay = data => {
  let collection;
  if (data.constructor.name === 'Array') {
    collection = data;
  } else {
    collection = values(data);
  }
  return !collection.length ? 'block' : 'none';
};

const Loader = ({data, klass}) => (
  <div className={klass}>
    <i
      className="fa fa-circle-o-notch fa-spin"
      aria-hidden="true"
      style={{display: setDisplay(data)}}>
    </i>
  </div>
);

export default Loader;
