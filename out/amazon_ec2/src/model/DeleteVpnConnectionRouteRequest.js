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
 * The DeleteVpnConnectionRouteRequest model module.
 * @module model/DeleteVpnConnectionRouteRequest
 * @version 1.0.0
 */
class DeleteVpnConnectionRouteRequest {
    /**
     * Constructs a new <code>DeleteVpnConnectionRouteRequest</code>.
     * Contains the parameters for DeleteVpnConnectionRoute.
     * @alias module:model/DeleteVpnConnectionRouteRequest
     * @param destinationCidrBlock {String} 
     * @param vpnConnectionId {String} 
     */
    constructor(destinationCidrBlock, vpnConnectionId) { 
        
        DeleteVpnConnectionRouteRequest.initialize(this, destinationCidrBlock, vpnConnectionId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, destinationCidrBlock, vpnConnectionId) { 
        obj['DestinationCidrBlock'] = destinationCidrBlock;
        obj['VpnConnectionId'] = vpnConnectionId;
    }

    /**
     * Constructs a <code>DeleteVpnConnectionRouteRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteVpnConnectionRouteRequest} obj Optional instance to populate.
     * @return {module:model/DeleteVpnConnectionRouteRequest} The populated <code>DeleteVpnConnectionRouteRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteVpnConnectionRouteRequest();

            if (data.hasOwnProperty('DestinationCidrBlock')) {
                obj['DestinationCidrBlock'] = ApiClient.convertToType(data['DestinationCidrBlock'], 'String');
            }
            if (data.hasOwnProperty('VpnConnectionId')) {
                obj['VpnConnectionId'] = ApiClient.convertToType(data['VpnConnectionId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} DestinationCidrBlock
 */
DeleteVpnConnectionRouteRequest.prototype['DestinationCidrBlock'] = undefined;

/**
 * @member {String} VpnConnectionId
 */
DeleteVpnConnectionRouteRequest.prototype['VpnConnectionId'] = undefined;






export default DeleteVpnConnectionRouteRequest;

