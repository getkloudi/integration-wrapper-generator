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
import CapacityReservationTenancy from './CapacityReservationTenancy';
import EndDateType from './EndDateType';
import InstanceMatchCriteria from './InstanceMatchCriteria';
import TagSpecification from './TagSpecification';

/**
 * The CreateCapacityReservationRequest model module.
 * @module model/CreateCapacityReservationRequest
 * @version 1.1.0
 */
class CreateCapacityReservationRequest {
    /**
     * Constructs a new <code>CreateCapacityReservationRequest</code>.
     * @alias module:model/CreateCapacityReservationRequest
     * @param instanceCount {Number} 
     * @param instancePlatform {module:model/CapacityReservationInstancePlatform} 
     * @param instanceType {String} 
     */
    constructor(instanceCount, instancePlatform, instanceType) { 
        
        CreateCapacityReservationRequest.initialize(this, instanceCount, instancePlatform, instanceType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, instanceCount, instancePlatform, instanceType) { 
        obj['InstanceCount'] = instanceCount;
        obj['InstancePlatform'] = instancePlatform;
        obj['InstanceType'] = instanceType;
    }

    /**
     * Constructs a <code>CreateCapacityReservationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateCapacityReservationRequest} obj Optional instance to populate.
     * @return {module:model/CreateCapacityReservationRequest} The populated <code>CreateCapacityReservationRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateCapacityReservationRequest();

            if (data.hasOwnProperty('AvailabilityZone')) {
                obj['AvailabilityZone'] = ApiClient.convertToType(data['AvailabilityZone'], 'String');
            }
            if (data.hasOwnProperty('AvailabilityZoneId')) {
                obj['AvailabilityZoneId'] = ApiClient.convertToType(data['AvailabilityZoneId'], 'String');
            }
            if (data.hasOwnProperty('ClientToken')) {
                obj['ClientToken'] = ApiClient.convertToType(data['ClientToken'], 'String');
            }
            if (data.hasOwnProperty('DryRun')) {
                obj['DryRun'] = ApiClient.convertToType(data['DryRun'], 'Boolean');
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
            if (data.hasOwnProperty('InstanceCount')) {
                obj['InstanceCount'] = ApiClient.convertToType(data['InstanceCount'], 'Number');
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
            if (data.hasOwnProperty('TagSpecifications')) {
                obj['TagSpecifications'] = ApiClient.convertToType(data['TagSpecifications'], [TagSpecification]);
            }
            if (data.hasOwnProperty('Tenancy')) {
                obj['Tenancy'] = CapacityReservationTenancy.constructFromObject(data['Tenancy']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} AvailabilityZone
 */
CreateCapacityReservationRequest.prototype['AvailabilityZone'] = undefined;

/**
 * @member {String} AvailabilityZoneId
 */
CreateCapacityReservationRequest.prototype['AvailabilityZoneId'] = undefined;

/**
 * @member {String} ClientToken
 */
CreateCapacityReservationRequest.prototype['ClientToken'] = undefined;

/**
 * @member {Boolean} DryRun
 */
CreateCapacityReservationRequest.prototype['DryRun'] = undefined;

/**
 * @member {Boolean} EbsOptimized
 */
CreateCapacityReservationRequest.prototype['EbsOptimized'] = undefined;

/**
 * @member {Date} EndDate
 */
CreateCapacityReservationRequest.prototype['EndDate'] = undefined;

/**
 * @member {module:model/EndDateType} EndDateType
 */
CreateCapacityReservationRequest.prototype['EndDateType'] = undefined;

/**
 * @member {Boolean} EphemeralStorage
 */
CreateCapacityReservationRequest.prototype['EphemeralStorage'] = undefined;

/**
 * @member {Number} InstanceCount
 */
CreateCapacityReservationRequest.prototype['InstanceCount'] = undefined;

/**
 * @member {module:model/InstanceMatchCriteria} InstanceMatchCriteria
 */
CreateCapacityReservationRequest.prototype['InstanceMatchCriteria'] = undefined;

/**
 * @member {module:model/CapacityReservationInstancePlatform} InstancePlatform
 */
CreateCapacityReservationRequest.prototype['InstancePlatform'] = undefined;

/**
 * @member {String} InstanceType
 */
CreateCapacityReservationRequest.prototype['InstanceType'] = undefined;

/**
 * @member {Array.<module:model/TagSpecification>} TagSpecifications
 */
CreateCapacityReservationRequest.prototype['TagSpecifications'] = undefined;

/**
 * @member {module:model/CapacityReservationTenancy} Tenancy
 */
CreateCapacityReservationRequest.prototype['Tenancy'] = undefined;






export default CreateCapacityReservationRequest;

