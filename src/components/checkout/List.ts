import styled from 'styled-components';
import { List as MuiList } from '@material-ui/core';

const List = styled(MuiList)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${({ theme: { screenWidth } }) => screenWidth.sm} {
    flex-direction: row;
    flex-wrap: wrap;
    width: 90%;
  }
`;

export default List;
