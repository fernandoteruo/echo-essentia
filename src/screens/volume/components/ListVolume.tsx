import React, { FC } from 'react';
import styled from 'styled-components';
import ChooseButton from '../../../components/checkout/ChooseButton';
import Price from '../../../components/checkout/Price';
import { maskedCurrency } from '../../../hooks/formatter';
import { Card, CardSection } from '../../../components/checkout/Card';
import List from '../../../components/checkout/List';
import { IVolume } from '../../../context/Checkout';

interface IProps {
  volumes: IVolume[];
  selectedVolume?: IVolume | null;
  onSelection: (volume: IVolume) => void;
}

const Volume = styled(Card)`
  height: 200px !important;

  @media ${({ theme: { screenWidth } }) => screenWidth.sm} {
    margin-left: 10px !important;
    margin-right: 10px !important;
  }
`;

const VolumeAmount = styled(CardSection)`
  font-size: 14px;
  height: 25px;
  height: 20px !important;
`;

const VolumePrice = styled(CardSection)`
  font-size: 18px;
  height: 40px !important;
`;

const UnitPrice = styled(CardSection)`
  font-size: 11px;
  height: 20px !important;
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
    <List>
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
            <VolumeAmount>{volumeStr}</VolumeAmount>
            <VolumePrice>
              <Price value={volume.price} />
            </VolumePrice>
            <UnitPrice>{unitPriceDescription}</UnitPrice>
            <ChooseButton isSelected={isSelected}>
              {isSelected ? 'Selecionado' : 'Selecionar'}
            </ChooseButton>
          </Volume>
        );
      })}
    </List>
  );
};

export default ListVolume;
