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

import ApiClient from '../ApiClient';
import Filter from './Filter';
import OfferingClassType from './OfferingClassType';
import OfferingTypeValues from './OfferingTypeValues';

/**
 * The DescribeReservedInstancesRequest model module.
 * @module model/DescribeReservedInstancesRequest
 * @version 1.1.0
 */
class DescribeReservedInstancesRequest {
    /**
     * Constructs a new <code>DescribeReservedInstancesRequest</code>.
     * Contains the parameters for DescribeReservedInstances.
     * @alias module:model/DescribeReservedInstancesRequest
     */
    constructor() { 
        
        DescribeReservedInstancesRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DescribeReservedInstancesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeReservedInstancesRequest} obj Optional instance to populate.
     * @return {module:model/DescribeReservedInstancesRequest} The populated <code>DescribeReservedInstancesRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DescribeReservedInstancesRequest();

            if (data.hasOwnProperty('DryRun')) {
                obj['DryRun'] = ApiClient.convertToType(data['DryRun'], 'Boolean');
            }
            if (data.hasOwnProperty('Filters')) {
                obj['Filters'] = ApiClient.convertToType(data['Filters'], [Filter]);
            }
            if (data.hasOwnProperty('OfferingClass')) {
                obj['OfferingClass'] = OfferingClassType.constructFromObject(data['OfferingClass']);
            }
            if (data.hasOwnProperty('OfferingType')) {
                obj['OfferingType'] = OfferingTypeValues.constructFromObject(data['OfferingType']);
            }
            if (data.hasOwnProperty('ReservedInstancesIds')) {
                obj['ReservedInstancesIds'] = ApiClient.convertToType(data['ReservedInstancesIds'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} DryRun
 */
DescribeReservedInstancesRequest.prototype['DryRun'] = undefined;

/**
 * @member {Array.<module:model/Filter>} Filters
 */
DescribeReservedInstancesRequest.prototype['Filters'] = undefined;

/**
 * @member {module:model/OfferingClassType} OfferingClass
 */
DescribeReservedInstancesRequest.prototype['OfferingClass'] = undefined;

/**
 * @member {module:model/OfferingTypeValues} OfferingType
 */
DescribeReservedInstancesRequest.prototype['OfferingType'] = undefined;

/**
 * @member {Array.<String>} ReservedInstancesIds
 */
DescribeReservedInstancesRequest.prototype['ReservedInstancesIds'] = undefined;






export default DescribeReservedInstancesRequest;

