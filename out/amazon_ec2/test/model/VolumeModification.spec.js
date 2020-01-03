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
    instance = new AmazonEc2.VolumeModification();
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

  describe('VolumeModification', function() {
    it('should create an instance of VolumeModification', function() {
      // uncomment below and update the code to test VolumeModification
      //var instane = new AmazonEc2.VolumeModification();
      //expect(instance).to.be.a(AmazonEc2.VolumeModification);
    });

    it('should have the property endTime (base name: "EndTime")', function() {
      // uncomment below and update the code to test the property endTime
      //var instane = new AmazonEc2.VolumeModification();
      //expect(instance).to.be();
    });

    it('should have the property modificationState (base name: "ModificationState")', function() {
      // uncomment below and update the code to test the property modificationState
      //var instane = new AmazonEc2.VolumeModification();
      //expect(instance).to.be();
    });

    it('should have the property originalIops (base name: "OriginalIops")', function() {
      // uncomment below and update the code to test the property originalIops
      //var instane = new AmazonEc2.VolumeModification();
      //expect(instance).to.be();
    });

    it('should have the property originalSize (base name: "OriginalSize")', function() {
      // uncomment below and update the code to test the property originalSize
      //var instane = new AmazonEc2.VolumeModification();
      //expect(instance).to.be();
    });

    it('should have the property originalVolumeType (base name: "OriginalVolumeType")', function() {
      // uncomment below and update the code to test the property originalVolumeType
      //var instane = new AmazonEc2.VolumeModification();
      //expect(instance).to.be();
    });

    it('should have the property progress (base name: "Progress")', function() {
      // uncomment below and update the code to test the property progress
      //var instane = new AmazonEc2.VolumeModification();
      //expect(instance).to.be();
    });

    it('should have the property startTime (base name: "StartTime")', function() {
      // uncomment below and update the code to test the property startTime
      //var instane = new AmazonEc2.VolumeModification();
      //expect(instance).to.be();
    });

    it('should have the property statusMessage (base name: "StatusMessage")', function() {
      // uncomment below and update the code to test the property statusMessage
      //var instane = new AmazonEc2.VolumeModification();
      //expect(instance).to.be();
    });

    it('should have the property targetIops (base name: "TargetIops")', function() {
      // uncomment below and update the code to test the property targetIops
      //var instane = new AmazonEc2.VolumeModification();
      //expect(instance).to.be();
    });

    it('should have the property targetSize (base name: "TargetSize")', function() {
      // uncomment below and update the code to test the property targetSize
      //var instane = new AmazonEc2.VolumeModification();
      //expect(instance).to.be();
    });

    it('should have the property targetVolumeType (base name: "TargetVolumeType")', function() {
      // uncomment below and update the code to test the property targetVolumeType
      //var instane = new AmazonEc2.VolumeModification();
      //expect(instance).to.be();
    });

    it('should have the property volumeId (base name: "VolumeId")', function() {
      // uncomment below and update the code to test the property volumeId
      //var instane = new AmazonEc2.VolumeModification();
      //expect(instance).to.be();
    });

  });

}));
