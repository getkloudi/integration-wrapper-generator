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
import UserBucketDetails from './UserBucketDetails';

/**
 * The SnapshotTaskDetail model module.
 * @module model/SnapshotTaskDetail
 * @version 1.1.0
 */
class SnapshotTaskDetail {
    /**
     * Constructs a new <code>SnapshotTaskDetail</code>.
     * Details about the import snapshot task.
     * @alias module:model/SnapshotTaskDetail
     */
    constructor() { 
        
        SnapshotTaskDetail.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SnapshotTaskDetail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SnapshotTaskDetail} obj Optional instance to populate.
     * @return {module:model/SnapshotTaskDetail} The populated <code>SnapshotTaskDetail</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SnapshotTaskDetail();

            if (data.hasOwnProperty('Description')) {
                obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
            }
            if (data.hasOwnProperty('DiskImageSize')) {
                obj['DiskImageSize'] = ApiClient.convertToType(data['DiskImageSize'], 'Number');
            }
            if (data.hasOwnProperty('Encrypted')) {
                obj['Encrypted'] = ApiClient.convertToType(data['Encrypted'], 'Boolean');
            }
            if (data.hasOwnProperty('Format')) {
                obj['Format'] = ApiClient.convertToType(data['Format'], 'String');
            }
            if (data.hasOwnProperty('KmsKeyId')) {
                obj['KmsKeyId'] = ApiClient.convertToType(data['KmsKeyId'], 'String');
            }
            if (data.hasOwnProperty('Progress')) {
                obj['Progress'] = ApiClient.convertToType(data['Progress'], 'String');
            }
            if (data.hasOwnProperty('SnapshotId')) {
                obj['SnapshotId'] = ApiClient.convertToType(data['SnapshotId'], 'String');
            }
            if (data.hasOwnProperty('Status')) {
                obj['Status'] = ApiClient.convertToType(data['Status'], 'String');
            }
            if (data.hasOwnProperty('StatusMessage')) {
                obj['StatusMessage'] = ApiClient.convertToType(data['StatusMessage'], 'String');
            }
            if (data.hasOwnProperty('Url')) {
                obj['Url'] = ApiClient.convertToType(data['Url'], 'String');
            }
            if (data.hasOwnProperty('UserBucket')) {
                obj['UserBucket'] = UserBucketDetails.constructFromObject(data['UserBucket']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} Description
 */
SnapshotTaskDetail.prototype['Description'] = undefined;

/**
 * @member {Number} DiskImageSize
 */
SnapshotTaskDetail.prototype['DiskImageSize'] = undefined;

/**
 * @member {Boolean} Encrypted
 */
SnapshotTaskDetail.prototype['Encrypted'] = undefined;

/**
 * @member {String} Format
 */
SnapshotTaskDetail.prototype['Format'] = undefined;

/**
 * @member {String} KmsKeyId
 */
SnapshotTaskDetail.prototype['KmsKeyId'] = undefined;

/**
 * @member {String} Progress
 */
SnapshotTaskDetail.prototype['Progress'] = undefined;

/**
 * @member {String} SnapshotId
 */
SnapshotTaskDetail.prototype['SnapshotId'] = undefined;

/**
 * @member {String} Status
 */
SnapshotTaskDetail.prototype['Status'] = undefined;

/**
 * @member {String} StatusMessage
 */
SnapshotTaskDetail.prototype['StatusMessage'] = undefined;

/**
 * @member {String} Url
 */
SnapshotTaskDetail.prototype['Url'] = undefined;

/**
 * @member {module:model/UserBucketDetails} UserBucket
 */
SnapshotTaskDetail.prototype['UserBucket'] = undefined;






export default SnapshotTaskDetail;
