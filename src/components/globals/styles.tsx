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

  @media ${({ theme: { screenWidth } }) => screenWidth.sm} {
  }

  @media ${({ theme: { screenWidth } }) => screenWidth.md} {
  }

  @media ${({ theme: { screenWidth } }) => screenWidth.lg} {
  }

  @media ${({ theme: { screenWidth } }) => screenWidth.xl} {
  }
`;

export const ScreenTransition = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: hidden;
  animation: fadein 1.5s;
  animation-fill-mode: forwards;
  animation-delay: 0.5s;

  @keyframes fadein {
    from {
      visibility: visible;
      opacity: 0;
    }
    to {
      visibility: visible;
      opacity: 1;
    }
  }
`;
