import styled from 'styled-components';
import { Inner } from '../Global';

const MainContainer = styled.div`
  background-color: gray;
  height: 80px;
  p {
    color: ${props => props.theme.white};
    font-weight: 500;
    padding: 30px;
  }
`;

const Footer = () => (
  <MainContainer>
    <Inner>
      <p>This is footer...</p>
    </Inner>
  </MainContainer>
);
export default Footer;
