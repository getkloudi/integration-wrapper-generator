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
import TagSpecification from './TagSpecification';

/**
 * The CreateTransitGatewayPeeringAttachmentRequest model module.
 * @module model/CreateTransitGatewayPeeringAttachmentRequest
 * @version 1.0.0
 */
class CreateTransitGatewayPeeringAttachmentRequest {
    /**
     * Constructs a new <code>CreateTransitGatewayPeeringAttachmentRequest</code>.
     * @alias module:model/CreateTransitGatewayPeeringAttachmentRequest
     * @param peerAccountId {String} 
     * @param peerRegion {String} 
     * @param peerTransitGatewayId {String} 
     * @param transitGatewayId {String} 
     */
    constructor(peerAccountId, peerRegion, peerTransitGatewayId, transitGatewayId) { 
        
        CreateTransitGatewayPeeringAttachmentRequest.initialize(this, peerAccountId, peerRegion, peerTransitGatewayId, transitGatewayId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, peerAccountId, peerRegion, peerTransitGatewayId, transitGatewayId) { 
        obj['PeerAccountId'] = peerAccountId;
        obj['PeerRegion'] = peerRegion;
        obj['PeerTransitGatewayId'] = peerTransitGatewayId;
        obj['TransitGatewayId'] = transitGatewayId;
    }

    /**
     * Constructs a <code>CreateTransitGatewayPeeringAttachmentRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateTransitGatewayPeeringAttachmentRequest} obj Optional instance to populate.
     * @return {module:model/CreateTransitGatewayPeeringAttachmentRequest} The populated <code>CreateTransitGatewayPeeringAttachmentRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateTransitGatewayPeeringAttachmentRequest();

            if (data.hasOwnProperty('DryRun')) {
                obj['DryRun'] = ApiClient.convertToType(data['DryRun'], 'Boolean');
            }
            if (data.hasOwnProperty('PeerAccountId')) {
                obj['PeerAccountId'] = ApiClient.convertToType(data['PeerAccountId'], 'String');
            }
            if (data.hasOwnProperty('PeerRegion')) {
                obj['PeerRegion'] = ApiClient.convertToType(data['PeerRegion'], 'String');
            }
            if (data.hasOwnProperty('PeerTransitGatewayId')) {
                obj['PeerTransitGatewayId'] = ApiClient.convertToType(data['PeerTransitGatewayId'], 'String');
            }
            if (data.hasOwnProperty('TagSpecifications')) {
                obj['TagSpecifications'] = ApiClient.convertToType(data['TagSpecifications'], [TagSpecification]);
            }
            if (data.hasOwnProperty('TransitGatewayId')) {
                obj['TransitGatewayId'] = ApiClient.convertToType(data['TransitGatewayId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} DryRun
 */
CreateTransitGatewayPeeringAttachmentRequest.prototype['DryRun'] = undefined;

/**
 * @member {String} PeerAccountId
 */
CreateTransitGatewayPeeringAttachmentRequest.prototype['PeerAccountId'] = undefined;

/**
 * @member {String} PeerRegion
 */
CreateTransitGatewayPeeringAttachmentRequest.prototype['PeerRegion'] = undefined;

/**
 * @member {String} PeerTransitGatewayId
 */
CreateTransitGatewayPeeringAttachmentRequest.prototype['PeerTransitGatewayId'] = undefined;

/**
 * @member {Array.<module:model/TagSpecification>} TagSpecifications
 */
CreateTransitGatewayPeeringAttachmentRequest.prototype['TagSpecifications'] = undefined;

/**
 * @member {String} TransitGatewayId
 */
CreateTransitGatewayPeeringAttachmentRequest.prototype['TransitGatewayId'] = undefined;






export default CreateTransitGatewayPeeringAttachmentRequest;

