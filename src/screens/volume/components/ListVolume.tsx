import React, { FC } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import ChooseButton from '../../../components/order/ChooseButton';
import Price from '../../../components/order/Price';
import { maskedCurrency } from '../../../hooks/formatter';
import { Card, CardSection } from '../../../components/order/Card';
import List from '../../../components/order/List';
import { setVolume } from '../../../store/order/actions';
import { IRootReducer } from '../../../store';
import { IVolume } from '../../../model/order';

interface IProps {
  volumes: IVolume[];
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

const ListVolume: FC<IProps> = ({ volumes }: IProps) => {
  const dispatch = useDispatch();
  const selectedVolume = useSelector<IRootReducer, IVolume | null>(
    (state) => state.order.volume,
  );

  const handleClick = (volume: IVolume) => () => {
    dispatch(setVolume(volume));
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
