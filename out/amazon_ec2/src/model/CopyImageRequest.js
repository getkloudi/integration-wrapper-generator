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

/**
 * The CopyImageRequest model module.
 * @module model/CopyImageRequest
 * @version 1.1.0
 */
class CopyImageRequest {
    /**
     * Constructs a new <code>CopyImageRequest</code>.
     * Contains the parameters for CopyImage.
     * @alias module:model/CopyImageRequest
     * @param name {String} 
     * @param sourceImageId {String} 
     * @param sourceRegion {String} 
     */
    constructor(name, sourceImageId, sourceRegion) { 
        
        CopyImageRequest.initialize(this, name, sourceImageId, sourceRegion);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, sourceImageId, sourceRegion) { 
        obj['Name'] = name;
        obj['SourceImageId'] = sourceImageId;
        obj['SourceRegion'] = sourceRegion;
    }

    /**
     * Constructs a <code>CopyImageRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CopyImageRequest} obj Optional instance to populate.
     * @return {module:model/CopyImageRequest} The populated <code>CopyImageRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CopyImageRequest();

            if (data.hasOwnProperty('ClientToken')) {
                obj['ClientToken'] = ApiClient.convertToType(data['ClientToken'], 'String');
            }
            if (data.hasOwnProperty('Description')) {
                obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
            }
            if (data.hasOwnProperty('DryRun')) {
                obj['DryRun'] = ApiClient.convertToType(data['DryRun'], 'Boolean');
            }
            if (data.hasOwnProperty('Encrypted')) {
                obj['Encrypted'] = ApiClient.convertToType(data['Encrypted'], 'Boolean');
            }
            if (data.hasOwnProperty('KmsKeyId')) {
                obj['KmsKeyId'] = ApiClient.convertToType(data['KmsKeyId'], 'String');
            }
            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('SourceImageId')) {
                obj['SourceImageId'] = ApiClient.convertToType(data['SourceImageId'], 'String');
            }
            if (data.hasOwnProperty('SourceRegion')) {
                obj['SourceRegion'] = ApiClient.convertToType(data['SourceRegion'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} ClientToken
 */
CopyImageRequest.prototype['ClientToken'] = undefined;

/**
 * @member {String} Description
 */
CopyImageRequest.prototype['Description'] = undefined;

/**
 * @member {Boolean} DryRun
 */
CopyImageRequest.prototype['DryRun'] = undefined;

/**
 * @member {Boolean} Encrypted
 */
CopyImageRequest.prototype['Encrypted'] = undefined;

/**
 * @member {String} KmsKeyId
 */
CopyImageRequest.prototype['KmsKeyId'] = undefined;

/**
 * @member {String} Name
 */
CopyImageRequest.prototype['Name'] = undefined;

/**
 * @member {String} SourceImageId
 */
CopyImageRequest.prototype['SourceImageId'] = undefined;

/**
 * @member {String} SourceRegion
 */
CopyImageRequest.prototype['SourceRegion'] = undefined;






export default CopyImageRequest;

