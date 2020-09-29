import React, { FC } from 'react';
import styled from 'styled-components';
import NavigationButton from '../navigation/NavigationButton';
import ReturnButton from '../navigation/ReturnButton';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

interface IProps {
  urlNext: string;
  urlReturn?: string;
  labelNext: string;
  labelReturn: string;
  isDisabled?: boolean;
}

const Actions: FC<IProps> = ({
  urlNext,
  urlReturn,
  labelNext,
  labelReturn,
  isDisabled,
}: IProps) => {
  return (
    <Container>
      <ReturnButton label={labelReturn} url={urlReturn} />
      <NavigationButton
        url={urlNext}
        label={labelNext}
        isDisabled={isDisabled}
      />
    </Container>
  );
};

export default Actions;
