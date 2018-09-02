import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Router from 'next/router';

import { actions } from '../../redux/reducers/app';

import Spinner from '../Spinner';

const SpinnerContainer = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  top: 0;
  left: 0;
  z-index: 200;
`;

class LoadingScreen extends React.Component {
  componentDidMount() {
    const { loading, loaded } = this.props;
    Router.onRouteChangeStart = () => {
      loading();
    };
    Router.onRouteChangeComplete = () => {
      loaded();
    };
  }

  render() {
    const { isLoading } = this.props;
    return (
      <div>
        {isLoading && (
          <SpinnerContainer>
            <Spinner />
          </SpinnerContainer>
        )}
      </div>
    );
  }
}

export default connect(
  ({ app }) => ({
    isLoading: app.isLoading,
  }), {
    loading: actions.loading,
    loaded: actions.loaded,
  },
)(LoadingScreen);
