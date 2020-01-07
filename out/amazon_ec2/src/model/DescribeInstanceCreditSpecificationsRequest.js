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

/**
 * The DescribeInstanceCreditSpecificationsRequest model module.
 * @module model/DescribeInstanceCreditSpecificationsRequest
 * @version 1.1.0
 */
class DescribeInstanceCreditSpecificationsRequest {
    /**
     * Constructs a new <code>DescribeInstanceCreditSpecificationsRequest</code>.
     * @alias module:model/DescribeInstanceCreditSpecificationsRequest
     */
    constructor() { 
        
        DescribeInstanceCreditSpecificationsRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DescribeInstanceCreditSpecificationsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeInstanceCreditSpecificationsRequest} obj Optional instance to populate.
     * @return {module:model/DescribeInstanceCreditSpecificationsRequest} The populated <code>DescribeInstanceCreditSpecificationsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DescribeInstanceCreditSpecificationsRequest();

            if (data.hasOwnProperty('DryRun')) {
                obj['DryRun'] = ApiClient.convertToType(data['DryRun'], 'Boolean');
            }
            if (data.hasOwnProperty('Filters')) {
                obj['Filters'] = ApiClient.convertToType(data['Filters'], [Filter]);
            }
            if (data.hasOwnProperty('InstanceIds')) {
                obj['InstanceIds'] = ApiClient.convertToType(data['InstanceIds'], ['String']);
            }
            if (data.hasOwnProperty('MaxResults')) {
                obj['MaxResults'] = ApiClient.convertToType(data['MaxResults'], 'Number');
            }
            if (data.hasOwnProperty('NextToken')) {
                obj['NextToken'] = ApiClient.convertToType(data['NextToken'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} DryRun
 */
DescribeInstanceCreditSpecificationsRequest.prototype['DryRun'] = undefined;

/**
 * @member {Array.<module:model/Filter>} Filters
 */
DescribeInstanceCreditSpecificationsRequest.prototype['Filters'] = undefined;

/**
 * @member {Array.<String>} InstanceIds
 */
DescribeInstanceCreditSpecificationsRequest.prototype['InstanceIds'] = undefined;

/**
 * @member {Number} MaxResults
 */
DescribeInstanceCreditSpecificationsRequest.prototype['MaxResults'] = undefined;

/**
 * @member {String} NextToken
 */
DescribeInstanceCreditSpecificationsRequest.prototype['NextToken'] = undefined;






export default DescribeInstanceCreditSpecificationsRequest;

