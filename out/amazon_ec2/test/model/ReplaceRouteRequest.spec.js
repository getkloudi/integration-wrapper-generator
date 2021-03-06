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
    instance = new AmazonEc2.ReplaceRouteRequest();
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

  describe('ReplaceRouteRequest', function() {
    it('should create an instance of ReplaceRouteRequest', function() {
      // uncomment below and update the code to test ReplaceRouteRequest
      //var instane = new AmazonEc2.ReplaceRouteRequest();
      //expect(instance).to.be.a(AmazonEc2.ReplaceRouteRequest);
    });

    it('should have the property destinationCidrBlock (base name: "DestinationCidrBlock")', function() {
      // uncomment below and update the code to test the property destinationCidrBlock
      //var instane = new AmazonEc2.ReplaceRouteRequest();
      //expect(instance).to.be();
    });

    it('should have the property destinationIpv6CidrBlock (base name: "DestinationIpv6CidrBlock")', function() {
      // uncomment below and update the code to test the property destinationIpv6CidrBlock
      //var instane = new AmazonEc2.ReplaceRouteRequest();
      //expect(instance).to.be();
    });

    it('should have the property dryRun (base name: "DryRun")', function() {
      // uncomment below and update the code to test the property dryRun
      //var instane = new AmazonEc2.ReplaceRouteRequest();
      //expect(instance).to.be();
    });

    it('should have the property egressOnlyInternetGatewayId (base name: "EgressOnlyInternetGatewayId")', function() {
      // uncomment below and update the code to test the property egressOnlyInternetGatewayId
      //var instane = new AmazonEc2.ReplaceRouteRequest();
      //expect(instance).to.be();
    });

    it('should have the property gatewayId (base name: "GatewayId")', function() {
      // uncomment below and update the code to test the property gatewayId
      //var instane = new AmazonEc2.ReplaceRouteRequest();
      //expect(instance).to.be();
    });

    it('should have the property instanceId (base name: "InstanceId")', function() {
      // uncomment below and update the code to test the property instanceId
      //var instane = new AmazonEc2.ReplaceRouteRequest();
      //expect(instance).to.be();
    });

    it('should have the property localGatewayId (base name: "LocalGatewayId")', function() {
      // uncomment below and update the code to test the property localGatewayId
      //var instane = new AmazonEc2.ReplaceRouteRequest();
      //expect(instance).to.be();
    });

    it('should have the property localTarget (base name: "LocalTarget")', function() {
      // uncomment below and update the code to test the property localTarget
      //var instane = new AmazonEc2.ReplaceRouteRequest();
      //expect(instance).to.be();
    });

    it('should have the property natGatewayId (base name: "NatGatewayId")', function() {
      // uncomment below and update the code to test the property natGatewayId
      //var instane = new AmazonEc2.ReplaceRouteRequest();
      //expect(instance).to.be();
    });

    it('should have the property networkInterfaceId (base name: "NetworkInterfaceId")', function() {
      // uncomment below and update the code to test the property networkInterfaceId
      //var instane = new AmazonEc2.ReplaceRouteRequest();
      //expect(instance).to.be();
    });

    it('should have the property routeTableId (base name: "RouteTableId")', function() {
      // uncomment below and update the code to test the property routeTableId
      //var instane = new AmazonEc2.ReplaceRouteRequest();
      //expect(instance).to.be();
    });

    it('should have the property transitGatewayId (base name: "TransitGatewayId")', function() {
      // uncomment below and update the code to test the property transitGatewayId
      //var instane = new AmazonEc2.ReplaceRouteRequest();
      //expect(instance).to.be();
    });

    it('should have the property vpcPeeringConnectionId (base name: "VpcPeeringConnectionId")', function() {
      // uncomment below and update the code to test the property vpcPeeringConnectionId
      //var instane = new AmazonEc2.ReplaceRouteRequest();
      //expect(instance).to.be();
    });

  });

}));
