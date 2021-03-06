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
 * The VolumeStatusAction model module.
 * @module model/VolumeStatusAction
 * @version 1.1.0
 */
class VolumeStatusAction {
    /**
     * Constructs a new <code>VolumeStatusAction</code>.
     * Describes a volume status operation code.
     * @alias module:model/VolumeStatusAction
     */
    constructor() { 
        
        VolumeStatusAction.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VolumeStatusAction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VolumeStatusAction} obj Optional instance to populate.
     * @return {module:model/VolumeStatusAction} The populated <code>VolumeStatusAction</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VolumeStatusAction();

            if (data.hasOwnProperty('Code')) {
                obj['Code'] = ApiClient.convertToType(data['Code'], 'String');
            }
            if (data.hasOwnProperty('Description')) {
                obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
            }
            if (data.hasOwnProperty('EventId')) {
                obj['EventId'] = ApiClient.convertToType(data['EventId'], 'String');
            }
            if (data.hasOwnProperty('EventType')) {
                obj['EventType'] = ApiClient.convertToType(data['EventType'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} Code
 */
VolumeStatusAction.prototype['Code'] = undefined;

/**
 * @member {String} Description
 */
VolumeStatusAction.prototype['Description'] = undefined;

/**
 * @member {String} EventId
 */
VolumeStatusAction.prototype['EventId'] = undefined;

/**
 * @member {String} EventType
 */
VolumeStatusAction.prototype['EventType'] = undefined;






export default VolumeStatusAction;

