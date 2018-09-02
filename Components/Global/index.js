import styled from 'styled-components';

export const Inner = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  ${props => (props.isPadding ? 'padding: 12px;' : '')}
`;

export const Button = styled.button`
`;
