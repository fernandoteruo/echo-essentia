import React, { FC } from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useHistory } from 'react-router-dom';
import { Icon, Label, PrimaryButton } from '../form/Button';

interface IProps {
  url: string;
  label: string;
  isDisabled?: boolean;
  shouldShowIcon?: boolean;
}

const NavigationButton: FC<IProps> = ({
  url,
  label,
  isDisabled = false,
  shouldShowIcon = true,
}: IProps) => {
  const history = useHistory();

  const navigateNext = () => {
    history.push(`${url}`);
  };

  return (
    <PrimaryButton onClick={navigateNext} disabled={isDisabled}>
      <Label>{label}</Label>
      {shouldShowIcon ? (
        <Icon>
          <ArrowForwardIcon />
        </Icon>
      ) : null}
    </PrimaryButton>
  );
};

export default NavigationButton;
