import React, { FC } from 'react';
import styled from 'styled-components';
import { List, ListItem } from '@material-ui/core';
import ChooseButton from '../../../components/checkout/ChooseButton';
import { IVolume } from '../api/volume';
import { WithTheme } from '../../../themes';
import Price from '../../../components/checkout/Price';
import { maskedCurrency } from '../../../hooks/formatter';

interface IProps {
  volumes: IVolume[];
  selectedVolume?: IVolume | null;
  onSelection: (volume: IVolume) => void;
}

const VolumeList = styled(List)``;

const Volume = styled(ListItem)<WithTheme>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: ${(props) => props.theme.cards.border} !important;
  background-color: ${(props) => props.theme.cards.backgroundColor} !important;
  padding: 30px !important;
  width: 250px !important;
  height: 210px !important;
  margin-top: 20px !important;
  transition: border 500ms ease-out;

  &.Mui-selected {
    border-color: ${(props) => props.theme.colors.primary} !important;
  }
`;

const VolumeAmount = styled.div`
  margin-top: 20px;
  font-size: 14px;
`;

const VolumePrice = styled.div`
  text-align: center;
  font-size: 18px;
`;

const UnitPrice = styled.div`
  margin-top: 15px;
  font-size: 11px;
`;

const ListVolume: FC<IProps> = ({
  volumes,
  selectedVolume,
  onSelection,
}: IProps) => {
  const handleClick = (volume: IVolume) => () => {
    onSelection(volume);
  };

  return (
    <VolumeList>
      {volumes.map((volume) => {
        const isSelected = volume.id === selectedVolume?.id;
        const volumeStr = `Volume: ${volume.amount} ml`;
        const unitPrice = maskedCurrency(
          Math.floor(volume.price / volume.amount),
        );
        const unitPriceDescription = `${unitPrice} / ml`;
        return (
          <Volume
            button
            onClick={handleClick(volume)}
            key={volume.id}
            selected={isSelected}
          >
            <VolumePrice>
              <Price value={volume.price} />
            </VolumePrice>
            <VolumeAmount>{volumeStr}</VolumeAmount>
            <UnitPrice>{unitPriceDescription}</UnitPrice>
            <ChooseButton isSelected={isSelected}>
              {isSelected ? 'Selecionado' : 'Selectionar'}
            </ChooseButton>
          </Volume>
        );
      })}
    </VolumeList>
  );
};

export default ListVolume;
