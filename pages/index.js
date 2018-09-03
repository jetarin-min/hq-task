import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { actions } from '../redux/reducers/movie';

import Row from '../Components/Row';
import { Inner } from '../Components/Global';

const Title = styled.h1`
  text-align: center;
`;

class Home extends React.Component {
  // static getInitialProps({ reduxStore, req }) {
  static async getInitialProps({ reduxStore }) {
    // const isServer = !!req;
    // reduxStore.dispatch(serverRenderClock(isServer));
    await reduxStore.dispatch(actions.getMovies());
    await reduxStore.dispatch(actions.loadMovies());
    return {};
  }

  render() {
    const { movies } = this.props;
    return (
      <div>
        <Inner>
          <Title>Our Movies</Title>
          <Row items={movies} />
        </Inner>
      </div>
    );
  }
}

export default connect(
  ({ movie }) => ({
    movies: movie.movies,
  }),
  {},
)(Home);
