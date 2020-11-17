const { config } = require("dotenv");
config();

const routePrefix = "/carrier";

module.exports = {
  project: "carrier",
  server: {
    routePrefix,
    port: process.env.PORT || 4109,
    proxy: false,
    staticDir: "./dist",
    delayInitMiddleware: false,
    cookie: {
      secrets: ["insecure plain text", "insecure secret here"],
    },
    noSecurityHeadersRoutes: {
      [`${routePrefix}/api-gateway/`]: true,
      [`${routePrefix}/api/`]: true,
    },
    noCsrfRoutes: {
      [`${routePrefix}/api-gateway/`]: true,
      [`${routePrefix}/api/`]: true,
    },
  },
  gateways: {
    logger: {
      enabled: true,
      level: "debug",
    },
    mongoose: {
      uri: process.env.MONGODB_URI,
    },
  },
  analytics: {
    googleTid: "TODO: replace with your googleTid",
  },
  csp: {
    "default-src": ["none"],
    "manifest-src": ["self"],
    "style-src": ["self", "unsafe-inline", "https://fonts.googleapis.com/css"],
    "frame-src": [],
    "connect-src": [
      "self",
      "https://www.google-analytics.com/",
      "https://carrier.onrender.com/carrier/api-gateway/",
    ],
    "child-src": ["self"],
    "font-src": ["self", "data:", "https://fonts.gstatic.com/"],
    "img-src": ["*", "data:"],
    "media-src": ["self"],
    "object-src": ["self"],
    "script-src": ["self", "https://www.google-analytics.com/"],
  },
};
