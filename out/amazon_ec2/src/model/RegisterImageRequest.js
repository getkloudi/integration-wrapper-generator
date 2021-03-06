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
import ArchitectureValues from './ArchitectureValues';
import BlockDeviceMapping from './BlockDeviceMapping';

/**
 * The RegisterImageRequest model module.
 * @module model/RegisterImageRequest
 * @version 1.1.0
 */
class RegisterImageRequest {
    /**
     * Constructs a new <code>RegisterImageRequest</code>.
     * Contains the parameters for RegisterImage.
     * @alias module:model/RegisterImageRequest
     * @param name {String} 
     */
    constructor(name) { 
        
        RegisterImageRequest.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['Name'] = name;
    }

    /**
     * Constructs a <code>RegisterImageRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RegisterImageRequest} obj Optional instance to populate.
     * @return {module:model/RegisterImageRequest} The populated <code>RegisterImageRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RegisterImageRequest();

            if (data.hasOwnProperty('Architecture')) {
                obj['Architecture'] = ArchitectureValues.constructFromObject(data['Architecture']);
            }
            if (data.hasOwnProperty('BillingProducts')) {
                obj['BillingProducts'] = ApiClient.convertToType(data['BillingProducts'], ['String']);
            }
            if (data.hasOwnProperty('BlockDeviceMappings')) {
                obj['BlockDeviceMappings'] = ApiClient.convertToType(data['BlockDeviceMappings'], [BlockDeviceMapping]);
            }
            if (data.hasOwnProperty('Description')) {
                obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
            }
            if (data.hasOwnProperty('DryRun')) {
                obj['DryRun'] = ApiClient.convertToType(data['DryRun'], 'Boolean');
            }
            if (data.hasOwnProperty('EnaSupport')) {
                obj['EnaSupport'] = ApiClient.convertToType(data['EnaSupport'], 'Boolean');
            }
            if (data.hasOwnProperty('ImageLocation')) {
                obj['ImageLocation'] = ApiClient.convertToType(data['ImageLocation'], 'String');
            }
            if (data.hasOwnProperty('KernelId')) {
                obj['KernelId'] = ApiClient.convertToType(data['KernelId'], 'String');
            }
            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('RamdiskId')) {
                obj['RamdiskId'] = ApiClient.convertToType(data['RamdiskId'], 'String');
            }
            if (data.hasOwnProperty('RootDeviceName')) {
                obj['RootDeviceName'] = ApiClient.convertToType(data['RootDeviceName'], 'String');
            }
            if (data.hasOwnProperty('SriovNetSupport')) {
                obj['SriovNetSupport'] = ApiClient.convertToType(data['SriovNetSupport'], 'String');
            }
            if (data.hasOwnProperty('VirtualizationType')) {
                obj['VirtualizationType'] = ApiClient.convertToType(data['VirtualizationType'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ArchitectureValues} Architecture
 */
RegisterImageRequest.prototype['Architecture'] = undefined;

/**
 * @member {Array.<String>} BillingProducts
 */
RegisterImageRequest.prototype['BillingProducts'] = undefined;

/**
 * @member {Array.<module:model/BlockDeviceMapping>} BlockDeviceMappings
 */
RegisterImageRequest.prototype['BlockDeviceMappings'] = undefined;

/**
 * @member {String} Description
 */
RegisterImageRequest.prototype['Description'] = undefined;

/**
 * @member {Boolean} DryRun
 */
RegisterImageRequest.prototype['DryRun'] = undefined;

/**
 * @member {Boolean} EnaSupport
 */
RegisterImageRequest.prototype['EnaSupport'] = undefined;

/**
 * @member {String} ImageLocation
 */
RegisterImageRequest.prototype['ImageLocation'] = undefined;

/**
 * @member {String} KernelId
 */
RegisterImageRequest.prototype['KernelId'] = undefined;

/**
 * @member {String} Name
 */
RegisterImageRequest.prototype['Name'] = undefined;

/**
 * @member {String} RamdiskId
 */
RegisterImageRequest.prototype['RamdiskId'] = undefined;

/**
 * @member {String} RootDeviceName
 */
RegisterImageRequest.prototype['RootDeviceName'] = undefined;

/**
 * @member {String} SriovNetSupport
 */
RegisterImageRequest.prototype['SriovNetSupport'] = undefined;

/**
 * @member {String} VirtualizationType
 */
RegisterImageRequest.prototype['VirtualizationType'] = undefined;






export default RegisterImageRequest;

