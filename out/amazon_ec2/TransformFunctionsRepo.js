const _ = require("lodash");

module.exports.transformRegionsToURLFormat = regions => {
  return regions ? `${regions}.` : ``;
};

module.exports.transformQueryParmsToOpts = query => {
  const opts = { ...query };
  delete opts.projectId;
  delete opts.userId;
  return {
    version: "2016-11-15",
    ...opts
  };
};

module.exports.getSignatureV4AuthorizationHeader = req => {
  const accessKeyId = req.body.integration.authAccessToken;
  const secretAccessKey =
    req.body.integration.integrationSpecificParams.secretKey;
  return `${accessKeyId}|${secretAccessKey}`;
};
