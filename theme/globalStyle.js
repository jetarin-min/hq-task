import colors from './colors';

export default `
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    line-height: 1.2;
  }
  h1 {
    font-size: 48px;
    font-weight: 500;
    margin: 24px 0;
  }
  h2 {
    font-size: 36px;
    font-weight: 500;
    margin: 24px 0;
  }
  h3 {
    font-size: 24px;
    font-weight: 500;
    margin: 12px 0;
  }
  h4 {
    font-size: 24px;
    font-weight: 400;
    margin: 12px 0;
  }
  p {
    font-size: 14px;
  }
  a {
    text-decoration: none;
    font-size: 16px;
    color: ${colors.borderGray};
  }
  a:visited {
    color: ${colors.borderGray};
  } 
`;
