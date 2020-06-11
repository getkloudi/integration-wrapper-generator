module.exports.transformThirdPartyProjects = (projects) => {
  return projects._doc;
};
module.exports.transformQueryParamsToOpts = (query) => {
  const opts = { ...query };
  delete opts.projectId;
  delete opts.userId;
  return {
    ...opts,
    categoryId: query.categoryId ? query.categoryId : '',
    startAt: query.startAt ? query.startAt : 0,
    maxResults: query.maxResults ? query.maxResults : 50,
  };
};
