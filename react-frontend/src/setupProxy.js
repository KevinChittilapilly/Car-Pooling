const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/all',
    createProxyMiddleware({
      target: 'http://localhost:8099',
      changeOrigin: true,
    })
  );
  app.use(
    '/oneid',
    createProxyMiddleware({
      target: 'http://localhost:8099',
      changeOrigin: true,
    })
  );
  app.use(
    '/load',
    createProxyMiddleware({
      target: 'http://localhost:8099',
      changeOrigin: true,
    })
  );
  app.use(
    '/put',
    createProxyMiddleware({
      target: 'http://localhost:8099',
      changeOrigin: true,
    })
  );
  app.use(
    '/put1',
    createProxyMiddleware({
      target: 'http://localhost:8090',
      changeOrigin: true,
    })
  );
  app.use(
    '/put2',
    createProxyMiddleware({
      target: 'http://localhost:8090',
      changeOrigin: true,
    })
  );
  app.use(
    '/all1',
    createProxyMiddleware({
      target: 'http://localhost:8090',
      changeOrigin: true,
    })
  );
  app.use(
    '/load1',
    createProxyMiddleware({
      target: 'http://localhost:8090',
      changeOrigin: true,
    })
  );
  app.use(
    '/getid',
    createProxyMiddleware({
      target: 'http://localhost:8090',
      changeOrigin: true,
    })
  );
  app.use(
    '/one',
    createProxyMiddleware({
      target: 'http://localhost:8090',
      changeOrigin: true,
    })
  );
  app.use(
    '/delete',
    createProxyMiddleware({
      target: 'http://localhost:8099',
      changeOrigin: true,
    })
  );
  app.use(
    '/name',
    createProxyMiddleware({
      target: 'http://localhost:8090',
      changeOrigin: true,
    })
  );

};