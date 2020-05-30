module.exports.transformThirdPartyProjects = (projects) => {
  return projects._doc.map((item) => {
    let projectAccessToken;
    if (
      !!item.projectSpecificParams &&
      !!item.projectSpecificParams.projectAccessToken
    ) {
      projectAccessToken = item.projectSpecificParams.projectAccessToken;
      delete item.projectSpecificParams.projectAccessToken;
    }
    return { ...item, projectAccessToken: projectAccessToken };
  });
};
module.exports.transformQueryParamsToOpts = (params) => {
  const opts = { ...params };
  delete opts.projectId;
  delete opts.userId;
  return {
    ...opts,
    categoryId: params.categoryId ? params.categoryId : '',
    startAt: params.startAt ? params.startAt : 0,
    maxResults: params.maxResults ? params.maxResults : 50,
  };
};

// ,
//   {
//     "type": "REQUEST",
//     "entity": "ALL",
//     "integration": "ROLLBAR",
//     "method": "GET|POST|PUT|DELETE",
//     "map": [
//       {
//         "input": {
//           "key": "body.integration.authAccessToken"
//         },
//         "transform": {
//           "type": "ONE-TO-ONE"
//         },
//         "output": {
//           "key": "accessToken"
//         }
//       },
//       {
//         "input": {
//           "key": "query"
//         },
//         "transform": {
//           "type": "ONE-TO-ONE"
//         },
//         "output": {
//           "key": "query"
//         }
//       }
//     ]
//   }
