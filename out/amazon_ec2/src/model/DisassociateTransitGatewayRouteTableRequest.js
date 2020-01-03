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
 * The DisassociateTransitGatewayRouteTableRequest model module.
 * @module model/DisassociateTransitGatewayRouteTableRequest
 * @version 1.0.0
 */
class DisassociateTransitGatewayRouteTableRequest {
    /**
     * Constructs a new <code>DisassociateTransitGatewayRouteTableRequest</code>.
     * @alias module:model/DisassociateTransitGatewayRouteTableRequest
     * @param transitGatewayAttachmentId {String} 
     * @param transitGatewayRouteTableId {String} 
     */
    constructor(transitGatewayAttachmentId, transitGatewayRouteTableId) { 
        
        DisassociateTransitGatewayRouteTableRequest.initialize(this, transitGatewayAttachmentId, transitGatewayRouteTableId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, transitGatewayAttachmentId, transitGatewayRouteTableId) { 
        obj['TransitGatewayAttachmentId'] = transitGatewayAttachmentId;
        obj['TransitGatewayRouteTableId'] = transitGatewayRouteTableId;
    }

    /**
     * Constructs a <code>DisassociateTransitGatewayRouteTableRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DisassociateTransitGatewayRouteTableRequest} obj Optional instance to populate.
     * @return {module:model/DisassociateTransitGatewayRouteTableRequest} The populated <code>DisassociateTransitGatewayRouteTableRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DisassociateTransitGatewayRouteTableRequest();

            if (data.hasOwnProperty('DryRun')) {
                obj['DryRun'] = ApiClient.convertToType(data['DryRun'], 'Boolean');
            }
            if (data.hasOwnProperty('TransitGatewayAttachmentId')) {
                obj['TransitGatewayAttachmentId'] = ApiClient.convertToType(data['TransitGatewayAttachmentId'], 'String');
            }
            if (data.hasOwnProperty('TransitGatewayRouteTableId')) {
                obj['TransitGatewayRouteTableId'] = ApiClient.convertToType(data['TransitGatewayRouteTableId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} DryRun
 */
DisassociateTransitGatewayRouteTableRequest.prototype['DryRun'] = undefined;

/**
 * @member {String} TransitGatewayAttachmentId
 */
DisassociateTransitGatewayRouteTableRequest.prototype['TransitGatewayAttachmentId'] = undefined;

/**
 * @member {String} TransitGatewayRouteTableId
 */
DisassociateTransitGatewayRouteTableRequest.prototype['TransitGatewayRouteTableId'] = undefined;






export default DisassociateTransitGatewayRouteTableRequest;

