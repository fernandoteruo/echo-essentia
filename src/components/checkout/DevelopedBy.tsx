import styled from 'styled-components';
import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../../resources/svg/echoEssentia/echoEssentiaLogoHorizontal.svg';

const StyledImage = styled.img`
  width: 80px;
  margin-left: 20px;
`;

const DevelopedBy: FC = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/login');
  };

  return <StyledImage src={logo} onClick={handleClick} />;
};

export default DevelopedBy;
