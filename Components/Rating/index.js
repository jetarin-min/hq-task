import styled from 'styled-components';

const Container = styled.div`
  display: inline-block;
  position: relative;
  font-size: 20px;
  @media (max-width: 700px) {
    font-size: 18px;
  }
`;

const Star = styled.span`
  color: ${props => props.theme.yellow};
  width: ${props => props.width}%;
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
  z-index: 2;
`;

const StarO = styled.span`
  color: ${props => props.theme.borderGray};
  z-index: 1;
`;

const Rating = ({ rating }) => (
  <Container>
    <Star width={(rating / 5) * 100}>
      <span>★★★★★</span>
    </Star>
    <StarO>
      <span>★★★★★</span>
    </StarO>
  </Container>
);

export default Rating;
