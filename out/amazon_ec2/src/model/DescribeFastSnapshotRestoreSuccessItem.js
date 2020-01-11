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
import FastSnapshotRestoreStateCode from './FastSnapshotRestoreStateCode';

/**
 * The DescribeFastSnapshotRestoreSuccessItem model module.
 * @module model/DescribeFastSnapshotRestoreSuccessItem
 * @version 1.1.0
 */
class DescribeFastSnapshotRestoreSuccessItem {
    /**
     * Constructs a new <code>DescribeFastSnapshotRestoreSuccessItem</code>.
     * Describes fast snapshot restores for a snapshot.
     * @alias module:model/DescribeFastSnapshotRestoreSuccessItem
     */
    constructor() { 
        
        DescribeFastSnapshotRestoreSuccessItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DescribeFastSnapshotRestoreSuccessItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeFastSnapshotRestoreSuccessItem} obj Optional instance to populate.
     * @return {module:model/DescribeFastSnapshotRestoreSuccessItem} The populated <code>DescribeFastSnapshotRestoreSuccessItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DescribeFastSnapshotRestoreSuccessItem();

            if (data.hasOwnProperty('AvailabilityZone')) {
                obj['AvailabilityZone'] = ApiClient.convertToType(data['AvailabilityZone'], 'String');
            }
            if (data.hasOwnProperty('DisabledTime')) {
                obj['DisabledTime'] = ApiClient.convertToType(data['DisabledTime'], 'Date');
            }
            if (data.hasOwnProperty('DisablingTime')) {
                obj['DisablingTime'] = ApiClient.convertToType(data['DisablingTime'], 'Date');
            }
            if (data.hasOwnProperty('EnabledTime')) {
                obj['EnabledTime'] = ApiClient.convertToType(data['EnabledTime'], 'Date');
            }
            if (data.hasOwnProperty('EnablingTime')) {
                obj['EnablingTime'] = ApiClient.convertToType(data['EnablingTime'], 'Date');
            }
            if (data.hasOwnProperty('OptimizingTime')) {
                obj['OptimizingTime'] = ApiClient.convertToType(data['OptimizingTime'], 'Date');
            }
            if (data.hasOwnProperty('OwnerAlias')) {
                obj['OwnerAlias'] = ApiClient.convertToType(data['OwnerAlias'], 'String');
            }
            if (data.hasOwnProperty('OwnerId')) {
                obj['OwnerId'] = ApiClient.convertToType(data['OwnerId'], 'String');
            }
            if (data.hasOwnProperty('SnapshotId')) {
                obj['SnapshotId'] = ApiClient.convertToType(data['SnapshotId'], 'String');
            }
            if (data.hasOwnProperty('State')) {
                obj['State'] = FastSnapshotRestoreStateCode.constructFromObject(data['State']);
            }
            if (data.hasOwnProperty('StateTransitionReason')) {
                obj['StateTransitionReason'] = ApiClient.convertToType(data['StateTransitionReason'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} AvailabilityZone
 */
DescribeFastSnapshotRestoreSuccessItem.prototype['AvailabilityZone'] = undefined;

/**
 * @member {Date} DisabledTime
 */
DescribeFastSnapshotRestoreSuccessItem.prototype['DisabledTime'] = undefined;

/**
 * @member {Date} DisablingTime
 */
DescribeFastSnapshotRestoreSuccessItem.prototype['DisablingTime'] = undefined;

/**
 * @member {Date} EnabledTime
 */
DescribeFastSnapshotRestoreSuccessItem.prototype['EnabledTime'] = undefined;

/**
 * @member {Date} EnablingTime
 */
DescribeFastSnapshotRestoreSuccessItem.prototype['EnablingTime'] = undefined;

/**
 * @member {Date} OptimizingTime
 */
DescribeFastSnapshotRestoreSuccessItem.prototype['OptimizingTime'] = undefined;

/**
 * @member {String} OwnerAlias
 */
DescribeFastSnapshotRestoreSuccessItem.prototype['OwnerAlias'] = undefined;

/**
 * @member {String} OwnerId
 */
DescribeFastSnapshotRestoreSuccessItem.prototype['OwnerId'] = undefined;

/**
 * @member {String} SnapshotId
 */
DescribeFastSnapshotRestoreSuccessItem.prototype['SnapshotId'] = undefined;

/**
 * @member {module:model/FastSnapshotRestoreStateCode} State
 */
DescribeFastSnapshotRestoreSuccessItem.prototype['State'] = undefined;

/**
 * @member {String} StateTransitionReason
 */
DescribeFastSnapshotRestoreSuccessItem.prototype['StateTransitionReason'] = undefined;






export default DescribeFastSnapshotRestoreSuccessItem;
