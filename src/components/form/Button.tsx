import styled from 'styled-components';

const Button = styled.button`
  transition: opacity 500ms ease-out;
  font-size: 1.25em;
  padding: 15px;
  border-radius: 4px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 360px;
  width: 45%;

  &:focus {
    outline: none;
  }

  @media ${({ theme: { screenWidth } }) => screenWidth.sm} {
    width: 30%;
    font-size: 1.35em;
  }

  @media ${({ theme: { screenWidth } }) => screenWidth.md} {
    width: 25%;
  }

  @media ${({ theme: { screenWidth } }) => screenWidth.lg} {
    width: 20%;
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};

  :disabled {
    opacity: 0.7;
  }
`;

export const Label = styled.div`
  display: flex;
`;

export const Icon = styled.div`
  display: flex;
`;

export default Button;
