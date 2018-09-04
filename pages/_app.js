import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import colors from '../theme/colors';

import Nav from '../Components/Nav';
import Footer from '../Components/Footer';
import Toast from '../Components/Toast';
import LoadingScreen from '../Components/LoadingScreen';
import globalStyle from '../theme/globalStyle';
import initializeStore from '../redux/initializeStore';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <ThemeProvider theme={colors}>
            <div>
              <LoadingScreen />
              <Toast />
              <Head>
                <style>
                  {globalStyle}
                </style>
              </Head>
              <Nav />
              <Component {...pageProps} />
              <Footer />
            </div>
          </ThemeProvider>
        </Provider>
      </Container>
    );
  }
}
export default withRedux(initializeStore)(withReduxSaga({ async: true })(MyApp));
