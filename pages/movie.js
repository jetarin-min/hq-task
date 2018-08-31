import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { actions } from '../redux/reducers/movie';

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

class MovieDetail extends React.Component {
  // static getInitialProps({ reduxStore, req }) {
  static async getInitialProps({ reduxStore, query }) {
    // const isServer = !!req;
    // reduxStore.dispatch(serverRenderClock(isServer));
    await reduxStore.dispatch(actions.getMovieDetail(query.id));
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
    const { movie } = this.props;
    return (
      <div>
        <Title>Movie Detail</Title>
        <div>{(movie && movie.title) || 'Untitled'}</div>
      </div>
    );
  }
}

export default connect(
  ({ movie }) => ({
    movie: movie.movie,
  }), {
    getMovieDetail: actions.getMovieDetail,
  },
)(MovieDetail);
