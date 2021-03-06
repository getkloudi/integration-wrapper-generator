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
import ReservedInstancesId from './ReservedInstancesId';
import ReservedInstancesModificationResult from './ReservedInstancesModificationResult';

/**
 * The ReservedInstancesModification model module.
 * @module model/ReservedInstancesModification
 * @version 1.1.0
 */
class ReservedInstancesModification {
    /**
     * Constructs a new <code>ReservedInstancesModification</code>.
     * Describes a Reserved Instance modification.
     * @alias module:model/ReservedInstancesModification
     */
    constructor() { 
        
        ReservedInstancesModification.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReservedInstancesModification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReservedInstancesModification} obj Optional instance to populate.
     * @return {module:model/ReservedInstancesModification} The populated <code>ReservedInstancesModification</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReservedInstancesModification();

            if (data.hasOwnProperty('ClientToken')) {
                obj['ClientToken'] = ApiClient.convertToType(data['ClientToken'], 'String');
            }
            if (data.hasOwnProperty('CreateDate')) {
                obj['CreateDate'] = ApiClient.convertToType(data['CreateDate'], 'Date');
            }
            if (data.hasOwnProperty('EffectiveDate')) {
                obj['EffectiveDate'] = ApiClient.convertToType(data['EffectiveDate'], 'Date');
            }
            if (data.hasOwnProperty('ModificationResults')) {
                obj['ModificationResults'] = ApiClient.convertToType(data['ModificationResults'], [ReservedInstancesModificationResult]);
            }
            if (data.hasOwnProperty('ReservedInstancesIds')) {
                obj['ReservedInstancesIds'] = ApiClient.convertToType(data['ReservedInstancesIds'], [ReservedInstancesId]);
            }
            if (data.hasOwnProperty('ReservedInstancesModificationId')) {
                obj['ReservedInstancesModificationId'] = ApiClient.convertToType(data['ReservedInstancesModificationId'], 'String');
            }
            if (data.hasOwnProperty('Status')) {
                obj['Status'] = ApiClient.convertToType(data['Status'], 'String');
            }
            if (data.hasOwnProperty('StatusMessage')) {
                obj['StatusMessage'] = ApiClient.convertToType(data['StatusMessage'], 'String');
            }
            if (data.hasOwnProperty('UpdateDate')) {
                obj['UpdateDate'] = ApiClient.convertToType(data['UpdateDate'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {String} ClientToken
 */
ReservedInstancesModification.prototype['ClientToken'] = undefined;

/**
 * @member {Date} CreateDate
 */
ReservedInstancesModification.prototype['CreateDate'] = undefined;

/**
 * @member {Date} EffectiveDate
 */
ReservedInstancesModification.prototype['EffectiveDate'] = undefined;

/**
 * @member {Array.<module:model/ReservedInstancesModificationResult>} ModificationResults
 */
ReservedInstancesModification.prototype['ModificationResults'] = undefined;

/**
 * @member {Array.<module:model/ReservedInstancesId>} ReservedInstancesIds
 */
ReservedInstancesModification.prototype['ReservedInstancesIds'] = undefined;

/**
 * @member {String} ReservedInstancesModificationId
 */
ReservedInstancesModification.prototype['ReservedInstancesModificationId'] = undefined;

/**
 * @member {String} Status
 */
ReservedInstancesModification.prototype['Status'] = undefined;

/**
 * @member {String} StatusMessage
 */
ReservedInstancesModification.prototype['StatusMessage'] = undefined;

/**
 * @member {Date} UpdateDate
 */
ReservedInstancesModification.prototype['UpdateDate'] = undefined;






export default ReservedInstancesModification;

