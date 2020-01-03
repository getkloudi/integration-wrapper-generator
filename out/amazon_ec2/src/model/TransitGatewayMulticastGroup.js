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
import MembershipType from './MembershipType';
import TransitGatewayAttachmentResourceType from './TransitGatewayAttachmentResourceType';

/**
 * The TransitGatewayMulticastGroup model module.
 * @module model/TransitGatewayMulticastGroup
 * @version 1.0.0
 */
class TransitGatewayMulticastGroup {
    /**
     * Constructs a new <code>TransitGatewayMulticastGroup</code>.
     * Describes the transit gateway multicast group resources.
     * @alias module:model/TransitGatewayMulticastGroup
     */
    constructor() { 
        
        TransitGatewayMulticastGroup.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TransitGatewayMulticastGroup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransitGatewayMulticastGroup} obj Optional instance to populate.
     * @return {module:model/TransitGatewayMulticastGroup} The populated <code>TransitGatewayMulticastGroup</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransitGatewayMulticastGroup();

            if (data.hasOwnProperty('GroupIpAddress')) {
                obj['GroupIpAddress'] = ApiClient.convertToType(data['GroupIpAddress'], 'String');
            }
            if (data.hasOwnProperty('GroupMember')) {
                obj['GroupMember'] = ApiClient.convertToType(data['GroupMember'], 'Boolean');
            }
            if (data.hasOwnProperty('GroupSource')) {
                obj['GroupSource'] = ApiClient.convertToType(data['GroupSource'], 'Boolean');
            }
            if (data.hasOwnProperty('MemberType')) {
                obj['MemberType'] = MembershipType.constructFromObject(data['MemberType']);
            }
            if (data.hasOwnProperty('NetworkInterfaceId')) {
                obj['NetworkInterfaceId'] = ApiClient.convertToType(data['NetworkInterfaceId'], 'String');
            }
            if (data.hasOwnProperty('ResourceId')) {
                obj['ResourceId'] = ApiClient.convertToType(data['ResourceId'], 'String');
            }
            if (data.hasOwnProperty('ResourceType')) {
                obj['ResourceType'] = TransitGatewayAttachmentResourceType.constructFromObject(data['ResourceType']);
            }
            if (data.hasOwnProperty('SourceType')) {
                obj['SourceType'] = MembershipType.constructFromObject(data['SourceType']);
            }
            if (data.hasOwnProperty('SubnetId')) {
                obj['SubnetId'] = ApiClient.convertToType(data['SubnetId'], 'String');
            }
            if (data.hasOwnProperty('TransitGatewayAttachmentId')) {
                obj['TransitGatewayAttachmentId'] = ApiClient.convertToType(data['TransitGatewayAttachmentId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} GroupIpAddress
 */
TransitGatewayMulticastGroup.prototype['GroupIpAddress'] = undefined;

/**
 * @member {Boolean} GroupMember
 */
TransitGatewayMulticastGroup.prototype['GroupMember'] = undefined;

/**
 * @member {Boolean} GroupSource
 */
TransitGatewayMulticastGroup.prototype['GroupSource'] = undefined;

/**
 * @member {module:model/MembershipType} MemberType
 */
TransitGatewayMulticastGroup.prototype['MemberType'] = undefined;

/**
 * @member {String} NetworkInterfaceId
 */
TransitGatewayMulticastGroup.prototype['NetworkInterfaceId'] = undefined;

/**
 * @member {String} ResourceId
 */
TransitGatewayMulticastGroup.prototype['ResourceId'] = undefined;

/**
 * @member {module:model/TransitGatewayAttachmentResourceType} ResourceType
 */
TransitGatewayMulticastGroup.prototype['ResourceType'] = undefined;

/**
 * @member {module:model/MembershipType} SourceType
 */
TransitGatewayMulticastGroup.prototype['SourceType'] = undefined;

/**
 * @member {String} SubnetId
 */
TransitGatewayMulticastGroup.prototype['SubnetId'] = undefined;

/**
 * @member {String} TransitGatewayAttachmentId
 */
TransitGatewayMulticastGroup.prototype['TransitGatewayAttachmentId'] = undefined;






export default TransitGatewayMulticastGroup;

