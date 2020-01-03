/**
 * Amazon Elastic Compute Cloud
 * <fullname>Amazon Elastic Compute Cloud</fullname> <p>Amazon Elastic Compute Cloud (Amazon EC2) provides secure and resizable computing capacity in the AWS cloud. Using Amazon EC2 eliminates the need to invest in hardware up front, so you can develop and deploy applications faster.</p> <p>To learn more, see the following resources:</p> <ul> <li> <p>Amazon EC2: <a href=\"http://aws.amazon.com/ec2\">AmazonEC2 product page</a>, <a href=\"http://aws.amazon.com/documentation/ec2\">Amazon EC2 documentation</a> </p> </li> <li> <p>Amazon EBS: <a href=\"http://aws.amazon.com/ebs\">Amazon EBS product page</a>, <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AmazonEBS.html\">Amazon EBS documentation</a> </p> </li> <li> <p>Amazon VPC: <a href=\"http://aws.amazon.com/vpc\">Amazon VPC product page</a>, <a href=\"http://aws.amazon.com/documentation/vpc\">Amazon VPC documentation</a> </p> </li> <li> <p>AWS VPN: <a href=\"http://aws.amazon.com/vpn\">AWS VPN product page</a>, <a href=\"http://aws.amazon.com/documentation/vpn\">AWS VPN documentation</a> </p> </li> </ul>
 *
 * The version of the OpenAPI document: 2016-11-15
 * Contact: mike.ralphson@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.AmazonEc2);
  }
}(this, function(expect, AmazonEc2) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new AmazonEc2.RevokeSecurityGroupEgressRequest();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('RevokeSecurityGroupEgressRequest', function() {
    it('should create an instance of RevokeSecurityGroupEgressRequest', function() {
      // uncomment below and update the code to test RevokeSecurityGroupEgressRequest
      //var instane = new AmazonEc2.RevokeSecurityGroupEgressRequest();
      //expect(instance).to.be.a(AmazonEc2.RevokeSecurityGroupEgressRequest);
    });

    it('should have the property cidrIp (base name: "CidrIp")', function() {
      // uncomment below and update the code to test the property cidrIp
      //var instane = new AmazonEc2.RevokeSecurityGroupEgressRequest();
      //expect(instance).to.be();
    });

    it('should have the property dryRun (base name: "DryRun")', function() {
      // uncomment below and update the code to test the property dryRun
      //var instane = new AmazonEc2.RevokeSecurityGroupEgressRequest();
      //expect(instance).to.be();
    });

    it('should have the property fromPort (base name: "FromPort")', function() {
      // uncomment below and update the code to test the property fromPort
      //var instane = new AmazonEc2.RevokeSecurityGroupEgressRequest();
      //expect(instance).to.be();
    });

    it('should have the property groupId (base name: "GroupId")', function() {
      // uncomment below and update the code to test the property groupId
      //var instane = new AmazonEc2.RevokeSecurityGroupEgressRequest();
      //expect(instance).to.be();
    });

    it('should have the property ipPermissions (base name: "IpPermissions")', function() {
      // uncomment below and update the code to test the property ipPermissions
      //var instane = new AmazonEc2.RevokeSecurityGroupEgressRequest();
      //expect(instance).to.be();
    });

    it('should have the property ipProtocol (base name: "IpProtocol")', function() {
      // uncomment below and update the code to test the property ipProtocol
      //var instane = new AmazonEc2.RevokeSecurityGroupEgressRequest();
      //expect(instance).to.be();
    });

    it('should have the property sourceSecurityGroupName (base name: "SourceSecurityGroupName")', function() {
      // uncomment below and update the code to test the property sourceSecurityGroupName
      //var instane = new AmazonEc2.RevokeSecurityGroupEgressRequest();
      //expect(instance).to.be();
    });

    it('should have the property sourceSecurityGroupOwnerId (base name: "SourceSecurityGroupOwnerId")', function() {
      // uncomment below and update the code to test the property sourceSecurityGroupOwnerId
      //var instane = new AmazonEc2.RevokeSecurityGroupEgressRequest();
      //expect(instance).to.be();
    });

    it('should have the property toPort (base name: "ToPort")', function() {
      // uncomment below and update the code to test the property toPort
      //var instane = new AmazonEc2.RevokeSecurityGroupEgressRequest();
      //expect(instance).to.be();
    });

  });

}));
