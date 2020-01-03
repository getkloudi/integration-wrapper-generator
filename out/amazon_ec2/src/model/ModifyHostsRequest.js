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
import AutoPlacement from './AutoPlacement';
import HostRecovery from './HostRecovery';

/**
 * The ModifyHostsRequest model module.
 * @module model/ModifyHostsRequest
 * @version 1.0.0
 */
class ModifyHostsRequest {
    /**
     * Constructs a new <code>ModifyHostsRequest</code>.
     * @alias module:model/ModifyHostsRequest
     * @param hostIds {Array.<String>} 
     */
    constructor(hostIds) { 
        
        ModifyHostsRequest.initialize(this, hostIds);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, hostIds) { 
        obj['HostIds'] = hostIds;
    }

    /**
     * Constructs a <code>ModifyHostsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModifyHostsRequest} obj Optional instance to populate.
     * @return {module:model/ModifyHostsRequest} The populated <code>ModifyHostsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModifyHostsRequest();

            if (data.hasOwnProperty('AutoPlacement')) {
                obj['AutoPlacement'] = AutoPlacement.constructFromObject(data['AutoPlacement']);
            }
            if (data.hasOwnProperty('HostIds')) {
                obj['HostIds'] = ApiClient.convertToType(data['HostIds'], ['String']);
            }
            if (data.hasOwnProperty('HostRecovery')) {
                obj['HostRecovery'] = HostRecovery.constructFromObject(data['HostRecovery']);
            }
            if (data.hasOwnProperty('InstanceFamily')) {
                obj['InstanceFamily'] = ApiClient.convertToType(data['InstanceFamily'], 'String');
            }
            if (data.hasOwnProperty('InstanceType')) {
                obj['InstanceType'] = ApiClient.convertToType(data['InstanceType'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/AutoPlacement} AutoPlacement
 */
ModifyHostsRequest.prototype['AutoPlacement'] = undefined;

/**
 * @member {Array.<String>} HostIds
 */
ModifyHostsRequest.prototype['HostIds'] = undefined;

/**
 * @member {module:model/HostRecovery} HostRecovery
 */
ModifyHostsRequest.prototype['HostRecovery'] = undefined;

/**
 * @member {String} InstanceFamily
 */
ModifyHostsRequest.prototype['InstanceFamily'] = undefined;

/**
 * @member {String} InstanceType
 */
ModifyHostsRequest.prototype['InstanceType'] = undefined;






export default ModifyHostsRequest;

