import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const Loader = () => {
  return (
    <CircularProgress
      size={60}
      thickness={5}
      style={{
        margin: '40px auto 0',
        display: 'block'
      }} />
  );
};

export default Loader;
