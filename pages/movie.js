import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { actions } from '../redux/reducers/movie';

import { Inner } from '../Components/Global';
import MovieInfo from '../Components/MovieInfo';
import Row from '../Components/Row';

const SimilarHeader = styled.h2`
  text-align: center;
`;

class MovieDetail extends React.Component {
  static async getInitialProps({ reduxStore, query }) {
    await Promise.all([
      reduxStore.dispatch(actions.getMovieDetail(query.id)),
      reduxStore.dispatch(actions.getMovies()), // Act as similar movies for this page
    ]);
    return {};
  }

  constructor(props) {
    super(props);
    this.loadSeat = this.loadSeat.bind(this);
  }

  componentDidMount() {
    this.loadSeat();
  }

  componentDidUpdate(prevProps) {
    const { props } = this;
    if (prevProps.movie.id !== props.movie.id) {
      this.loadSeat();
    }
  }

  loadSeat() {
    const { getSeat, movie } = this.props;
    getSeat(movie.id);
  }

  render() {
    const { movie, movies, seat, isSeatLoading } = this.props;
    return (
      <div>
        <Inner isPadding>
          <MovieInfo {...movie} seat={seat} isSeatLoading={isSeatLoading} />
          <SimilarHeader>Similar Movies</SimilarHeader>
          <Row items={movies.filter(m => m.id !== movie.id)} />
        </Inner>
      </div>
    );
  }
}

export default connect(
  ({ movie }) => ({
    movie: movie.movie,
    movies: movie.movies, // Act as similar movies
    seat: movie.seat,
    isSeatLoading: movie.isSeatLoading,
  }), {
    getSeat: actions.getSeat,
  },
)(MovieDetail);
