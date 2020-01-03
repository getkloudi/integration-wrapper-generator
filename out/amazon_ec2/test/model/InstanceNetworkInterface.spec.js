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
    instance = new AmazonEc2.InstanceNetworkInterface();
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

  describe('InstanceNetworkInterface', function() {
    it('should create an instance of InstanceNetworkInterface', function() {
      // uncomment below and update the code to test InstanceNetworkInterface
      //var instane = new AmazonEc2.InstanceNetworkInterface();
      //expect(instance).to.be.a(AmazonEc2.InstanceNetworkInterface);
    });

    it('should have the property association (base name: "Association")', function() {
      // uncomment below and update the code to test the property association
      //var instane = new AmazonEc2.InstanceNetworkInterface();
      //expect(instance).to.be();
    });

    it('should have the property attachment (base name: "Attachment")', function() {
      // uncomment below and update the code to test the property attachment
      //var instane = new AmazonEc2.InstanceNetworkInterface();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "Description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new AmazonEc2.InstanceNetworkInterface();
      //expect(instance).to.be();
    });

    it('should have the property groups (base name: "Groups")', function() {
      // uncomment below and update the code to test the property groups
      //var instane = new AmazonEc2.InstanceNetworkInterface();
      //expect(instance).to.be();
    });

    it('should have the property interfaceType (base name: "InterfaceType")', function() {
      // uncomment below and update the code to test the property interfaceType
      //var instane = new AmazonEc2.InstanceNetworkInterface();
      //expect(instance).to.be();
    });

    it('should have the property ipv6Addresses (base name: "Ipv6Addresses")', function() {
      // uncomment below and update the code to test the property ipv6Addresses
      //var instane = new AmazonEc2.InstanceNetworkInterface();
      //expect(instance).to.be();
    });

    it('should have the property macAddress (base name: "MacAddress")', function() {
      // uncomment below and update the code to test the property macAddress
      //var instane = new AmazonEc2.InstanceNetworkInterface();
      //expect(instance).to.be();
    });

    it('should have the property networkInterfaceId (base name: "NetworkInterfaceId")', function() {
      // uncomment below and update the code to test the property networkInterfaceId
      //var instane = new AmazonEc2.InstanceNetworkInterface();
      //expect(instance).to.be();
    });

    it('should have the property ownerId (base name: "OwnerId")', function() {
      // uncomment below and update the code to test the property ownerId
      //var instane = new AmazonEc2.InstanceNetworkInterface();
      //expect(instance).to.be();
    });

    it('should have the property privateDnsName (base name: "PrivateDnsName")', function() {
      // uncomment below and update the code to test the property privateDnsName
      //var instane = new AmazonEc2.InstanceNetworkInterface();
      //expect(instance).to.be();
    });

    it('should have the property privateIpAddress (base name: "PrivateIpAddress")', function() {
      // uncomment below and update the code to test the property privateIpAddress
      //var instane = new AmazonEc2.InstanceNetworkInterface();
      //expect(instance).to.be();
    });

    it('should have the property privateIpAddresses (base name: "PrivateIpAddresses")', function() {
      // uncomment below and update the code to test the property privateIpAddresses
      //var instane = new AmazonEc2.InstanceNetworkInterface();
      //expect(instance).to.be();
    });

    it('should have the property sourceDestCheck (base name: "SourceDestCheck")', function() {
      // uncomment below and update the code to test the property sourceDestCheck
      //var instane = new AmazonEc2.InstanceNetworkInterface();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "Status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new AmazonEc2.InstanceNetworkInterface();
      //expect(instance).to.be();
    });

    it('should have the property subnetId (base name: "SubnetId")', function() {
      // uncomment below and update the code to test the property subnetId
      //var instane = new AmazonEc2.InstanceNetworkInterface();
      //expect(instance).to.be();
    });

    it('should have the property vpcId (base name: "VpcId")', function() {
      // uncomment below and update the code to test the property vpcId
      //var instane = new AmazonEc2.InstanceNetworkInterface();
      //expect(instance).to.be();
    });

  });

}));
