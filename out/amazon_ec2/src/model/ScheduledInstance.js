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
import ScheduledInstanceRecurrence from './ScheduledInstanceRecurrence';

/**
 * The ScheduledInstance model module.
 * @module model/ScheduledInstance
 * @version 1.1.0
 */
class ScheduledInstance {
    /**
     * Constructs a new <code>ScheduledInstance</code>.
     * Describes a Scheduled Instance.
     * @alias module:model/ScheduledInstance
     */
    constructor() { 
        
        ScheduledInstance.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ScheduledInstance</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScheduledInstance} obj Optional instance to populate.
     * @return {module:model/ScheduledInstance} The populated <code>ScheduledInstance</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScheduledInstance();

            if (data.hasOwnProperty('AvailabilityZone')) {
                obj['AvailabilityZone'] = ApiClient.convertToType(data['AvailabilityZone'], 'String');
            }
            if (data.hasOwnProperty('CreateDate')) {
                obj['CreateDate'] = ApiClient.convertToType(data['CreateDate'], 'Date');
            }
            if (data.hasOwnProperty('HourlyPrice')) {
                obj['HourlyPrice'] = ApiClient.convertToType(data['HourlyPrice'], 'String');
            }
            if (data.hasOwnProperty('InstanceCount')) {
                obj['InstanceCount'] = ApiClient.convertToType(data['InstanceCount'], 'Number');
            }
            if (data.hasOwnProperty('InstanceType')) {
                obj['InstanceType'] = ApiClient.convertToType(data['InstanceType'], 'String');
            }
            if (data.hasOwnProperty('NetworkPlatform')) {
                obj['NetworkPlatform'] = ApiClient.convertToType(data['NetworkPlatform'], 'String');
            }
            if (data.hasOwnProperty('NextSlotStartTime')) {
                obj['NextSlotStartTime'] = ApiClient.convertToType(data['NextSlotStartTime'], 'Date');
            }
            if (data.hasOwnProperty('Platform')) {
                obj['Platform'] = ApiClient.convertToType(data['Platform'], 'String');
            }
            if (data.hasOwnProperty('PreviousSlotEndTime')) {
                obj['PreviousSlotEndTime'] = ApiClient.convertToType(data['PreviousSlotEndTime'], 'Date');
            }
            if (data.hasOwnProperty('Recurrence')) {
                obj['Recurrence'] = ScheduledInstanceRecurrence.constructFromObject(data['Recurrence']);
            }
            if (data.hasOwnProperty('ScheduledInstanceId')) {
                obj['ScheduledInstanceId'] = ApiClient.convertToType(data['ScheduledInstanceId'], 'String');
            }
            if (data.hasOwnProperty('SlotDurationInHours')) {
                obj['SlotDurationInHours'] = ApiClient.convertToType(data['SlotDurationInHours'], 'Number');
            }
            if (data.hasOwnProperty('TermEndDate')) {
                obj['TermEndDate'] = ApiClient.convertToType(data['TermEndDate'], 'Date');
            }
            if (data.hasOwnProperty('TermStartDate')) {
                obj['TermStartDate'] = ApiClient.convertToType(data['TermStartDate'], 'Date');
            }
            if (data.hasOwnProperty('TotalScheduledInstanceHours')) {
                obj['TotalScheduledInstanceHours'] = ApiClient.convertToType(data['TotalScheduledInstanceHours'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} AvailabilityZone
 */
ScheduledInstance.prototype['AvailabilityZone'] = undefined;

/**
 * @member {Date} CreateDate
 */
ScheduledInstance.prototype['CreateDate'] = undefined;

/**
 * @member {String} HourlyPrice
 */
ScheduledInstance.prototype['HourlyPrice'] = undefined;

/**
 * @member {Number} InstanceCount
 */
ScheduledInstance.prototype['InstanceCount'] = undefined;

/**
 * @member {String} InstanceType
 */
ScheduledInstance.prototype['InstanceType'] = undefined;

/**
 * @member {String} NetworkPlatform
 */
ScheduledInstance.prototype['NetworkPlatform'] = undefined;

/**
 * @member {Date} NextSlotStartTime
 */
ScheduledInstance.prototype['NextSlotStartTime'] = undefined;

/**
 * @member {String} Platform
 */
ScheduledInstance.prototype['Platform'] = undefined;

/**
 * @member {Date} PreviousSlotEndTime
 */
ScheduledInstance.prototype['PreviousSlotEndTime'] = undefined;

/**
 * @member {module:model/ScheduledInstanceRecurrence} Recurrence
 */
ScheduledInstance.prototype['Recurrence'] = undefined;

/**
 * @member {String} ScheduledInstanceId
 */
ScheduledInstance.prototype['ScheduledInstanceId'] = undefined;

/**
 * @member {Number} SlotDurationInHours
 */
ScheduledInstance.prototype['SlotDurationInHours'] = undefined;

/**
 * @member {Date} TermEndDate
 */
ScheduledInstance.prototype['TermEndDate'] = undefined;

/**
 * @member {Date} TermStartDate
 */
ScheduledInstance.prototype['TermStartDate'] = undefined;

/**
 * @member {Number} TotalScheduledInstanceHours
 */
ScheduledInstance.prototype['TotalScheduledInstanceHours'] = undefined;






export default ScheduledInstance;
