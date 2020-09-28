import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const Landing: FC = () => {
  return (
    <div>
      LANDING SCREEN
      <Link to='/'>Home</Link>
    </div>
  );
};

export default Landing;
