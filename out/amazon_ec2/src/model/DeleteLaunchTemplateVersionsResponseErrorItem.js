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
import ResponseError from './ResponseError';

/**
 * The DeleteLaunchTemplateVersionsResponseErrorItem model module.
 * @module model/DeleteLaunchTemplateVersionsResponseErrorItem
 * @version 1.1.0
 */
class DeleteLaunchTemplateVersionsResponseErrorItem {
    /**
     * Constructs a new <code>DeleteLaunchTemplateVersionsResponseErrorItem</code>.
     * Describes a launch template version that could not be deleted.
     * @alias module:model/DeleteLaunchTemplateVersionsResponseErrorItem
     */
    constructor() { 
        
        DeleteLaunchTemplateVersionsResponseErrorItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteLaunchTemplateVersionsResponseErrorItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteLaunchTemplateVersionsResponseErrorItem} obj Optional instance to populate.
     * @return {module:model/DeleteLaunchTemplateVersionsResponseErrorItem} The populated <code>DeleteLaunchTemplateVersionsResponseErrorItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteLaunchTemplateVersionsResponseErrorItem();

            if (data.hasOwnProperty('LaunchTemplateId')) {
                obj['LaunchTemplateId'] = ApiClient.convertToType(data['LaunchTemplateId'], 'String');
            }
            if (data.hasOwnProperty('LaunchTemplateName')) {
                obj['LaunchTemplateName'] = ApiClient.convertToType(data['LaunchTemplateName'], 'String');
            }
            if (data.hasOwnProperty('ResponseError')) {
                obj['ResponseError'] = ResponseError.constructFromObject(data['ResponseError']);
            }
            if (data.hasOwnProperty('VersionNumber')) {
                obj['VersionNumber'] = ApiClient.convertToType(data['VersionNumber'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} LaunchTemplateId
 */
DeleteLaunchTemplateVersionsResponseErrorItem.prototype['LaunchTemplateId'] = undefined;

/**
 * @member {String} LaunchTemplateName
 */
DeleteLaunchTemplateVersionsResponseErrorItem.prototype['LaunchTemplateName'] = undefined;

/**
 * @member {module:model/ResponseError} ResponseError
 */
DeleteLaunchTemplateVersionsResponseErrorItem.prototype['ResponseError'] = undefined;

/**
 * @member {Number} VersionNumber
 */
DeleteLaunchTemplateVersionsResponseErrorItem.prototype['VersionNumber'] = undefined;






export default DeleteLaunchTemplateVersionsResponseErrorItem;

