module.exports.tansformDomainToAtlassianDomain = (str) => {
  return `${str}.atlassian.net`;
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
