import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { actions } from '../redux/reducers/movie';

import MovieCard from '../Components/MovieCard';

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

class Home extends React.Component {
  // static getInitialProps({ reduxStore, req }) {
  static async getInitialProps({ reduxStore }) {
    // const isServer = !!req;
    // reduxStore.dispatch(serverRenderClock(isServer));
    await reduxStore.dispatch(actions.getMovies());
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
    const { count, movies } = this.props;
    return (
      <div>
        <Title>Home</Title>
        <div>{count}</div>
        <a onClick={this.handleClick}>click me</a>
        <div>
          {movies && movies.map(movie => <MovieCard {...movie} key={movie.id} />)}
        </div>
      </div>
    );
  }
}

export default connect(
  ({ movie }) => ({
    movies: movie.movies,
    count: movie.count,
  }), {
    ...actions,
  },
)(Home);
