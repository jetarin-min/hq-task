import React from 'react';
import { connect } from 'react-redux';
import withReduxSaga from 'next-redux-saga';
import styled from 'styled-components';

import { actions } from '../redux/reducers/movie';
import { actions as appActions } from '../redux/reducers/app';

import { Inner } from '../Components/Global';
import MovieInfo from '../Components/MovieInfo';
import Row from '../Components/Row';
import Spinner from '../Components/Spinner';

const SimilarHeader = styled.h2`
  text-align: center;
`;

const SpinnerContainer = styled.div`
  position: relative;
  height: 300px;
`;

class MovieDetail extends React.Component {
  static async getInitialProps(props) {
    const { store, isServer, query } = props.ctx;
    // await Promise.all([
    //   // reduxStore.dispatch(actions.getMovieDetail(query.id)),
    //   // reduxStore.dispatch(actions.getMovies()), // Act as similar movies for this page
    //   reduxStore.dispatch(actions.loadMovieDetail(query.id)),
    //   // reduxStore.dispatch(actions.loadMovies()), // Act as similar movies for this page
    // ]);
    store.dispatch(actions.loadMovies());
    store.dispatch(actions.loadMovieDetail(query.id));
    store.dispatch(actions.loadSeats(query.id));
    return { isServer };
  }

  constructor(props) {
    super(props);
    this.loadSeats = this.loadSeats.bind(this);
    this.handlePurchase = this.handlePurchase.bind(this);
  }

  componentDidMount() {
    this.loadSeats();
  }

  componentDidUpdate(prevProps) {
    const { props } = this;
    if (prevProps.movie.id !== props.movie.id) {
      this.loadSeats();
    }
  }

  handlePurchase(seatId) {
    const { seat, pushToast } = this.props;
    const selectedSeat = seat && seat.types.find(s => s.id === seatId);
    pushToast(true, `${selectedSeat.title} has been purchased (${selectedSeat.amount} ${selectedSeat.currency})`);
  }

  loadSeats() {
    const { loadSeats, movie } = this.props;
    loadSeats(movie.id);
  }

  render() {
    const { movie, movies, seat, isSeatLoading, isMovieLoading, isMoviesLoading } = this.props;
    return (
      <div>
        <Inner isPadding>
          {isMovieLoading
            ? <SpinnerContainer><Spinner /></SpinnerContainer>
            : <MovieInfo {...movie} seat={seat} isSeatLoading={isSeatLoading} onPurchase={this.handlePurchase} />
          }
          <SimilarHeader>Similar Movies</SimilarHeader>
        </Inner>
        <Inner>
          {isMoviesLoading
            ? <SpinnerContainer><Spinner /></SpinnerContainer>
            : <Row items={movies.filter(m => m.id !== movie.id)} />
          }
        </Inner>
      </div>
    );
  }
}

export default withReduxSaga({ async: true })(connect(
  ({ movie }) => ({
    movie: movie.movie,
    movies: movie.movies, // Act as similar movies
    seat: movie.seat,
    isSeatLoading: movie.isSeatLoading,
    isMoviesLoading: movie.isMoviesLoading,
    isMovieLoading: movie.isMovieLoading,
  }), {
    loadSeats: actions.loadSeats,
    pushToast: appActions.pushToast,
  },
)(MovieDetail));
