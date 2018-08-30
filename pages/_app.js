import React from 'react';
import App, { Container } from 'next/app';
import { Provider } from 'react-redux';

import withReduxStore from '../redux/withRedux';

const Layout = (props) => {
  const { children } = props;
  return (
    <div className="layout">
      <h1>ggwp</h1>
      {children}
    </div>
  );
};

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Container>
        <Provider store={reduxStore}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </Container>
    );
  }
}
export default withReduxStore(MyApp);
