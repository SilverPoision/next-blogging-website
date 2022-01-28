const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "silverpoision1",
        mongodb_password: "IGCtQaHiPKJvGwYQ",
        mongodb_cluster: "cluster0",
        mongodb_database: "blog-dev",
      },
    };
  }
  return {
    env: {
      mongodb_username: "silverpoision",
      mongodb_password: "IGCtQaHiPKJvGwYQ",
      mongodb_cluster: "cluster0",
      mongodb_database: "blog",
    },
  };
};
