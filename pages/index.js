import React from 'react';
import { connect } from 'react-redux';
import withReduxSaga from 'next-redux-saga';
import styled from 'styled-components';

import { actions } from '../redux/reducers/movie';

import Row from '../Components/Row';
import { Inner } from '../Components/Global';
import Spinner from '../Components/Spinner';

const Title = styled.h1`
  text-align: center;
`;

const SpinnerContainer = styled.div`
  position: relative;
  height: 300px;
`;

class Home extends React.Component {
  // static getInitialProps({ reduxStore, req }) {
  static async getInitialProps(props) {
    const { store, isServer } = props.ctx;
    // const isServer = !!req;
    // reduxStore.dispatch(serverRenderClock(isServer));
    // await reduxStore.dispatch(actions.getMovies());
    // await reduxStore.dispatch(actions.loadMovies());
    store.dispatch(actions.loadMovies());
    return { isServer };
  }

  render() {
    const { movies, isMoviesLoading } = this.props;
    return (
      <div>
        <Inner>
          <Title>Our Movies</Title>
          {isMoviesLoading
            ? <SpinnerContainer><Spinner /></SpinnerContainer>
            : <Row items={movies} />
          }
        </Inner>
      </div>
    );
  }
}

export default withReduxSaga({ async: true })(connect(
  ({ movie }) => ({
    movies: movie.movies,
    isMoviesLoading: movie.isMoviesLoading,
  }),
  {},
)(Home));
