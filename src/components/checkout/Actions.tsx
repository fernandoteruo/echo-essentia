import React, { FC } from 'react';
import styled from 'styled-components';
import NavigationButton from '../navigation/NavigationButton';
import ReturnButton from '../navigation/ReturnButton';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15px;
  padding: 15px;
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
  isDisabled = false,
}: IProps) => {
  return (
    <Container>
      <ReturnButton label={labelReturn} url={urlReturn} />
      <NavigationButton
        url={urlNext}
        label={labelNext}
        isDisabled={isDisabled}
        shouldShowIcon
      />
    </Container>
  );
};

export default Actions;
