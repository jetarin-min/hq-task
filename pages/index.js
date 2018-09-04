import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Head from 'next/head';

import { actions } from '../redux/reducers/movie';

import Row from '../Components/Row';
import { Inner } from '../Components/Global';

const Title = styled.h1`
  text-align: center;
`;

class Home extends React.Component {
  static async getInitialProps(props) {
    const { store, isServer } = props.ctx;
    store.dispatch(actions.loadMovies());
    return { isServer };
  }

  render() {
    const { movies, isMoviesLoading } = this.props;
    return (
      <div>
        <Head>
          <title>Home - Movie Ticket</title>
        </Head>
        <Inner>
          <Title>Our Movies</Title>
          <Row items={movies} isLoading={isMoviesLoading} />
        </Inner>
      </div>
    );
  }
}

export default connect(
  ({ movie }) => ({
    movies: movie.movies,
    isMoviesLoading: movie.isMoviesLoading,
  }),
  {},
)(Home);
