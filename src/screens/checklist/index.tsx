import React, { FC } from 'react';
import styled from 'styled-components';
import { PageWrapper } from '../../components/globals/styles';

const Wrapper = styled(PageWrapper)`
  @media ${({ theme: { screenWidth } }) => screenWidth.md} {
    flex-direction: column;
  }
`;

const Checklist: FC = () => {
  return <Wrapper>Checklist</Wrapper>;
};

export default Checklist;
