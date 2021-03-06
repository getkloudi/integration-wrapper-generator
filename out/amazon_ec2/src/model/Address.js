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
import DomainType from './DomainType';
import Tag from './Tag';

/**
 * The Address model module.
 * @module model/Address
 * @version 1.1.0
 */
class Address {
    /**
     * Constructs a new <code>Address</code>.
     * Describes an Elastic IP address.
     * @alias module:model/Address
     */
    constructor() { 
        
        Address.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Address</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Address} obj Optional instance to populate.
     * @return {module:model/Address} The populated <code>Address</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Address();

            if (data.hasOwnProperty('AllocationId')) {
                obj['AllocationId'] = ApiClient.convertToType(data['AllocationId'], 'String');
            }
            if (data.hasOwnProperty('AssociationId')) {
                obj['AssociationId'] = ApiClient.convertToType(data['AssociationId'], 'String');
            }
            if (data.hasOwnProperty('CustomerOwnedIp')) {
                obj['CustomerOwnedIp'] = ApiClient.convertToType(data['CustomerOwnedIp'], 'String');
            }
            if (data.hasOwnProperty('CustomerOwnedIpv4Pool')) {
                obj['CustomerOwnedIpv4Pool'] = ApiClient.convertToType(data['CustomerOwnedIpv4Pool'], 'String');
            }
            if (data.hasOwnProperty('Domain')) {
                obj['Domain'] = DomainType.constructFromObject(data['Domain']);
            }
            if (data.hasOwnProperty('InstanceId')) {
                obj['InstanceId'] = ApiClient.convertToType(data['InstanceId'], 'String');
            }
            if (data.hasOwnProperty('NetworkBorderGroup')) {
                obj['NetworkBorderGroup'] = ApiClient.convertToType(data['NetworkBorderGroup'], 'String');
            }
            if (data.hasOwnProperty('NetworkInterfaceId')) {
                obj['NetworkInterfaceId'] = ApiClient.convertToType(data['NetworkInterfaceId'], 'String');
            }
            if (data.hasOwnProperty('NetworkInterfaceOwnerId')) {
                obj['NetworkInterfaceOwnerId'] = ApiClient.convertToType(data['NetworkInterfaceOwnerId'], 'String');
            }
            if (data.hasOwnProperty('PrivateIpAddress')) {
                obj['PrivateIpAddress'] = ApiClient.convertToType(data['PrivateIpAddress'], 'String');
            }
            if (data.hasOwnProperty('PublicIp')) {
                obj['PublicIp'] = ApiClient.convertToType(data['PublicIp'], 'String');
            }
            if (data.hasOwnProperty('PublicIpv4Pool')) {
                obj['PublicIpv4Pool'] = ApiClient.convertToType(data['PublicIpv4Pool'], 'String');
            }
            if (data.hasOwnProperty('Tags')) {
                obj['Tags'] = ApiClient.convertToType(data['Tags'], [Tag]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} AllocationId
 */
Address.prototype['AllocationId'] = undefined;

/**
 * @member {String} AssociationId
 */
Address.prototype['AssociationId'] = undefined;

/**
 * @member {String} CustomerOwnedIp
 */
Address.prototype['CustomerOwnedIp'] = undefined;

/**
 * @member {String} CustomerOwnedIpv4Pool
 */
Address.prototype['CustomerOwnedIpv4Pool'] = undefined;

/**
 * @member {module:model/DomainType} Domain
 */
Address.prototype['Domain'] = undefined;

/**
 * @member {String} InstanceId
 */
Address.prototype['InstanceId'] = undefined;

/**
 * @member {String} NetworkBorderGroup
 */
Address.prototype['NetworkBorderGroup'] = undefined;

/**
 * @member {String} NetworkInterfaceId
 */
Address.prototype['NetworkInterfaceId'] = undefined;

/**
 * @member {String} NetworkInterfaceOwnerId
 */
Address.prototype['NetworkInterfaceOwnerId'] = undefined;

/**
 * @member {String} PrivateIpAddress
 */
Address.prototype['PrivateIpAddress'] = undefined;

/**
 * @member {String} PublicIp
 */
Address.prototype['PublicIp'] = undefined;

/**
 * @member {String} PublicIpv4Pool
 */
Address.prototype['PublicIpv4Pool'] = undefined;

/**
 * @member {Array.<module:model/Tag>} Tags
 */
Address.prototype['Tags'] = undefined;






export default Address;

