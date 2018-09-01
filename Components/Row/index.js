import React from 'react';
import styled, { keyframes } from 'styled-components';
import MovieCard from '../MovieCard';

const ScrollContainer = styled.div`
  position: relative;
  @media (min-width: 1201px) {
    padding: 0 30px;
  }
`;

const ScrollPadding = styled.div`
  @media (min-width: 1201px) {
    overflow: hidden;  
  }
  @media (max-width: 1200px) {
    position: relative;
  }
`;

const Scroll = styled.div`
  white-space: nowrap !important;
  overflow-x: visible;
  transition: transform .5s;            
  padding: 12px 0;
  @media (max-width: 1200px) {
    overflow-x: auto;
    overflow-y: hidden;
    transform: translateX(0) !important;
    -webkit-overflow-scrolling: touch;
  }
  transform: translateX(${props => props.x}%);
`;

const CardContainer = styled.div`
  cursor: pointer;
  user-select: none;
  display: inline-block !important;
  vertical-align: top !important;
  white-space: normal !important;
  padding-left: 8px;
  padding-right: 8px;
  box-sizing: border-box;
  width: 25%;
  @media(max-width: 1200px) {
    padding-left: 0;
    padding-right: 0;
    margin-right: 10px;
    &:first-child {
      margin-left: 16px;
    }
    &:last-child {
      margin-right: 16px;
    }
  }
  @media(max-width: 1200px) and (min-width: 600px) {
    width: 30%;
  }
  @media(max-width: 700px) {
    width: 42%;
  }
`;

const Gradient = styled.div`
  position: absolute;
  top: 0;
  width: 20px;
  height: 100%;
  pointer-events: none;
  ${props => (props.direction === 'left'
    ? `
    left: 0;
    background: linear-gradient(to left, rgba(255,255,255,0) 0%,rgba(255,255,255,0.8) 100%);
    `
    : `
    right: 0;
    background: linear-gradient(to right, rgba(255,255,255,0) 0%,rgba(255,255,255,0.8) 100%);
    `
  )}
  @media (min-width: 1201px) {
    display: none !important;
  }
`;
const moveLeft = keyframes`
  0% {
    left: 0;
  }
  28% {
    left: -6px;
  }
  100% {
    left: 0;
  }
`;
const moveRight = keyframes`
  0% {
    right: 0;
  }
  28% {
    right: -6px;
  }
  100% {
    right: 0;
  }
`;

const Chevron = styled.div`
  position: absolute;
  margin: auto;
  width: 30px;
  top: 0;
  bottom: 0;
  cursor: pointer;
  ${props => (props.direction === 'left'
    ? `
    left: 0;
    &:hover {
      animation: ${moveLeft} 1s infinite;
    }
    `
    : `
    right: 0;
    &:hover {
      animation: ${moveRight} 1s infinite;
    }
  `
  )}
  &::before {
    border-style: solid;
    border-color: ${props => props.theme.gray};
    border-width: 4px 4px 0 0;
    content: '';
    display: inline-block;
    height: 18px;
    position: relative;
    transform: rotate(-45deg);
    vertical-align: top;
    width: 18px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    ${props => (props.direction === 'left'
    ? `
    transform: rotate(-135deg);
    left: 8px;
    `
    : `
    transform: rotate(45deg);
    right: 8px;
    `
  )}
  }
  @media (max-width: 1200px) {
    display: none !important;
  }
`;

class Row extends React.Component {
  constructor(props) {
    super(props);
    this.go = this.go.bind(this);
    this.state = {
      x: 0,
    };
  }

  go(direction = 'left') {
    const { x } = this.state;
    const { items } = this.props;
    if (direction === 'right' && x + (items.length * 25) > 100) {
      this.setState({ x: x - 25 });
    } else if (direction === 'left' && x < 0) {
      this.setState({ x: x + 25 });
    }
  }

  render() {
    const { items } = this.props;
    const { x } = this.state;
    return (
      <ScrollContainer>
        <ScrollPadding>
          <Scroll x={x}>
            {items.map(item => (
              <CardContainer key={`row-${item.id}`}>
                <MovieCard {...item} key={item.id} />
              </CardContainer>
            ))}
          </Scroll>
          <Gradient direction="left" />
          <Gradient direction="right" />
        </ScrollPadding>
        {x < 0 && <Chevron direction="left" onClick={() => this.go('left')} />}
        {x + (items.length * 25) > 100 && <Chevron direction="right" onClick={() => this.go('right')} />}
      </ScrollContainer>
    );
  }
}

export default Row;
