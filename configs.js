const environments = {
  development: {
  },
  production: {
    isProduction: true,
    port: 8000,
  },
}[process.env.NODE_ENV || 'development'];

module.exports = {
  isProduction: false,
  baseURL: 'https://my-json-server.typicode.com/jetarin-min/json-placeholder',
  port: 3000,
  ...environments,
};
