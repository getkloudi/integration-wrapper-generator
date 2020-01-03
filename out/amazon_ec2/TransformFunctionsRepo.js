const _ = require("lodash");
const aws4 = require("aws4");

transformAction = entity => {
  entity = entity.replace("ACTION_", "");
  return entity
    .split("_")
    .map(
      item => `${item.charAt(0).toUpperCase()}${item.slice(1).toLowerCase()}`
    )
    .join("");
};

getSignedRequest = req => {
  const action = req.params.entity;
  const method = req.method;
  const verion = `2016-11-15`;
  const regions = req.body.integration.integrationSpecificParams.regions;
  const accessKeyId = req.body.integration.authAccessToken;
  const secretAccessKey =
    req.body.integration.integrationSpecificParams.secretKey;
  const reqParams = `Action=${transformAction(action)}`;

  var signedReq = {
    method: method,
    region: regions,
    path: `/?${reqParams}&DryRun=false&AllRegions=true&Version=2016-11-15`,
    service: `ec2`,
    headers: {
      "User-Agent": "node-superagent/3.7.0",
      "Content-Type": "application/json",
      Accept: "*/*"
    }
  };
  aws4.sign(signedReq, {
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey
  });
  return signedReq;
};

module.exports.transformRegionsToURLFormat = regions => {
  return regions ? `${regions}.` : ``;
};

module.exports.getSignatureV4Headers = req => {
  const headers = getSignedRequest(req).headers;
  // const authorization = headers["Authorization"];
  // return {
  //   xAmzDate: headers["X-Amz-Date"],
  //   xAmzAlgorithm: authorization[0],
  //   xAmzCredential: authorization[1].split("=")[1], //Credential
  //   xAmzSignedHeaders: authorization[2].split("=")[1], //SignedHeaders
  //   xAmzSignature: authorization[3].split("=")[1],
  //   hmac: authorization[3].split("=")[1]
  // };
  return {
    filter: undefined,
    regionName: undefined,
    xAmzDate: headers["X-Amz-Date"],
    version: "2016-11-15"
  };
};

module.exports.getSignatureV4AuthorizationHeader = req => {
  return getSignedRequest(req).headers["Authorization"];
};
