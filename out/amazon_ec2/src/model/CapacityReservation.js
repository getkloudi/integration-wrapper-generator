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
import CapacityReservationInstancePlatform from './CapacityReservationInstancePlatform';
import CapacityReservationState from './CapacityReservationState';
import CapacityReservationTenancy from './CapacityReservationTenancy';
import EndDateType from './EndDateType';
import InstanceMatchCriteria from './InstanceMatchCriteria';
import Tag from './Tag';

/**
 * The CapacityReservation model module.
 * @module model/CapacityReservation
 * @version 1.1.0
 */
class CapacityReservation {
    /**
     * Constructs a new <code>CapacityReservation</code>.
     * Describes a Capacity Reservation.
     * @alias module:model/CapacityReservation
     */
    constructor() { 
        
        CapacityReservation.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CapacityReservation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CapacityReservation} obj Optional instance to populate.
     * @return {module:model/CapacityReservation} The populated <code>CapacityReservation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CapacityReservation();

            if (data.hasOwnProperty('AvailabilityZone')) {
                obj['AvailabilityZone'] = ApiClient.convertToType(data['AvailabilityZone'], 'String');
            }
            if (data.hasOwnProperty('AvailabilityZoneId')) {
                obj['AvailabilityZoneId'] = ApiClient.convertToType(data['AvailabilityZoneId'], 'String');
            }
            if (data.hasOwnProperty('AvailableInstanceCount')) {
                obj['AvailableInstanceCount'] = ApiClient.convertToType(data['AvailableInstanceCount'], 'Number');
            }
            if (data.hasOwnProperty('CapacityReservationArn')) {
                obj['CapacityReservationArn'] = ApiClient.convertToType(data['CapacityReservationArn'], 'String');
            }
            if (data.hasOwnProperty('CapacityReservationId')) {
                obj['CapacityReservationId'] = ApiClient.convertToType(data['CapacityReservationId'], 'String');
            }
            if (data.hasOwnProperty('CreateDate')) {
                obj['CreateDate'] = ApiClient.convertToType(data['CreateDate'], 'Date');
            }
            if (data.hasOwnProperty('EbsOptimized')) {
                obj['EbsOptimized'] = ApiClient.convertToType(data['EbsOptimized'], 'Boolean');
            }
            if (data.hasOwnProperty('EndDate')) {
                obj['EndDate'] = ApiClient.convertToType(data['EndDate'], 'Date');
            }
            if (data.hasOwnProperty('EndDateType')) {
                obj['EndDateType'] = EndDateType.constructFromObject(data['EndDateType']);
            }
            if (data.hasOwnProperty('EphemeralStorage')) {
                obj['EphemeralStorage'] = ApiClient.convertToType(data['EphemeralStorage'], 'Boolean');
            }
            if (data.hasOwnProperty('InstanceMatchCriteria')) {
                obj['InstanceMatchCriteria'] = InstanceMatchCriteria.constructFromObject(data['InstanceMatchCriteria']);
            }
            if (data.hasOwnProperty('InstancePlatform')) {
                obj['InstancePlatform'] = CapacityReservationInstancePlatform.constructFromObject(data['InstancePlatform']);
            }
            if (data.hasOwnProperty('InstanceType')) {
                obj['InstanceType'] = ApiClient.convertToType(data['InstanceType'], 'String');
            }
            if (data.hasOwnProperty('OwnerId')) {
                obj['OwnerId'] = ApiClient.convertToType(data['OwnerId'], 'String');
            }
            if (data.hasOwnProperty('State')) {
                obj['State'] = CapacityReservationState.constructFromObject(data['State']);
            }
            if (data.hasOwnProperty('Tags')) {
                obj['Tags'] = ApiClient.convertToType(data['Tags'], [Tag]);
            }
            if (data.hasOwnProperty('Tenancy')) {
                obj['Tenancy'] = CapacityReservationTenancy.constructFromObject(data['Tenancy']);
            }
            if (data.hasOwnProperty('TotalInstanceCount')) {
                obj['TotalInstanceCount'] = ApiClient.convertToType(data['TotalInstanceCount'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} AvailabilityZone
 */
CapacityReservation.prototype['AvailabilityZone'] = undefined;

/**
 * @member {String} AvailabilityZoneId
 */
CapacityReservation.prototype['AvailabilityZoneId'] = undefined;

/**
 * @member {Number} AvailableInstanceCount
 */
CapacityReservation.prototype['AvailableInstanceCount'] = undefined;

/**
 * @member {String} CapacityReservationArn
 */
CapacityReservation.prototype['CapacityReservationArn'] = undefined;

/**
 * @member {String} CapacityReservationId
 */
CapacityReservation.prototype['CapacityReservationId'] = undefined;

/**
 * @member {Date} CreateDate
 */
CapacityReservation.prototype['CreateDate'] = undefined;

/**
 * @member {Boolean} EbsOptimized
 */
CapacityReservation.prototype['EbsOptimized'] = undefined;

/**
 * @member {Date} EndDate
 */
CapacityReservation.prototype['EndDate'] = undefined;

/**
 * @member {module:model/EndDateType} EndDateType
 */
CapacityReservation.prototype['EndDateType'] = undefined;

/**
 * @member {Boolean} EphemeralStorage
 */
CapacityReservation.prototype['EphemeralStorage'] = undefined;

/**
 * @member {module:model/InstanceMatchCriteria} InstanceMatchCriteria
 */
CapacityReservation.prototype['InstanceMatchCriteria'] = undefined;

/**
 * @member {module:model/CapacityReservationInstancePlatform} InstancePlatform
 */
CapacityReservation.prototype['InstancePlatform'] = undefined;

/**
 * @member {String} InstanceType
 */
CapacityReservation.prototype['InstanceType'] = undefined;

/**
 * @member {String} OwnerId
 */
CapacityReservation.prototype['OwnerId'] = undefined;

/**
 * @member {module:model/CapacityReservationState} State
 */
CapacityReservation.prototype['State'] = undefined;

/**
 * @member {Array.<module:model/Tag>} Tags
 */
CapacityReservation.prototype['Tags'] = undefined;

/**
 * @member {module:model/CapacityReservationTenancy} Tenancy
 */
CapacityReservation.prototype['Tenancy'] = undefined;

/**
 * @member {Number} TotalInstanceCount
 */
CapacityReservation.prototype['TotalInstanceCount'] = undefined;






export default CapacityReservation;

