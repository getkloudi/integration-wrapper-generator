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
import ImportImageLicenseConfigurationResponse from './ImportImageLicenseConfigurationResponse';
import SnapshotDetail from './SnapshotDetail';
import Tag from './Tag';

/**
 * The ImportImageTask model module.
 * @module model/ImportImageTask
 * @version 1.1.0
 */
class ImportImageTask {
    /**
     * Constructs a new <code>ImportImageTask</code>.
     * Describes an import image task.
     * @alias module:model/ImportImageTask
     */
    constructor() { 
        
        ImportImageTask.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ImportImageTask</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ImportImageTask} obj Optional instance to populate.
     * @return {module:model/ImportImageTask} The populated <code>ImportImageTask</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ImportImageTask();

            if (data.hasOwnProperty('Architecture')) {
                obj['Architecture'] = ApiClient.convertToType(data['Architecture'], 'String');
            }
            if (data.hasOwnProperty('Description')) {
                obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
            }
            if (data.hasOwnProperty('Encrypted')) {
                obj['Encrypted'] = ApiClient.convertToType(data['Encrypted'], 'Boolean');
            }
            if (data.hasOwnProperty('Hypervisor')) {
                obj['Hypervisor'] = ApiClient.convertToType(data['Hypervisor'], 'String');
            }
            if (data.hasOwnProperty('ImageId')) {
                obj['ImageId'] = ApiClient.convertToType(data['ImageId'], 'String');
            }
            if (data.hasOwnProperty('ImportTaskId')) {
                obj['ImportTaskId'] = ApiClient.convertToType(data['ImportTaskId'], 'String');
            }
            if (data.hasOwnProperty('KmsKeyId')) {
                obj['KmsKeyId'] = ApiClient.convertToType(data['KmsKeyId'], 'String');
            }
            if (data.hasOwnProperty('LicenseSpecifications')) {
                obj['LicenseSpecifications'] = ApiClient.convertToType(data['LicenseSpecifications'], [ImportImageLicenseConfigurationResponse]);
            }
            if (data.hasOwnProperty('LicenseType')) {
                obj['LicenseType'] = ApiClient.convertToType(data['LicenseType'], 'String');
            }
            if (data.hasOwnProperty('Platform')) {
                obj['Platform'] = ApiClient.convertToType(data['Platform'], 'String');
            }
            if (data.hasOwnProperty('Progress')) {
                obj['Progress'] = ApiClient.convertToType(data['Progress'], 'String');
            }
            if (data.hasOwnProperty('SnapshotDetails')) {
                obj['SnapshotDetails'] = ApiClient.convertToType(data['SnapshotDetails'], [SnapshotDetail]);
            }
            if (data.hasOwnProperty('Status')) {
                obj['Status'] = ApiClient.convertToType(data['Status'], 'String');
            }
            if (data.hasOwnProperty('StatusMessage')) {
                obj['StatusMessage'] = ApiClient.convertToType(data['StatusMessage'], 'String');
            }
            if (data.hasOwnProperty('Tags')) {
                obj['Tags'] = ApiClient.convertToType(data['Tags'], [Tag]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} Architecture
 */
ImportImageTask.prototype['Architecture'] = undefined;

/**
 * @member {String} Description
 */
ImportImageTask.prototype['Description'] = undefined;

/**
 * @member {Boolean} Encrypted
 */
ImportImageTask.prototype['Encrypted'] = undefined;

/**
 * @member {String} Hypervisor
 */
ImportImageTask.prototype['Hypervisor'] = undefined;

/**
 * @member {String} ImageId
 */
ImportImageTask.prototype['ImageId'] = undefined;

/**
 * @member {String} ImportTaskId
 */
ImportImageTask.prototype['ImportTaskId'] = undefined;

/**
 * @member {String} KmsKeyId
 */
ImportImageTask.prototype['KmsKeyId'] = undefined;

/**
 * @member {Array.<module:model/ImportImageLicenseConfigurationResponse>} LicenseSpecifications
 */
ImportImageTask.prototype['LicenseSpecifications'] = undefined;

/**
 * @member {String} LicenseType
 */
ImportImageTask.prototype['LicenseType'] = undefined;

/**
 * @member {String} Platform
 */
ImportImageTask.prototype['Platform'] = undefined;

/**
 * @member {String} Progress
 */
ImportImageTask.prototype['Progress'] = undefined;

/**
 * @member {Array.<module:model/SnapshotDetail>} SnapshotDetails
 */
ImportImageTask.prototype['SnapshotDetails'] = undefined;

/**
 * @member {String} Status
 */
ImportImageTask.prototype['Status'] = undefined;

/**
 * @member {String} StatusMessage
 */
ImportImageTask.prototype['StatusMessage'] = undefined;

/**
 * @member {Array.<module:model/Tag>} Tags
 */
ImportImageTask.prototype['Tags'] = undefined;






export default ImportImageTask;

