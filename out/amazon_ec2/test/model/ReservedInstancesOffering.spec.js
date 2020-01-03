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
    instance = new AmazonEc2.ReservedInstancesOffering();
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

  describe('ReservedInstancesOffering', function() {
    it('should create an instance of ReservedInstancesOffering', function() {
      // uncomment below and update the code to test ReservedInstancesOffering
      //var instane = new AmazonEc2.ReservedInstancesOffering();
      //expect(instance).to.be.a(AmazonEc2.ReservedInstancesOffering);
    });

    it('should have the property availabilityZone (base name: "AvailabilityZone")', function() {
      // uncomment below and update the code to test the property availabilityZone
      //var instane = new AmazonEc2.ReservedInstancesOffering();
      //expect(instance).to.be();
    });

    it('should have the property currencyCode (base name: "CurrencyCode")', function() {
      // uncomment below and update the code to test the property currencyCode
      //var instane = new AmazonEc2.ReservedInstancesOffering();
      //expect(instance).to.be();
    });

    it('should have the property duration (base name: "Duration")', function() {
      // uncomment below and update the code to test the property duration
      //var instane = new AmazonEc2.ReservedInstancesOffering();
      //expect(instance).to.be();
    });

    it('should have the property fixedPrice (base name: "FixedPrice")', function() {
      // uncomment below and update the code to test the property fixedPrice
      //var instane = new AmazonEc2.ReservedInstancesOffering();
      //expect(instance).to.be();
    });

    it('should have the property instanceTenancy (base name: "InstanceTenancy")', function() {
      // uncomment below and update the code to test the property instanceTenancy
      //var instane = new AmazonEc2.ReservedInstancesOffering();
      //expect(instance).to.be();
    });

    it('should have the property instanceType (base name: "InstanceType")', function() {
      // uncomment below and update the code to test the property instanceType
      //var instane = new AmazonEc2.ReservedInstancesOffering();
      //expect(instance).to.be();
    });

    it('should have the property marketplace (base name: "Marketplace")', function() {
      // uncomment below and update the code to test the property marketplace
      //var instane = new AmazonEc2.ReservedInstancesOffering();
      //expect(instance).to.be();
    });

    it('should have the property offeringClass (base name: "OfferingClass")', function() {
      // uncomment below and update the code to test the property offeringClass
      //var instane = new AmazonEc2.ReservedInstancesOffering();
      //expect(instance).to.be();
    });

    it('should have the property offeringType (base name: "OfferingType")', function() {
      // uncomment below and update the code to test the property offeringType
      //var instane = new AmazonEc2.ReservedInstancesOffering();
      //expect(instance).to.be();
    });

    it('should have the property pricingDetails (base name: "PricingDetails")', function() {
      // uncomment below and update the code to test the property pricingDetails
      //var instane = new AmazonEc2.ReservedInstancesOffering();
      //expect(instance).to.be();
    });

    it('should have the property productDescription (base name: "ProductDescription")', function() {
      // uncomment below and update the code to test the property productDescription
      //var instane = new AmazonEc2.ReservedInstancesOffering();
      //expect(instance).to.be();
    });

    it('should have the property recurringCharges (base name: "RecurringCharges")', function() {
      // uncomment below and update the code to test the property recurringCharges
      //var instane = new AmazonEc2.ReservedInstancesOffering();
      //expect(instance).to.be();
    });

    it('should have the property reservedInstancesOfferingId (base name: "ReservedInstancesOfferingId")', function() {
      // uncomment below and update the code to test the property reservedInstancesOfferingId
      //var instane = new AmazonEc2.ReservedInstancesOffering();
      //expect(instance).to.be();
    });

    it('should have the property scope (base name: "Scope")', function() {
      // uncomment below and update the code to test the property scope
      //var instane = new AmazonEc2.ReservedInstancesOffering();
      //expect(instance).to.be();
    });

    it('should have the property usagePrice (base name: "UsagePrice")', function() {
      // uncomment below and update the code to test the property usagePrice
      //var instane = new AmazonEc2.ReservedInstancesOffering();
      //expect(instance).to.be();
    });

  });

}));
