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
    instance = new AmazonEc2.ElasticGpus();
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

  describe('ElasticGpus', function() {
    it('should create an instance of ElasticGpus', function() {
      // uncomment below and update the code to test ElasticGpus
      //var instane = new AmazonEc2.ElasticGpus();
      //expect(instance).to.be.a(AmazonEc2.ElasticGpus);
    });

    it('should have the property availabilityZone (base name: "AvailabilityZone")', function() {
      // uncomment below and update the code to test the property availabilityZone
      //var instane = new AmazonEc2.ElasticGpus();
      //expect(instance).to.be();
    });

    it('should have the property elasticGpuHealth (base name: "ElasticGpuHealth")', function() {
      // uncomment below and update the code to test the property elasticGpuHealth
      //var instane = new AmazonEc2.ElasticGpus();
      //expect(instance).to.be();
    });

    it('should have the property elasticGpuId (base name: "ElasticGpuId")', function() {
      // uncomment below and update the code to test the property elasticGpuId
      //var instane = new AmazonEc2.ElasticGpus();
      //expect(instance).to.be();
    });

    it('should have the property elasticGpuState (base name: "ElasticGpuState")', function() {
      // uncomment below and update the code to test the property elasticGpuState
      //var instane = new AmazonEc2.ElasticGpus();
      //expect(instance).to.be();
    });

    it('should have the property elasticGpuType (base name: "ElasticGpuType")', function() {
      // uncomment below and update the code to test the property elasticGpuType
      //var instane = new AmazonEc2.ElasticGpus();
      //expect(instance).to.be();
    });

    it('should have the property instanceId (base name: "InstanceId")', function() {
      // uncomment below and update the code to test the property instanceId
      //var instane = new AmazonEc2.ElasticGpus();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "Tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instane = new AmazonEc2.ElasticGpus();
      //expect(instance).to.be();
    });

  });

}));
