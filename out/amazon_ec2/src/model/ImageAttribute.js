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
import AttributeValue from './AttributeValue';
import BlockDeviceMapping from './BlockDeviceMapping';
import LaunchPermission from './LaunchPermission';
import ProductCode from './ProductCode';

/**
 * The ImageAttribute model module.
 * @module model/ImageAttribute
 * @version 1.1.0
 */
class ImageAttribute {
    /**
     * Constructs a new <code>ImageAttribute</code>.
     * Describes an image attribute.
     * @alias module:model/ImageAttribute
     */
    constructor() { 
        
        ImageAttribute.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ImageAttribute</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ImageAttribute} obj Optional instance to populate.
     * @return {module:model/ImageAttribute} The populated <code>ImageAttribute</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ImageAttribute();

            if (data.hasOwnProperty('BlockDeviceMappings')) {
                obj['BlockDeviceMappings'] = ApiClient.convertToType(data['BlockDeviceMappings'], [BlockDeviceMapping]);
            }
            if (data.hasOwnProperty('Description')) {
                obj['Description'] = AttributeValue.constructFromObject(data['Description']);
            }
            if (data.hasOwnProperty('ImageId')) {
                obj['ImageId'] = ApiClient.convertToType(data['ImageId'], 'String');
            }
            if (data.hasOwnProperty('KernelId')) {
                obj['KernelId'] = AttributeValue.constructFromObject(data['KernelId']);
            }
            if (data.hasOwnProperty('LaunchPermissions')) {
                obj['LaunchPermissions'] = ApiClient.convertToType(data['LaunchPermissions'], [LaunchPermission]);
            }
            if (data.hasOwnProperty('ProductCodes')) {
                obj['ProductCodes'] = ApiClient.convertToType(data['ProductCodes'], [ProductCode]);
            }
            if (data.hasOwnProperty('RamdiskId')) {
                obj['RamdiskId'] = AttributeValue.constructFromObject(data['RamdiskId']);
            }
            if (data.hasOwnProperty('SriovNetSupport')) {
                obj['SriovNetSupport'] = AttributeValue.constructFromObject(data['SriovNetSupport']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/BlockDeviceMapping>} BlockDeviceMappings
 */
ImageAttribute.prototype['BlockDeviceMappings'] = undefined;

/**
 * @member {module:model/AttributeValue} Description
 */
ImageAttribute.prototype['Description'] = undefined;

/**
 * @member {String} ImageId
 */
ImageAttribute.prototype['ImageId'] = undefined;

/**
 * @member {module:model/AttributeValue} KernelId
 */
ImageAttribute.prototype['KernelId'] = undefined;

/**
 * @member {Array.<module:model/LaunchPermission>} LaunchPermissions
 */
ImageAttribute.prototype['LaunchPermissions'] = undefined;

/**
 * @member {Array.<module:model/ProductCode>} ProductCodes
 */
ImageAttribute.prototype['ProductCodes'] = undefined;

/**
 * @member {module:model/AttributeValue} RamdiskId
 */
ImageAttribute.prototype['RamdiskId'] = undefined;

/**
 * @member {module:model/AttributeValue} SriovNetSupport
 */
ImageAttribute.prototype['SriovNetSupport'] = undefined;






export default ImageAttribute;
