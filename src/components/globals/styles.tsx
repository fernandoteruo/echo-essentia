import styled, { createGlobalStyle } from 'styled-components';
import { WithTheme } from '../../themes';

export const GlobalStyle = createGlobalStyle<WithTheme>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${(props) => props.theme.typography.regular}
  }
  body {
    margin: 0;
    background: ${({ theme: { colors } }) => colors.background};
  }
`;

export const PageWrapper = styled.div<WithTheme>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${({ theme: { spacing } }) => spacing.xs};

  @media ${({ theme: { screenWidth } }) => screenWidth.md} {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }
`;
