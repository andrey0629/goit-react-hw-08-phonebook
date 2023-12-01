import { styled } from 'styled-components';

const Container = styled.div`
  max-width: 1200px;

  padding-left: 15px;
  padding-right: 15px;

  margin-left: auto;
  margin-right: auto;
`;

const Title = styled.h1`
  color: #333;
  text-align: center;
  font-size: 32px;
  font-weight: 600;
`;
const SecondaryTitle = styled.h2`
  color: #333;
  text-align: center;
  font-weight: 500;

  font-size: 22px;
  line-height: 1.11;
  text-transform: capitalize;
`;
export { Container, Title, SecondaryTitle };
