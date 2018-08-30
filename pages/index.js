import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { actions } from '../redux/reducers/movie';

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

class Home extends React.Component {
  // static getInitialProps({ reduxStore, req }) {
  static getInitialProps() {
    // const isServer = !!req;
    // reduxStore.dispatch(serverRenderClock(isServer));
    console.log('INIT');
    return {};
  }

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { plus } = this.props;
    plus();
  }

  render() {
    const { count } = this.props;
    return (
      <div>
        <Title>Home</Title>
        <div>{count}</div>
        <a onClick={this.handleClick}>click me</a>
      </div>
    );
  }
}

export default connect(
  ({ movie }) => ({
    movies: movie.movies,
    count: movie.count,
  }), {
    plus: actions.plus,
  },
)(Home);
