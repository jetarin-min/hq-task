import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Head from 'next/head';

import { actions } from '../redux/reducers/movie';
import getMedia from '../utils/getMedia';
import getMovieJsonLd from '../utils/getMovieJsonLd';

import { Inner } from '../Components/Global';
import MovieInfo from '../Components/MovieInfo';
import Row from '../Components/Row';

const SimilarHeader = styled.h2`
  text-align: center;
`;

class MovieDetail extends React.Component {
  static async getInitialProps(props) {
    const { store, isServer, query } = props.ctx;
    store.dispatch(actions.loadMovies());
    store.dispatch(actions.loadMovieDetail(query.id));
    store.dispatch(actions.loadSeats(query.id));
    return { isServer };
  }

  constructor(props) {
    super(props);
    this.handlePurchase = this.handlePurchase.bind(this);
  }

  handlePurchase(seatId) {
    const { purchaseTicket } = this.props;
    purchaseTicket(seatId);
  }

  render() {
    const { movie, movies, seat, isSeatLoading, isMovieLoading, isMoviesLoading, isPurchasing } = this.props;
    return (
      <div>
        <Head>
          <title>{`${movie.title} - Movie Ticket`}</title>
          <meta name="description" content={movie.metaDescription || movie.description} />
          <meta name="keywords" context={movie.metaKeywords || movie.title} />
          <meta property="og:description" content={movie.metaDescription || movie.description} />
          <meta property="og:image" content={getMedia(movie.cover, 'detailCover')} />
        </Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: getMovieJsonLd(movie, seat) }} />
        <Inner isPadding>
          <MovieInfo
            {...movie}
            seat={seat}
            isSeatLoading={isSeatLoading || isPurchasing}
            onPurchase={this.handlePurchase}
            isLoading={isMovieLoading}
          />
          <SimilarHeader>Similar Movies</SimilarHeader>
        </Inner>
        <Inner>
          <Row items={movies.filter(m => m.id !== movie.id)} isLoading={isMoviesLoading} />
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
    isMoviesLoading: movie.isMoviesLoading,
    isMovieLoading: movie.isMovieLoading,
    isPurchasing: movie.isPurchasing,
  }), {
    loadSeats: actions.loadSeats,
    purchaseTicket: actions.purchaseTicket,
  },
)(MovieDetail);
