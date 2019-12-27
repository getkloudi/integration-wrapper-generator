const _ = require("lodash");
const Axios = require("axios");
const nconf = require("nconf");
const qs = require("querystring");

module.exports.getRefreshedAccessToken = async integration => {
  console.log(integration);
  const res = await Axios.default.post(
    "https://bitbucket.org/site/oauth2/access_token",
    qs.stringify({
      grant_type: "refresh_token",
      refresh_token: integration.refreshToken
    }),
    {
      auth: {
        username: nconf.get("BITBUCKET_CLIENT_ID"),
        password: nconf.get("BITBUCKET_CLIENT_SECRET")
      }
    }
  );
  return res.data.access_token;
};

module.exports.splitAndGetFirstElement = (str, delimiter) => {
  return str.split(delimiter)[0];
};

module.exports.splitAndGetLastElement = (str, delimiter) => {
  return _.last(str.split(delimiter));
};

module.exports.transforToInfoTableMetrics = (value, key) => {
  return { key: key, value: value };
};

module.exports.tansformThirdPartyProjectsToRepoAndOwner = value => {
  return {
    repo: value.projectId,
    owner: value.organizationId
  };
};
