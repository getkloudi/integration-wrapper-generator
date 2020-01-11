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
import InstanceState from './InstanceState';
import InstanceStatusEvent from './InstanceStatusEvent';
import InstanceStatusSummary from './InstanceStatusSummary';

/**
 * The InstanceStatus model module.
 * @module model/InstanceStatus
 * @version 1.1.0
 */
class InstanceStatus {
    /**
     * Constructs a new <code>InstanceStatus</code>.
     * Describes the status of an instance.
     * @alias module:model/InstanceStatus
     */
    constructor() { 
        
        InstanceStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InstanceStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InstanceStatus} obj Optional instance to populate.
     * @return {module:model/InstanceStatus} The populated <code>InstanceStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InstanceStatus();

            if (data.hasOwnProperty('AvailabilityZone')) {
                obj['AvailabilityZone'] = ApiClient.convertToType(data['AvailabilityZone'], 'String');
            }
            if (data.hasOwnProperty('Events')) {
                obj['Events'] = ApiClient.convertToType(data['Events'], [InstanceStatusEvent]);
            }
            if (data.hasOwnProperty('InstanceId')) {
                obj['InstanceId'] = ApiClient.convertToType(data['InstanceId'], 'String');
            }
            if (data.hasOwnProperty('InstanceState')) {
                obj['InstanceState'] = InstanceState.constructFromObject(data['InstanceState']);
            }
            if (data.hasOwnProperty('InstanceStatus')) {
                obj['InstanceStatus'] = InstanceStatusSummary.constructFromObject(data['InstanceStatus']);
            }
            if (data.hasOwnProperty('OutpostArn')) {
                obj['OutpostArn'] = ApiClient.convertToType(data['OutpostArn'], 'String');
            }
            if (data.hasOwnProperty('SystemStatus')) {
                obj['SystemStatus'] = InstanceStatusSummary.constructFromObject(data['SystemStatus']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} AvailabilityZone
 */
InstanceStatus.prototype['AvailabilityZone'] = undefined;

/**
 * @member {Array.<module:model/InstanceStatusEvent>} Events
 */
InstanceStatus.prototype['Events'] = undefined;

/**
 * @member {String} InstanceId
 */
InstanceStatus.prototype['InstanceId'] = undefined;

/**
 * @member {module:model/InstanceState} InstanceState
 */
InstanceStatus.prototype['InstanceState'] = undefined;

/**
 * @member {module:model/InstanceStatusSummary} InstanceStatus
 */
InstanceStatus.prototype['InstanceStatus'] = undefined;

/**
 * @member {String} OutpostArn
 */
InstanceStatus.prototype['OutpostArn'] = undefined;

/**
 * @member {module:model/InstanceStatusSummary} SystemStatus
 */
InstanceStatus.prototype['SystemStatus'] = undefined;






export default InstanceStatus;
