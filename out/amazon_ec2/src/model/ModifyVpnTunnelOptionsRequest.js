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
import ModifyVpnTunnelOptionsSpecification from './ModifyVpnTunnelOptionsSpecification';

/**
 * The ModifyVpnTunnelOptionsRequest model module.
 * @module model/ModifyVpnTunnelOptionsRequest
 * @version 1.1.0
 */
class ModifyVpnTunnelOptionsRequest {
    /**
     * Constructs a new <code>ModifyVpnTunnelOptionsRequest</code>.
     * @alias module:model/ModifyVpnTunnelOptionsRequest
     * @param tunnelOptions {module:model/ModifyVpnTunnelOptionsSpecification} 
     * @param vpnConnectionId {String} 
     * @param vpnTunnelOutsideIpAddress {String} 
     */
    constructor(tunnelOptions, vpnConnectionId, vpnTunnelOutsideIpAddress) { 
        
        ModifyVpnTunnelOptionsRequest.initialize(this, tunnelOptions, vpnConnectionId, vpnTunnelOutsideIpAddress);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, tunnelOptions, vpnConnectionId, vpnTunnelOutsideIpAddress) { 
        obj['TunnelOptions'] = tunnelOptions;
        obj['VpnConnectionId'] = vpnConnectionId;
        obj['VpnTunnelOutsideIpAddress'] = vpnTunnelOutsideIpAddress;
    }

    /**
     * Constructs a <code>ModifyVpnTunnelOptionsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModifyVpnTunnelOptionsRequest} obj Optional instance to populate.
     * @return {module:model/ModifyVpnTunnelOptionsRequest} The populated <code>ModifyVpnTunnelOptionsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModifyVpnTunnelOptionsRequest();

            if (data.hasOwnProperty('DryRun')) {
                obj['DryRun'] = ApiClient.convertToType(data['DryRun'], 'Boolean');
            }
            if (data.hasOwnProperty('TunnelOptions')) {
                obj['TunnelOptions'] = ModifyVpnTunnelOptionsSpecification.constructFromObject(data['TunnelOptions']);
            }
            if (data.hasOwnProperty('VpnConnectionId')) {
                obj['VpnConnectionId'] = ApiClient.convertToType(data['VpnConnectionId'], 'String');
            }
            if (data.hasOwnProperty('VpnTunnelOutsideIpAddress')) {
                obj['VpnTunnelOutsideIpAddress'] = ApiClient.convertToType(data['VpnTunnelOutsideIpAddress'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} DryRun
 */
ModifyVpnTunnelOptionsRequest.prototype['DryRun'] = undefined;

/**
 * @member {module:model/ModifyVpnTunnelOptionsSpecification} TunnelOptions
 */
ModifyVpnTunnelOptionsRequest.prototype['TunnelOptions'] = undefined;

/**
 * @member {String} VpnConnectionId
 */
ModifyVpnTunnelOptionsRequest.prototype['VpnConnectionId'] = undefined;

/**
 * @member {String} VpnTunnelOutsideIpAddress
 */
ModifyVpnTunnelOptionsRequest.prototype['VpnTunnelOutsideIpAddress'] = undefined;






export default ModifyVpnTunnelOptionsRequest;

