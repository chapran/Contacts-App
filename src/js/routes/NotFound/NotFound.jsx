import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { notFoundContainer, header, link } from './styles.scss';

const NotFound = () => {
  return (
    <div className={notFoundContainer}>
      <h1 className={header}>Sorry, such page does not exist&nbsp;:(</h1>
      <Link to='/' className={link}>
        Return to homepage
      </Link>
    </div>
  );
};

export default NotFound;
