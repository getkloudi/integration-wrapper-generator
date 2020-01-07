const aws4 = require("aws4");
const querystring = require("querystring");

module.exports.getRequest = (path, method, region, queryParams, auth) => {
  path = `${path}&${querystring.stringify(queryParams)}`;
  auth = auth.apiKey.split("|");
  region = region.split(".")[0];

  var signedReq = {
    method: method,
    region: region,
    path: path,
    service: `ec2`,
    headers: {
      "User-Agent": "node-superagent/3.7.0",
      "Content-Type": "application/json",
      Accept: "*/*"
    }
  };
  return aws4.sign(signedReq, {
    accessKeyId: auth[0],
    secretAccessKey: auth[1]
  });
};
