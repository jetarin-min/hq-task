import Link from 'next/link';
import styled from 'styled-components';
import { Inner } from '../Global';

const MainContainer = styled.div`
  background-color: gray;
  height: 80px;
  a {
    font-weight: 500;
    display: block;
    padding: 30px;
  }
`;

const Nav = () => (
  <MainContainer>
    <Inner>
      <Link
        href={{ pathname: '/' }}
        as="/"
      >
        <a>To Home</a>
      </Link>
    </Inner>
  </MainContainer>
);
export default Nav;
