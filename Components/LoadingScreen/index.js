import React from 'react';
import { connect } from 'react-redux';
// import styled from 'styled-components';
import Router from 'next/router';

import { actions } from '../../redux/reducers/app';

class LoadingScreen extends React.Component {
  componentDidMount() {
    const { loading, loaded } = this.props;
    Router.onRouteChangeStart = () => {
      console.log('START LOAD');
      loading();
    };
    Router.onRouteChangeComplete = () => {
      console.log('LOAD DONE');
      loaded();
    };
  }

  render() {
    const { isLoading } = this.props;
    return (
      <div>
        {isLoading && 'Loading......'}
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
