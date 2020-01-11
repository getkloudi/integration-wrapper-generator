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
import RequestLaunchTemplateData from './RequestLaunchTemplateData';
import TagSpecification from './TagSpecification';

/**
 * The CreateLaunchTemplateRequest model module.
 * @module model/CreateLaunchTemplateRequest
 * @version 1.1.0
 */
class CreateLaunchTemplateRequest {
    /**
     * Constructs a new <code>CreateLaunchTemplateRequest</code>.
     * @alias module:model/CreateLaunchTemplateRequest
     * @param launchTemplateData {module:model/RequestLaunchTemplateData} 
     * @param launchTemplateName {String} 
     */
    constructor(launchTemplateData, launchTemplateName) { 
        
        CreateLaunchTemplateRequest.initialize(this, launchTemplateData, launchTemplateName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, launchTemplateData, launchTemplateName) { 
        obj['LaunchTemplateData'] = launchTemplateData;
        obj['LaunchTemplateName'] = launchTemplateName;
    }

    /**
     * Constructs a <code>CreateLaunchTemplateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateLaunchTemplateRequest} obj Optional instance to populate.
     * @return {module:model/CreateLaunchTemplateRequest} The populated <code>CreateLaunchTemplateRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateLaunchTemplateRequest();

            if (data.hasOwnProperty('ClientToken')) {
                obj['ClientToken'] = ApiClient.convertToType(data['ClientToken'], 'String');
            }
            if (data.hasOwnProperty('DryRun')) {
                obj['DryRun'] = ApiClient.convertToType(data['DryRun'], 'Boolean');
            }
            if (data.hasOwnProperty('LaunchTemplateData')) {
                obj['LaunchTemplateData'] = RequestLaunchTemplateData.constructFromObject(data['LaunchTemplateData']);
            }
            if (data.hasOwnProperty('LaunchTemplateName')) {
                obj['LaunchTemplateName'] = ApiClient.convertToType(data['LaunchTemplateName'], 'String');
            }
            if (data.hasOwnProperty('TagSpecifications')) {
                obj['TagSpecifications'] = ApiClient.convertToType(data['TagSpecifications'], [TagSpecification]);
            }
            if (data.hasOwnProperty('VersionDescription')) {
                obj['VersionDescription'] = ApiClient.convertToType(data['VersionDescription'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} ClientToken
 */
CreateLaunchTemplateRequest.prototype['ClientToken'] = undefined;

/**
 * @member {Boolean} DryRun
 */
CreateLaunchTemplateRequest.prototype['DryRun'] = undefined;

/**
 * @member {module:model/RequestLaunchTemplateData} LaunchTemplateData
 */
CreateLaunchTemplateRequest.prototype['LaunchTemplateData'] = undefined;

/**
 * @member {String} LaunchTemplateName
 */
CreateLaunchTemplateRequest.prototype['LaunchTemplateName'] = undefined;

/**
 * @member {Array.<module:model/TagSpecification>} TagSpecifications
 */
CreateLaunchTemplateRequest.prototype['TagSpecifications'] = undefined;

/**
 * @member {String} VersionDescription
 */
CreateLaunchTemplateRequest.prototype['VersionDescription'] = undefined;






export default CreateLaunchTemplateRequest;
