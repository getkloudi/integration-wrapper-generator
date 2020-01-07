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
import InstanceInterruptionBehavior from './InstanceInterruptionBehavior';
import SpotInstanceType from './SpotInstanceType';

/**
 * The SpotMarketOptions model module.
 * @module model/SpotMarketOptions
 * @version 1.1.0
 */
class SpotMarketOptions {
    /**
     * Constructs a new <code>SpotMarketOptions</code>.
     * The options for Spot Instances.
     * @alias module:model/SpotMarketOptions
     */
    constructor() { 
        
        SpotMarketOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SpotMarketOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SpotMarketOptions} obj Optional instance to populate.
     * @return {module:model/SpotMarketOptions} The populated <code>SpotMarketOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SpotMarketOptions();

            if (data.hasOwnProperty('BlockDurationMinutes')) {
                obj['BlockDurationMinutes'] = ApiClient.convertToType(data['BlockDurationMinutes'], 'Number');
            }
            if (data.hasOwnProperty('InstanceInterruptionBehavior')) {
                obj['InstanceInterruptionBehavior'] = InstanceInterruptionBehavior.constructFromObject(data['InstanceInterruptionBehavior']);
            }
            if (data.hasOwnProperty('MaxPrice')) {
                obj['MaxPrice'] = ApiClient.convertToType(data['MaxPrice'], 'String');
            }
            if (data.hasOwnProperty('SpotInstanceType')) {
                obj['SpotInstanceType'] = SpotInstanceType.constructFromObject(data['SpotInstanceType']);
            }
            if (data.hasOwnProperty('ValidUntil')) {
                obj['ValidUntil'] = ApiClient.convertToType(data['ValidUntil'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} BlockDurationMinutes
 */
SpotMarketOptions.prototype['BlockDurationMinutes'] = undefined;

/**
 * @member {module:model/InstanceInterruptionBehavior} InstanceInterruptionBehavior
 */
SpotMarketOptions.prototype['InstanceInterruptionBehavior'] = undefined;

/**
 * @member {String} MaxPrice
 */
SpotMarketOptions.prototype['MaxPrice'] = undefined;

/**
 * @member {module:model/SpotInstanceType} SpotInstanceType
 */
SpotMarketOptions.prototype['SpotInstanceType'] = undefined;

/**
 * @member {Date} ValidUntil
 */
SpotMarketOptions.prototype['ValidUntil'] = undefined;






export default SpotMarketOptions;

