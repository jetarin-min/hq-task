import styled from 'styled-components';
import { Inner } from '../Global';

const MainContainer = styled.div`
  background-color: gray;
  height: 80px;
`;

const Footer = () => (
  <MainContainer>
    <Inner>
      <p>This is footer...</p>
    </Inner>
  </MainContainer>
);
export default Footer;
