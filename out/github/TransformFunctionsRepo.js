const _ = require("lodash");

module.exports.splitAndGetFirstElement = (str, delimiter) => {
  return str.split(delimiter)[0];
};

module.exports.splitAndGetLastElement = (str, delimiter) => {
  return _.last(str.split(delimiter));
};

module.exports.transforToInfoTableMetrics = (value, key) => {
  return { key: key, value: value };
};

module.exports.tansformThirdPartyProjectsToRepoAndOwner = (value) => {
  return {
    repo: value.projectId,
    owner: value.organizationId,
  };
};

module.exports.transformPatchBody = (body) => {
  delete body.thirdPartyProject;

  if (body.status === "FIXED") body.status = "closed";
  else if (body.status === "OPEN") body.status = "open";
  else body.status = "all";

  body = {
    state: body.status,
  };
  Object.keys(body).forEach(
    (key) => body[key] === undefined && delete body[key]
  );
  return body;
};

module.exports.transformQueryToParams = (query) => {
  delete query.repo;
  delete query.owner;
  delete query.projectId;
  delete query.userId;

  return query;
};
