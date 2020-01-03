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
import ClientData from './ClientData';
import ImageDiskContainer from './ImageDiskContainer';
import ImportImageLicenseConfigurationRequest from './ImportImageLicenseConfigurationRequest';

/**
 * The ImportImageRequest model module.
 * @module model/ImportImageRequest
 * @version 1.0.0
 */
class ImportImageRequest {
    /**
     * Constructs a new <code>ImportImageRequest</code>.
     * @alias module:model/ImportImageRequest
     */
    constructor() { 
        
        ImportImageRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ImportImageRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ImportImageRequest} obj Optional instance to populate.
     * @return {module:model/ImportImageRequest} The populated <code>ImportImageRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ImportImageRequest();

            if (data.hasOwnProperty('Architecture')) {
                obj['Architecture'] = ApiClient.convertToType(data['Architecture'], 'String');
            }
            if (data.hasOwnProperty('ClientData')) {
                obj['ClientData'] = ClientData.constructFromObject(data['ClientData']);
            }
            if (data.hasOwnProperty('ClientToken')) {
                obj['ClientToken'] = ApiClient.convertToType(data['ClientToken'], 'String');
            }
            if (data.hasOwnProperty('Description')) {
                obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
            }
            if (data.hasOwnProperty('DiskContainers')) {
                obj['DiskContainers'] = ApiClient.convertToType(data['DiskContainers'], [ImageDiskContainer]);
            }
            if (data.hasOwnProperty('DryRun')) {
                obj['DryRun'] = ApiClient.convertToType(data['DryRun'], 'Boolean');
            }
            if (data.hasOwnProperty('Encrypted')) {
                obj['Encrypted'] = ApiClient.convertToType(data['Encrypted'], 'Boolean');
            }
            if (data.hasOwnProperty('Hypervisor')) {
                obj['Hypervisor'] = ApiClient.convertToType(data['Hypervisor'], 'String');
            }
            if (data.hasOwnProperty('KmsKeyId')) {
                obj['KmsKeyId'] = ApiClient.convertToType(data['KmsKeyId'], 'String');
            }
            if (data.hasOwnProperty('LicenseSpecifications')) {
                obj['LicenseSpecifications'] = ApiClient.convertToType(data['LicenseSpecifications'], [ImportImageLicenseConfigurationRequest]);
            }
            if (data.hasOwnProperty('LicenseType')) {
                obj['LicenseType'] = ApiClient.convertToType(data['LicenseType'], 'String');
            }
            if (data.hasOwnProperty('Platform')) {
                obj['Platform'] = ApiClient.convertToType(data['Platform'], 'String');
            }
            if (data.hasOwnProperty('RoleName')) {
                obj['RoleName'] = ApiClient.convertToType(data['RoleName'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} Architecture
 */
ImportImageRequest.prototype['Architecture'] = undefined;

/**
 * @member {module:model/ClientData} ClientData
 */
ImportImageRequest.prototype['ClientData'] = undefined;

/**
 * @member {String} ClientToken
 */
ImportImageRequest.prototype['ClientToken'] = undefined;

/**
 * @member {String} Description
 */
ImportImageRequest.prototype['Description'] = undefined;

/**
 * @member {Array.<module:model/ImageDiskContainer>} DiskContainers
 */
ImportImageRequest.prototype['DiskContainers'] = undefined;

/**
 * @member {Boolean} DryRun
 */
ImportImageRequest.prototype['DryRun'] = undefined;

/**
 * @member {Boolean} Encrypted
 */
ImportImageRequest.prototype['Encrypted'] = undefined;

/**
 * @member {String} Hypervisor
 */
ImportImageRequest.prototype['Hypervisor'] = undefined;

/**
 * @member {String} KmsKeyId
 */
ImportImageRequest.prototype['KmsKeyId'] = undefined;

/**
 * @member {Array.<module:model/ImportImageLicenseConfigurationRequest>} LicenseSpecifications
 */
ImportImageRequest.prototype['LicenseSpecifications'] = undefined;

/**
 * @member {String} LicenseType
 */
ImportImageRequest.prototype['LicenseType'] = undefined;

/**
 * @member {String} Platform
 */
ImportImageRequest.prototype['Platform'] = undefined;

/**
 * @member {String} RoleName
 */
ImportImageRequest.prototype['RoleName'] = undefined;






export default ImportImageRequest;

