import styled from 'styled-components';
import { getColor } from '../../helpers/theme';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;

const Wrapper = styled.nav`
  grid-column: 1 / 13;
  grid-row: 1 / 2;
  background: ${getColor('white')};
  border-bottom: 1px solid ${getColor('secondary')};
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${getColor('stroke')};
`;

export {
  Container,
  Wrapper,
  Title,
};
