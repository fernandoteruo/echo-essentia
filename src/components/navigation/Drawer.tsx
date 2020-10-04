import React, { FC } from 'react';
import {
  Drawer as MuiDrawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import styled from 'styled-components';
import { ChevronLeft, GetApp } from '@material-ui/icons';
import useIsInstallable from '../../hooks/installation';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const Section = styled.div`
  padding: 10px;
  display: flex;
  justify-content: flex-end;
`;

const Drawer: FC<IProps> = ({ isOpen, onClose }: IProps) => {
  const { isInstallable, prompt } = useIsInstallable();

  const handleClick = () => {
    prompt.prompt();
    prompt.userChoice.then((response: any) => {
      if (response.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
    });
  };

  return (
    <>
      <MuiDrawer anchor='left' open={isOpen}>
        <Section onClick={onClose}>
          <ChevronLeft />
        </Section>
        <Divider />
        <Section>
          <List>
            {isInstallable ? (
              <ListItem button onClick={handleClick}>
                <ListItemIcon>
                  <GetApp />
                </ListItemIcon>
                <ListItemText>Install App</ListItemText>
              </ListItem>
            ) : null}
          </List>
        </Section>
      </MuiDrawer>
    </>
  );
};

export default Drawer;
