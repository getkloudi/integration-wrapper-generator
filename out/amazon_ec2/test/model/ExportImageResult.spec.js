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
    instance = new AmazonEc2.ExportImageResult();
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

  describe('ExportImageResult', function() {
    it('should create an instance of ExportImageResult', function() {
      // uncomment below and update the code to test ExportImageResult
      //var instane = new AmazonEc2.ExportImageResult();
      //expect(instance).to.be.a(AmazonEc2.ExportImageResult);
    });

    it('should have the property description (base name: "Description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new AmazonEc2.ExportImageResult();
      //expect(instance).to.be();
    });

    it('should have the property diskImageFormat (base name: "DiskImageFormat")', function() {
      // uncomment below and update the code to test the property diskImageFormat
      //var instane = new AmazonEc2.ExportImageResult();
      //expect(instance).to.be();
    });

    it('should have the property exportImageTaskId (base name: "ExportImageTaskId")', function() {
      // uncomment below and update the code to test the property exportImageTaskId
      //var instane = new AmazonEc2.ExportImageResult();
      //expect(instance).to.be();
    });

    it('should have the property imageId (base name: "ImageId")', function() {
      // uncomment below and update the code to test the property imageId
      //var instane = new AmazonEc2.ExportImageResult();
      //expect(instance).to.be();
    });

    it('should have the property progress (base name: "Progress")', function() {
      // uncomment below and update the code to test the property progress
      //var instane = new AmazonEc2.ExportImageResult();
      //expect(instance).to.be();
    });

    it('should have the property roleName (base name: "RoleName")', function() {
      // uncomment below and update the code to test the property roleName
      //var instane = new AmazonEc2.ExportImageResult();
      //expect(instance).to.be();
    });

    it('should have the property s3ExportLocation (base name: "S3ExportLocation")', function() {
      // uncomment below and update the code to test the property s3ExportLocation
      //var instane = new AmazonEc2.ExportImageResult();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "Status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new AmazonEc2.ExportImageResult();
      //expect(instance).to.be();
    });

    it('should have the property statusMessage (base name: "StatusMessage")', function() {
      // uncomment below and update the code to test the property statusMessage
      //var instane = new AmazonEc2.ExportImageResult();
      //expect(instance).to.be();
    });

  });

}));
