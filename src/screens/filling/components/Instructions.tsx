import React, { FC } from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import styled from 'styled-components';
import {
  SvgIconComponent,
  Input,
  Update,
  ArrowDownward,
  TapAndPlay,
} from '@material-ui/icons';

export const BUTTON_LABEL = 'Recarregar';

interface IInstructions {
  Icon: SvgIconComponent;
  label: string;
}

const FILLING_INSTRUCTIONS: IInstructions[] = [
  {
    label: 'Coloque seu frasco na abertura ao lado',
    Icon: Input,
  },
  {
    label: 'Feche a tampa da abertura',
    Icon: ArrowDownward,
  },
  {
    label: `Pressione o botao "${BUTTON_LABEL}"'`,
    Icon: TapAndPlay,
  },
  {
    label: 'Aguarde seu novo perfume',
    Icon: Update,
  },
];

const Text = styled(ListItemText)`
  .MuiTypography-body1 {
    font-family: 'Open Sans';
    margin-left: 15px;
  }
`;

const Instructions: FC = () => {
  return (
    <List>
      {FILLING_INSTRUCTIONS.map(({ label, Icon }) => {
        return (
          <ListItem key={label}>
            <Icon />
            <Text primary={label} />
          </ListItem>
        );
      })}
    </List>
  );
};

export default Instructions;
