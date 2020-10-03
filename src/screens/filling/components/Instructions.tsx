import React, { FC } from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import styled from 'styled-components';

export const BUTTON_LABEL = 'Recarregar';

const FILLING_INSTRUCTIONS = [
  'Coloque seu frasco na abertura ao lado',
  'Feche a tampa da abertura',
  `Pressione o botao "${BUTTON_LABEL}"'`,
  'Aguarde seu novo perfume',
];

const Text = styled(ListItemText)`
  .MuiTypography-body1 {
    font-family: 'Open Sans';
  }
`;

const Instructions: FC = () => {
  return (
    <List>
      {FILLING_INSTRUCTIONS.map((instruction) => {
        return (
          <ListItem key={instruction}>
            <Text primary={instruction} />
          </ListItem>
        );
      })}
    </List>
  );
};

export default Instructions;
