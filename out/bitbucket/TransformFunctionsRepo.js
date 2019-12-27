const _ = require("lodash");

module.exports.splitAndGetFirstElement = (str, delimiter) => {
  return str.split(delimiter)[0];
};

module.exports.splitAndGetLastElement = (str, delimiter) => {
  return _.last(str.split(delimiter));
};

module.exports.transforToInfoTableMetrics = (value, key) => {
  return { key: key, value: value ? value : "..." };
};

module.exports.tansformThirdPartyProjectsToWorkspaceAndRepoSlug = value => {
  return {
    repoSlug: value.projectId,
    workspace: value.organizationId
  };
};
