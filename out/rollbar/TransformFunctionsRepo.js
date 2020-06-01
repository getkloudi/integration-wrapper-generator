module.exports.transformNameToRef = (item) => {
  return item.name;
};

module.exports.transformThirdPartyProjects = (projects) => {
  return projects._doc;
};

module.exports.convertOrgNameAndProjectIdToProjetRef = (item) => {
  return `https://rollbar.com/${item.organizationName}/?projects=${item.id}`;
};

module.exports.transformQueryParamsToOpts = (query) => {
  const opts = { ...query };
  delete opts.projectId;
  delete opts.userId;
  return {
    ...opts,
    page: query.page ? query.page : 1,
  };
};

module.exports.getAccessTokenFromReq = (res) => {
  if (!!res.query.projectAccessToken) return res.query.projectAccessToken;
  else return res.body.integration.authAccessToken;
};
