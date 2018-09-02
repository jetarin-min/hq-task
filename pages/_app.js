import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import withReduxStore from '../redux/withRedux';
import colors from '../theme/colors';

import Nav from '../Components/Nav';
import Footer from '../Components/Footer';
import Toast from '../Components/Toast';
import LoadingScreen from '../Components/LoadingScreen';
import globalStyle from '../theme/globalStyle';

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Container>
        <Provider store={reduxStore}>
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
export default withReduxStore(MyApp);
