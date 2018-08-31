import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';

import withReduxStore from '../redux/withRedux';

import Nav from '../Components/Nav';
import Footer from '../Components/Footer';

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Container>
        <Provider store={reduxStore}>
          <div>
            <Head>
              <style>
                {`
                  body {
                    margin: 0;
                  }
                `}
              </style>
            </Head>
            <Nav />
            <Component {...pageProps} />
            <Footer />
          </div>
        </Provider>
      </Container>
    );
  }
}
export default withReduxStore(MyApp);
