const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    "/index/stage/v1/",
    createProxyMiddleware({
      target: "https://24h.pchome.com.tw",
      changeOrigin: true,
    })
  );
};
