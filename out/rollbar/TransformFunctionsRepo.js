module.exports.transformNameToRef = (item) => {
  return item.name;
};

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

module.exports.convertOrgNameAndProjectIdToProjetRef = (item) => {
  return `https://rollbar.com/${item.organizationName}/?projects=${item.id}`;
};

module.exports.transformQueryParamsToOpts = (queryParams) => {
  const opts = { ...queryParams };
  delete opts.projectId;
  delete opts.userId;
  return {
    ...opts,
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
