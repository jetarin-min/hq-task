import styled, { keyframes } from 'styled-components';

const dotRotate = keyframes`
{
  100% {
    transform: rotate(360deg);
  }
}`;

const dotBounce = keyframes`
  0%, 100% { 
    transform: scale(0.0);
  } 50% { 
    transform: scale(1.0);
  }
}`;

const Container = styled.div`
  margin: 100px auto;
  width: 40px;
  height: 40px;
  text-align: center;
  animation: ${dotRotate} 2.0s infinite linear;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
`;
const Dot1 = styled.div`
  width: 60%;
  height: 60%;
  display: inline-block;
  position: absolute;
  top: 0;
  background-color: ${props => props.theme.yellow};
  border-radius: 100%;
  
  animation: ${dotBounce} 2.0s infinite ease-in-out;
`;
const Dot2 = styled(Dot1)`
  top: auto;
  bottom: 0;
  animation-delay: -1.0s;
`;


const Spinner = () => (
  <Container>
    <Dot1 />
    <Dot2 />
  </Container>
);

export default Spinner;
