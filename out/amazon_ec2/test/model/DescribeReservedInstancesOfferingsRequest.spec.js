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
    instance = new AmazonEc2.DescribeReservedInstancesOfferingsRequest();
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

  describe('DescribeReservedInstancesOfferingsRequest', function() {
    it('should create an instance of DescribeReservedInstancesOfferingsRequest', function() {
      // uncomment below and update the code to test DescribeReservedInstancesOfferingsRequest
      //var instane = new AmazonEc2.DescribeReservedInstancesOfferingsRequest();
      //expect(instance).to.be.a(AmazonEc2.DescribeReservedInstancesOfferingsRequest);
    });

    it('should have the property availabilityZone (base name: "AvailabilityZone")', function() {
      // uncomment below and update the code to test the property availabilityZone
      //var instane = new AmazonEc2.DescribeReservedInstancesOfferingsRequest();
      //expect(instance).to.be();
    });

    it('should have the property dryRun (base name: "DryRun")', function() {
      // uncomment below and update the code to test the property dryRun
      //var instane = new AmazonEc2.DescribeReservedInstancesOfferingsRequest();
      //expect(instance).to.be();
    });

    it('should have the property filters (base name: "Filters")', function() {
      // uncomment below and update the code to test the property filters
      //var instane = new AmazonEc2.DescribeReservedInstancesOfferingsRequest();
      //expect(instance).to.be();
    });

    it('should have the property includeMarketplace (base name: "IncludeMarketplace")', function() {
      // uncomment below and update the code to test the property includeMarketplace
      //var instane = new AmazonEc2.DescribeReservedInstancesOfferingsRequest();
      //expect(instance).to.be();
    });

    it('should have the property instanceTenancy (base name: "InstanceTenancy")', function() {
      // uncomment below and update the code to test the property instanceTenancy
      //var instane = new AmazonEc2.DescribeReservedInstancesOfferingsRequest();
      //expect(instance).to.be();
    });

    it('should have the property instanceType (base name: "InstanceType")', function() {
      // uncomment below and update the code to test the property instanceType
      //var instane = new AmazonEc2.DescribeReservedInstancesOfferingsRequest();
      //expect(instance).to.be();
    });

    it('should have the property maxDuration (base name: "MaxDuration")', function() {
      // uncomment below and update the code to test the property maxDuration
      //var instane = new AmazonEc2.DescribeReservedInstancesOfferingsRequest();
      //expect(instance).to.be();
    });

    it('should have the property maxInstanceCount (base name: "MaxInstanceCount")', function() {
      // uncomment below and update the code to test the property maxInstanceCount
      //var instane = new AmazonEc2.DescribeReservedInstancesOfferingsRequest();
      //expect(instance).to.be();
    });

    it('should have the property maxResults (base name: "MaxResults")', function() {
      // uncomment below and update the code to test the property maxResults
      //var instane = new AmazonEc2.DescribeReservedInstancesOfferingsRequest();
      //expect(instance).to.be();
    });

    it('should have the property minDuration (base name: "MinDuration")', function() {
      // uncomment below and update the code to test the property minDuration
      //var instane = new AmazonEc2.DescribeReservedInstancesOfferingsRequest();
      //expect(instance).to.be();
    });

    it('should have the property nextToken (base name: "NextToken")', function() {
      // uncomment below and update the code to test the property nextToken
      //var instane = new AmazonEc2.DescribeReservedInstancesOfferingsRequest();
      //expect(instance).to.be();
    });

    it('should have the property offeringClass (base name: "OfferingClass")', function() {
      // uncomment below and update the code to test the property offeringClass
      //var instane = new AmazonEc2.DescribeReservedInstancesOfferingsRequest();
      //expect(instance).to.be();
    });

    it('should have the property offeringType (base name: "OfferingType")', function() {
      // uncomment below and update the code to test the property offeringType
      //var instane = new AmazonEc2.DescribeReservedInstancesOfferingsRequest();
      //expect(instance).to.be();
    });

    it('should have the property productDescription (base name: "ProductDescription")', function() {
      // uncomment below and update the code to test the property productDescription
      //var instane = new AmazonEc2.DescribeReservedInstancesOfferingsRequest();
      //expect(instance).to.be();
    });

    it('should have the property reservedInstancesOfferingIds (base name: "ReservedInstancesOfferingIds")', function() {
      // uncomment below and update the code to test the property reservedInstancesOfferingIds
      //var instane = new AmazonEc2.DescribeReservedInstancesOfferingsRequest();
      //expect(instance).to.be();
    });

  });

}));