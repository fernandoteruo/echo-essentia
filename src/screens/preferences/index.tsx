import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const Preferences: FC = () => {
  return (
    <div>
      PREFERENCES SCREEN
      <Link to='/refill'>Refill</Link>
    </div>
  );
};

export default Preferences;
