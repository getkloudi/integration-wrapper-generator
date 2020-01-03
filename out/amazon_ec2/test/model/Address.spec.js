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
    instance = new AmazonEc2.Address();
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

  describe('Address', function() {
    it('should create an instance of Address', function() {
      // uncomment below and update the code to test Address
      //var instane = new AmazonEc2.Address();
      //expect(instance).to.be.a(AmazonEc2.Address);
    });

    it('should have the property allocationId (base name: "AllocationId")', function() {
      // uncomment below and update the code to test the property allocationId
      //var instane = new AmazonEc2.Address();
      //expect(instance).to.be();
    });

    it('should have the property associationId (base name: "AssociationId")', function() {
      // uncomment below and update the code to test the property associationId
      //var instane = new AmazonEc2.Address();
      //expect(instance).to.be();
    });

    it('should have the property customerOwnedIp (base name: "CustomerOwnedIp")', function() {
      // uncomment below and update the code to test the property customerOwnedIp
      //var instane = new AmazonEc2.Address();
      //expect(instance).to.be();
    });

    it('should have the property customerOwnedIpv4Pool (base name: "CustomerOwnedIpv4Pool")', function() {
      // uncomment below and update the code to test the property customerOwnedIpv4Pool
      //var instane = new AmazonEc2.Address();
      //expect(instance).to.be();
    });

    it('should have the property domain (base name: "Domain")', function() {
      // uncomment below and update the code to test the property domain
      //var instane = new AmazonEc2.Address();
      //expect(instance).to.be();
    });

    it('should have the property instanceId (base name: "InstanceId")', function() {
      // uncomment below and update the code to test the property instanceId
      //var instane = new AmazonEc2.Address();
      //expect(instance).to.be();
    });

    it('should have the property networkBorderGroup (base name: "NetworkBorderGroup")', function() {
      // uncomment below and update the code to test the property networkBorderGroup
      //var instane = new AmazonEc2.Address();
      //expect(instance).to.be();
    });

    it('should have the property networkInterfaceId (base name: "NetworkInterfaceId")', function() {
      // uncomment below and update the code to test the property networkInterfaceId
      //var instane = new AmazonEc2.Address();
      //expect(instance).to.be();
    });

    it('should have the property networkInterfaceOwnerId (base name: "NetworkInterfaceOwnerId")', function() {
      // uncomment below and update the code to test the property networkInterfaceOwnerId
      //var instane = new AmazonEc2.Address();
      //expect(instance).to.be();
    });

    it('should have the property privateIpAddress (base name: "PrivateIpAddress")', function() {
      // uncomment below and update the code to test the property privateIpAddress
      //var instane = new AmazonEc2.Address();
      //expect(instance).to.be();
    });

    it('should have the property publicIp (base name: "PublicIp")', function() {
      // uncomment below and update the code to test the property publicIp
      //var instane = new AmazonEc2.Address();
      //expect(instance).to.be();
    });

    it('should have the property publicIpv4Pool (base name: "PublicIpv4Pool")', function() {
      // uncomment below and update the code to test the property publicIpv4Pool
      //var instane = new AmazonEc2.Address();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "Tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instane = new AmazonEc2.Address();
      //expect(instance).to.be();
    });

  });

}));
