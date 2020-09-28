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

export const PageWrapper = styled.div<WithTheme>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme: { spacing } }) => spacing.xs};

  @media ${({ theme: { screenWidth } }) => screenWidth.sm} {
    padding: ${({ theme: { spacing } }) => spacing.sm};
  }

  @media ${({ theme: { screenWidth } }) => screenWidth.md} {
    flex-direction: row;
    padding: ${({ theme: { spacing } }) => spacing.md};
  }

  @media ${({ theme: { screenWidth } }) => screenWidth.lg} {
    padding: ${({ theme: { spacing } }) => spacing.lg};
  }

  @media ${({ theme: { screenWidth } }) => screenWidth.xl} {
    padding: ${({ theme: { spacing } }) => spacing.xl};
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
