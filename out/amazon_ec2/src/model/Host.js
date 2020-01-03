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
import AllocationState from './AllocationState';
import AllowsMultipleInstanceTypes from './AllowsMultipleInstanceTypes';
import AutoPlacement from './AutoPlacement';
import AvailableCapacity from './AvailableCapacity';
import HostInstance from './HostInstance';
import HostProperties from './HostProperties';
import HostRecovery from './HostRecovery';
import Tag from './Tag';

/**
 * The Host model module.
 * @module model/Host
 * @version 1.0.0
 */
class Host {
    /**
     * Constructs a new <code>Host</code>.
     * Describes the properties of the Dedicated Host.
     * @alias module:model/Host
     */
    constructor() { 
        
        Host.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Host</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Host} obj Optional instance to populate.
     * @return {module:model/Host} The populated <code>Host</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Host();

            if (data.hasOwnProperty('AllocationTime')) {
                obj['AllocationTime'] = ApiClient.convertToType(data['AllocationTime'], 'Date');
            }
            if (data.hasOwnProperty('AllowsMultipleInstanceTypes')) {
                obj['AllowsMultipleInstanceTypes'] = AllowsMultipleInstanceTypes.constructFromObject(data['AllowsMultipleInstanceTypes']);
            }
            if (data.hasOwnProperty('AutoPlacement')) {
                obj['AutoPlacement'] = AutoPlacement.constructFromObject(data['AutoPlacement']);
            }
            if (data.hasOwnProperty('AvailabilityZone')) {
                obj['AvailabilityZone'] = ApiClient.convertToType(data['AvailabilityZone'], 'String');
            }
            if (data.hasOwnProperty('AvailabilityZoneId')) {
                obj['AvailabilityZoneId'] = ApiClient.convertToType(data['AvailabilityZoneId'], 'String');
            }
            if (data.hasOwnProperty('AvailableCapacity')) {
                obj['AvailableCapacity'] = AvailableCapacity.constructFromObject(data['AvailableCapacity']);
            }
            if (data.hasOwnProperty('ClientToken')) {
                obj['ClientToken'] = ApiClient.convertToType(data['ClientToken'], 'String');
            }
            if (data.hasOwnProperty('HostId')) {
                obj['HostId'] = ApiClient.convertToType(data['HostId'], 'String');
            }
            if (data.hasOwnProperty('HostProperties')) {
                obj['HostProperties'] = HostProperties.constructFromObject(data['HostProperties']);
            }
            if (data.hasOwnProperty('HostRecovery')) {
                obj['HostRecovery'] = HostRecovery.constructFromObject(data['HostRecovery']);
            }
            if (data.hasOwnProperty('HostReservationId')) {
                obj['HostReservationId'] = ApiClient.convertToType(data['HostReservationId'], 'String');
            }
            if (data.hasOwnProperty('Instances')) {
                obj['Instances'] = ApiClient.convertToType(data['Instances'], [HostInstance]);
            }
            if (data.hasOwnProperty('MemberOfServiceLinkedResourceGroup')) {
                obj['MemberOfServiceLinkedResourceGroup'] = ApiClient.convertToType(data['MemberOfServiceLinkedResourceGroup'], 'Boolean');
            }
            if (data.hasOwnProperty('OwnerId')) {
                obj['OwnerId'] = ApiClient.convertToType(data['OwnerId'], 'String');
            }
            if (data.hasOwnProperty('ReleaseTime')) {
                obj['ReleaseTime'] = ApiClient.convertToType(data['ReleaseTime'], 'Date');
            }
            if (data.hasOwnProperty('State')) {
                obj['State'] = AllocationState.constructFromObject(data['State']);
            }
            if (data.hasOwnProperty('Tags')) {
                obj['Tags'] = ApiClient.convertToType(data['Tags'], [Tag]);
            }
        }
        return obj;
    }


}

/**
 * @member {Date} AllocationTime
 */
Host.prototype['AllocationTime'] = undefined;

/**
 * @member {module:model/AllowsMultipleInstanceTypes} AllowsMultipleInstanceTypes
 */
Host.prototype['AllowsMultipleInstanceTypes'] = undefined;

/**
 * @member {module:model/AutoPlacement} AutoPlacement
 */
Host.prototype['AutoPlacement'] = undefined;

/**
 * @member {String} AvailabilityZone
 */
Host.prototype['AvailabilityZone'] = undefined;

/**
 * @member {String} AvailabilityZoneId
 */
Host.prototype['AvailabilityZoneId'] = undefined;

/**
 * @member {module:model/AvailableCapacity} AvailableCapacity
 */
Host.prototype['AvailableCapacity'] = undefined;

/**
 * @member {String} ClientToken
 */
Host.prototype['ClientToken'] = undefined;

/**
 * @member {String} HostId
 */
Host.prototype['HostId'] = undefined;

/**
 * @member {module:model/HostProperties} HostProperties
 */
Host.prototype['HostProperties'] = undefined;

/**
 * @member {module:model/HostRecovery} HostRecovery
 */
Host.prototype['HostRecovery'] = undefined;

/**
 * @member {String} HostReservationId
 */
Host.prototype['HostReservationId'] = undefined;

/**
 * @member {Array.<module:model/HostInstance>} Instances
 */
Host.prototype['Instances'] = undefined;

/**
 * @member {Boolean} MemberOfServiceLinkedResourceGroup
 */
Host.prototype['MemberOfServiceLinkedResourceGroup'] = undefined;

/**
 * @member {String} OwnerId
 */
Host.prototype['OwnerId'] = undefined;

/**
 * @member {Date} ReleaseTime
 */
Host.prototype['ReleaseTime'] = undefined;

/**
 * @member {module:model/AllocationState} State
 */
Host.prototype['State'] = undefined;

/**
 * @member {Array.<module:model/Tag>} Tags
 */
Host.prototype['Tags'] = undefined;






export default Host;

