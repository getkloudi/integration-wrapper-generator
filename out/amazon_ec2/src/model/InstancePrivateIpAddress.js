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
import InstanceNetworkInterfaceAssociation from './InstanceNetworkInterfaceAssociation';

/**
 * The InstancePrivateIpAddress model module.
 * @module model/InstancePrivateIpAddress
 * @version 1.1.0
 */
class InstancePrivateIpAddress {
    /**
     * Constructs a new <code>InstancePrivateIpAddress</code>.
     * Describes a private IPv4 address.
     * @alias module:model/InstancePrivateIpAddress
     */
    constructor() { 
        
        InstancePrivateIpAddress.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InstancePrivateIpAddress</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InstancePrivateIpAddress} obj Optional instance to populate.
     * @return {module:model/InstancePrivateIpAddress} The populated <code>InstancePrivateIpAddress</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InstancePrivateIpAddress();

            if (data.hasOwnProperty('Association')) {
                obj['Association'] = InstanceNetworkInterfaceAssociation.constructFromObject(data['Association']);
            }
            if (data.hasOwnProperty('Primary')) {
                obj['Primary'] = ApiClient.convertToType(data['Primary'], 'Boolean');
            }
            if (data.hasOwnProperty('PrivateDnsName')) {
                obj['PrivateDnsName'] = ApiClient.convertToType(data['PrivateDnsName'], 'String');
            }
            if (data.hasOwnProperty('PrivateIpAddress')) {
                obj['PrivateIpAddress'] = ApiClient.convertToType(data['PrivateIpAddress'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InstanceNetworkInterfaceAssociation} Association
 */
InstancePrivateIpAddress.prototype['Association'] = undefined;

/**
 * @member {Boolean} Primary
 */
InstancePrivateIpAddress.prototype['Primary'] = undefined;

/**
 * @member {String} PrivateDnsName
 */
InstancePrivateIpAddress.prototype['PrivateDnsName'] = undefined;

/**
 * @member {String} PrivateIpAddress
 */
InstancePrivateIpAddress.prototype['PrivateIpAddress'] = undefined;






export default InstancePrivateIpAddress;

