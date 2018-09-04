import styled from 'styled-components';

export const Inner = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  ${props => (props.isPadding ? 'padding: 12px;' : '')}
`;

export const Button = styled.button`
  height: 51px;
  width: 220px;
  background-color: ${props => props.theme.yellow};
  color: ${props => props.theme.white};
  font-weight: 500;
  display: block;
  text-align: center;
  box-sizing: border-box;
  padding: 16px;
  border: none;
  font-size: 16px;
  margin: 20px 0 0;
  cursor: pointer;
  @media (max-width: 700px) {
    height: 39px;
    padding: 10px;
    margin: 20px auto 0;
    width: 200px;
  }
`;
