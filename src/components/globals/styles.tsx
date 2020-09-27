import styled, { createGlobalStyle } from 'styled-components';
import { WithTheme } from '../../themes';

export const GlobalStyle = createGlobalStyle<WithTheme>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    background: ${({ theme: { colors } }) => colors.background};
  }
`;

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${({ theme: { screenWidth } }) =>
      screenWidth.md}) {
    flex-direction: row;
  }
`;
