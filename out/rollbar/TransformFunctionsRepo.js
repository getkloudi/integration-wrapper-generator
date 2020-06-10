module.exports.transformNameToRef = (item) => {
  return item.name;
};

module.exports.transformValueToKeyAfterNullChecks = (value) => {
  if (
    !value ||
    value === undefined ||
    value === null ||
    value === 'undefined' ||
    value === 'null'
  )
    return 'Unnamed-Rollbar-Project';
  else return value;
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
  if (!!res.query.thirdPartyProject.projectId) {
    const data = res.body.integration.thirdPartyProjects.find(
      ({ projectId }) => {
        return `${projectId}` === `${res.query.thirdPartyProject.projectId}`;
      }
    );
    return data.projectSpecificParams.projectAccessToken;
  } else return res.body.integration.authAccessToken;
};

module.exports.transformItemToBug = (item) => {
  return {
    culprit: { url: '' },
    reportedBy: 'ROLLBAR',
    reportedWhen: {
      first: item.first_occurrence_timestamp,
      last: item.last_occurrence_timestamp,
    },
    title: item.title,
    counter: item.counter,
    monitoringToolRefs: {
      id: item.id,
      title: item.title,
      count: parseInt(item.total_occurrences),
    },
    totalCount: parseInt(item.total_occurrences),
    platform: item.platform,
    logger: '',
    level: item.level,
    environment: item.environment,
    status: item.status.toUpperCase() === 'ACTIVE' ? 'OPEN' : item.status,
    similarBugs: [],
    count: parseInt(item.total_occurrences),
    occurences: {
      activating: item.activating_occurrence_id,
      first: item.first_occurrence_id,
      last: item.last_occurrence_id,
    },
  };
};
