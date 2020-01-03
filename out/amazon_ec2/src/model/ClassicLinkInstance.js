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
import GroupIdentifier from './GroupIdentifier';
import Tag from './Tag';

/**
 * The ClassicLinkInstance model module.
 * @module model/ClassicLinkInstance
 * @version 1.0.0
 */
class ClassicLinkInstance {
    /**
     * Constructs a new <code>ClassicLinkInstance</code>.
     * Describes a linked EC2-Classic instance.
     * @alias module:model/ClassicLinkInstance
     */
    constructor() { 
        
        ClassicLinkInstance.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ClassicLinkInstance</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ClassicLinkInstance} obj Optional instance to populate.
     * @return {module:model/ClassicLinkInstance} The populated <code>ClassicLinkInstance</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ClassicLinkInstance();

            if (data.hasOwnProperty('Groups')) {
                obj['Groups'] = ApiClient.convertToType(data['Groups'], [GroupIdentifier]);
            }
            if (data.hasOwnProperty('InstanceId')) {
                obj['InstanceId'] = ApiClient.convertToType(data['InstanceId'], 'String');
            }
            if (data.hasOwnProperty('Tags')) {
                obj['Tags'] = ApiClient.convertToType(data['Tags'], [Tag]);
            }
            if (data.hasOwnProperty('VpcId')) {
                obj['VpcId'] = ApiClient.convertToType(data['VpcId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/GroupIdentifier>} Groups
 */
ClassicLinkInstance.prototype['Groups'] = undefined;

/**
 * @member {String} InstanceId
 */
ClassicLinkInstance.prototype['InstanceId'] = undefined;

/**
 * @member {Array.<module:model/Tag>} Tags
 */
ClassicLinkInstance.prototype['Tags'] = undefined;

/**
 * @member {String} VpcId
 */
ClassicLinkInstance.prototype['VpcId'] = undefined;






export default ClassicLinkInstance;

