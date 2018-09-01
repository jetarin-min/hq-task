import React from 'react';
import styled from 'styled-components';
import MovieCard from '../MovieCard';

const ScrollContainer = styled.div`
  margin-top: 0px;
  margin-right: -8px;
  margin-left: -8px;
  position: relative;
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

class Row extends React.Component {
  constructor(props) {
    super(props);
    this.go = this.go.bind(this);
    this.state = {
      x: 0,
    };
  }

  go(direction = 'left') {
    console.log(direction);
    this.setState({ x: 0 });
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
        {/*
          lists.length > 0 &&
          !lists[0] &&
          <a className="left-arrow" onClick={() => this.go('left')} />
        */}
        {/*
          lists.length > 0 &&
          !lists[lists.length - 1] &&
          <a className="right-arrow" onClick={() => this.go('right')} />
        */}
      </ScrollContainer>
    );
  }
}

export default Row;
