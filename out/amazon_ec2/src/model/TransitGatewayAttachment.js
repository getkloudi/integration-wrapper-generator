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
import Tag from './Tag';
import TransitGatewayAttachmentAssociation from './TransitGatewayAttachmentAssociation';
import TransitGatewayAttachmentResourceType from './TransitGatewayAttachmentResourceType';
import TransitGatewayAttachmentState from './TransitGatewayAttachmentState';

/**
 * The TransitGatewayAttachment model module.
 * @module model/TransitGatewayAttachment
 * @version 1.0.0
 */
class TransitGatewayAttachment {
    /**
     * Constructs a new <code>TransitGatewayAttachment</code>.
     * Describes an attachment between a resource and a transit gateway.
     * @alias module:model/TransitGatewayAttachment
     */
    constructor() { 
        
        TransitGatewayAttachment.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TransitGatewayAttachment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransitGatewayAttachment} obj Optional instance to populate.
     * @return {module:model/TransitGatewayAttachment} The populated <code>TransitGatewayAttachment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransitGatewayAttachment();

            if (data.hasOwnProperty('Association')) {
                obj['Association'] = TransitGatewayAttachmentAssociation.constructFromObject(data['Association']);
            }
            if (data.hasOwnProperty('CreationTime')) {
                obj['CreationTime'] = ApiClient.convertToType(data['CreationTime'], 'Date');
            }
            if (data.hasOwnProperty('ResourceId')) {
                obj['ResourceId'] = ApiClient.convertToType(data['ResourceId'], 'String');
            }
            if (data.hasOwnProperty('ResourceOwnerId')) {
                obj['ResourceOwnerId'] = ApiClient.convertToType(data['ResourceOwnerId'], 'String');
            }
            if (data.hasOwnProperty('ResourceType')) {
                obj['ResourceType'] = TransitGatewayAttachmentResourceType.constructFromObject(data['ResourceType']);
            }
            if (data.hasOwnProperty('State')) {
                obj['State'] = TransitGatewayAttachmentState.constructFromObject(data['State']);
            }
            if (data.hasOwnProperty('Tags')) {
                obj['Tags'] = ApiClient.convertToType(data['Tags'], [Tag]);
            }
            if (data.hasOwnProperty('TransitGatewayAttachmentId')) {
                obj['TransitGatewayAttachmentId'] = ApiClient.convertToType(data['TransitGatewayAttachmentId'], 'String');
            }
            if (data.hasOwnProperty('TransitGatewayId')) {
                obj['TransitGatewayId'] = ApiClient.convertToType(data['TransitGatewayId'], 'String');
            }
            if (data.hasOwnProperty('TransitGatewayOwnerId')) {
                obj['TransitGatewayOwnerId'] = ApiClient.convertToType(data['TransitGatewayOwnerId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/TransitGatewayAttachmentAssociation} Association
 */
TransitGatewayAttachment.prototype['Association'] = undefined;

/**
 * @member {Date} CreationTime
 */
TransitGatewayAttachment.prototype['CreationTime'] = undefined;

/**
 * @member {String} ResourceId
 */
TransitGatewayAttachment.prototype['ResourceId'] = undefined;

/**
 * @member {String} ResourceOwnerId
 */
TransitGatewayAttachment.prototype['ResourceOwnerId'] = undefined;

/**
 * @member {module:model/TransitGatewayAttachmentResourceType} ResourceType
 */
TransitGatewayAttachment.prototype['ResourceType'] = undefined;

/**
 * @member {module:model/TransitGatewayAttachmentState} State
 */
TransitGatewayAttachment.prototype['State'] = undefined;

/**
 * @member {Array.<module:model/Tag>} Tags
 */
TransitGatewayAttachment.prototype['Tags'] = undefined;

/**
 * @member {String} TransitGatewayAttachmentId
 */
TransitGatewayAttachment.prototype['TransitGatewayAttachmentId'] = undefined;

/**
 * @member {String} TransitGatewayId
 */
TransitGatewayAttachment.prototype['TransitGatewayId'] = undefined;

/**
 * @member {String} TransitGatewayOwnerId
 */
TransitGatewayAttachment.prototype['TransitGatewayOwnerId'] = undefined;






export default TransitGatewayAttachment;

