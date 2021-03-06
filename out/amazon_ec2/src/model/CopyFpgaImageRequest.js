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
 * The CopyFpgaImageRequest model module.
 * @module model/CopyFpgaImageRequest
 * @version 1.1.0
 */
class CopyFpgaImageRequest {
    /**
     * Constructs a new <code>CopyFpgaImageRequest</code>.
     * @alias module:model/CopyFpgaImageRequest
     * @param sourceFpgaImageId {String} 
     * @param sourceRegion {String} 
     */
    constructor(sourceFpgaImageId, sourceRegion) { 
        
        CopyFpgaImageRequest.initialize(this, sourceFpgaImageId, sourceRegion);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sourceFpgaImageId, sourceRegion) { 
        obj['SourceFpgaImageId'] = sourceFpgaImageId;
        obj['SourceRegion'] = sourceRegion;
    }

    /**
     * Constructs a <code>CopyFpgaImageRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CopyFpgaImageRequest} obj Optional instance to populate.
     * @return {module:model/CopyFpgaImageRequest} The populated <code>CopyFpgaImageRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CopyFpgaImageRequest();

            if (data.hasOwnProperty('ClientToken')) {
                obj['ClientToken'] = ApiClient.convertToType(data['ClientToken'], 'String');
            }
            if (data.hasOwnProperty('Description')) {
                obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
            }
            if (data.hasOwnProperty('DryRun')) {
                obj['DryRun'] = ApiClient.convertToType(data['DryRun'], 'Boolean');
            }
            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('SourceFpgaImageId')) {
                obj['SourceFpgaImageId'] = ApiClient.convertToType(data['SourceFpgaImageId'], 'String');
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
CopyFpgaImageRequest.prototype['ClientToken'] = undefined;

/**
 * @member {String} Description
 */
CopyFpgaImageRequest.prototype['Description'] = undefined;

/**
 * @member {Boolean} DryRun
 */
CopyFpgaImageRequest.prototype['DryRun'] = undefined;

/**
 * @member {String} Name
 */
CopyFpgaImageRequest.prototype['Name'] = undefined;

/**
 * @member {String} SourceFpgaImageId
 */
CopyFpgaImageRequest.prototype['SourceFpgaImageId'] = undefined;

/**
 * @member {String} SourceRegion
 */
CopyFpgaImageRequest.prototype['SourceRegion'] = undefined;






export default CopyFpgaImageRequest;

