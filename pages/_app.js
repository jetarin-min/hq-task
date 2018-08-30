import React from 'react';
import App, { Container } from 'next/app';

const Layout = (props) => {
  const { children } = props;
  return (
    <div className="layout">
      <h1>ggwp</h1>
      {children}
    </div>
  );
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    );
  }
}
