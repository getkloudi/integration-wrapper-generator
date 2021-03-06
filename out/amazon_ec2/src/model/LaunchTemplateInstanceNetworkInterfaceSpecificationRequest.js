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
import InstanceIpv6AddressRequest from './InstanceIpv6AddressRequest';
import PrivateIpAddressSpecification from './PrivateIpAddressSpecification';

/**
 * The LaunchTemplateInstanceNetworkInterfaceSpecificationRequest model module.
 * @module model/LaunchTemplateInstanceNetworkInterfaceSpecificationRequest
 * @version 1.1.0
 */
class LaunchTemplateInstanceNetworkInterfaceSpecificationRequest {
    /**
     * Constructs a new <code>LaunchTemplateInstanceNetworkInterfaceSpecificationRequest</code>.
     * The parameters for a network interface.
     * @alias module:model/LaunchTemplateInstanceNetworkInterfaceSpecificationRequest
     */
    constructor() { 
        
        LaunchTemplateInstanceNetworkInterfaceSpecificationRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LaunchTemplateInstanceNetworkInterfaceSpecificationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LaunchTemplateInstanceNetworkInterfaceSpecificationRequest} obj Optional instance to populate.
     * @return {module:model/LaunchTemplateInstanceNetworkInterfaceSpecificationRequest} The populated <code>LaunchTemplateInstanceNetworkInterfaceSpecificationRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LaunchTemplateInstanceNetworkInterfaceSpecificationRequest();

            if (data.hasOwnProperty('AssociatePublicIpAddress')) {
                obj['AssociatePublicIpAddress'] = ApiClient.convertToType(data['AssociatePublicIpAddress'], 'Boolean');
            }
            if (data.hasOwnProperty('DeleteOnTermination')) {
                obj['DeleteOnTermination'] = ApiClient.convertToType(data['DeleteOnTermination'], 'Boolean');
            }
            if (data.hasOwnProperty('Description')) {
                obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
            }
            if (data.hasOwnProperty('DeviceIndex')) {
                obj['DeviceIndex'] = ApiClient.convertToType(data['DeviceIndex'], 'Number');
            }
            if (data.hasOwnProperty('Groups')) {
                obj['Groups'] = ApiClient.convertToType(data['Groups'], ['String']);
            }
            if (data.hasOwnProperty('InterfaceType')) {
                obj['InterfaceType'] = ApiClient.convertToType(data['InterfaceType'], 'String');
            }
            if (data.hasOwnProperty('Ipv6AddressCount')) {
                obj['Ipv6AddressCount'] = ApiClient.convertToType(data['Ipv6AddressCount'], 'Number');
            }
            if (data.hasOwnProperty('Ipv6Addresses')) {
                obj['Ipv6Addresses'] = ApiClient.convertToType(data['Ipv6Addresses'], [InstanceIpv6AddressRequest]);
            }
            if (data.hasOwnProperty('NetworkInterfaceId')) {
                obj['NetworkInterfaceId'] = ApiClient.convertToType(data['NetworkInterfaceId'], 'String');
            }
            if (data.hasOwnProperty('PrivateIpAddress')) {
                obj['PrivateIpAddress'] = ApiClient.convertToType(data['PrivateIpAddress'], 'String');
            }
            if (data.hasOwnProperty('PrivateIpAddresses')) {
                obj['PrivateIpAddresses'] = ApiClient.convertToType(data['PrivateIpAddresses'], [PrivateIpAddressSpecification]);
            }
            if (data.hasOwnProperty('SecondaryPrivateIpAddressCount')) {
                obj['SecondaryPrivateIpAddressCount'] = ApiClient.convertToType(data['SecondaryPrivateIpAddressCount'], 'Number');
            }
            if (data.hasOwnProperty('SubnetId')) {
                obj['SubnetId'] = ApiClient.convertToType(data['SubnetId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} AssociatePublicIpAddress
 */
LaunchTemplateInstanceNetworkInterfaceSpecificationRequest.prototype['AssociatePublicIpAddress'] = undefined;

/**
 * @member {Boolean} DeleteOnTermination
 */
LaunchTemplateInstanceNetworkInterfaceSpecificationRequest.prototype['DeleteOnTermination'] = undefined;

/**
 * @member {String} Description
 */
LaunchTemplateInstanceNetworkInterfaceSpecificationRequest.prototype['Description'] = undefined;

/**
 * @member {Number} DeviceIndex
 */
LaunchTemplateInstanceNetworkInterfaceSpecificationRequest.prototype['DeviceIndex'] = undefined;

/**
 * @member {Array.<String>} Groups
 */
LaunchTemplateInstanceNetworkInterfaceSpecificationRequest.prototype['Groups'] = undefined;

/**
 * @member {String} InterfaceType
 */
LaunchTemplateInstanceNetworkInterfaceSpecificationRequest.prototype['InterfaceType'] = undefined;

/**
 * @member {Number} Ipv6AddressCount
 */
LaunchTemplateInstanceNetworkInterfaceSpecificationRequest.prototype['Ipv6AddressCount'] = undefined;

/**
 * @member {Array.<module:model/InstanceIpv6AddressRequest>} Ipv6Addresses
 */
LaunchTemplateInstanceNetworkInterfaceSpecificationRequest.prototype['Ipv6Addresses'] = undefined;

/**
 * @member {String} NetworkInterfaceId
 */
LaunchTemplateInstanceNetworkInterfaceSpecificationRequest.prototype['NetworkInterfaceId'] = undefined;

/**
 * @member {String} PrivateIpAddress
 */
LaunchTemplateInstanceNetworkInterfaceSpecificationRequest.prototype['PrivateIpAddress'] = undefined;

/**
 * @member {Array.<module:model/PrivateIpAddressSpecification>} PrivateIpAddresses
 */
LaunchTemplateInstanceNetworkInterfaceSpecificationRequest.prototype['PrivateIpAddresses'] = undefined;

/**
 * @member {Number} SecondaryPrivateIpAddressCount
 */
LaunchTemplateInstanceNetworkInterfaceSpecificationRequest.prototype['SecondaryPrivateIpAddressCount'] = undefined;

/**
 * @member {String} SubnetId
 */
LaunchTemplateInstanceNetworkInterfaceSpecificationRequest.prototype['SubnetId'] = undefined;






export default LaunchTemplateInstanceNetworkInterfaceSpecificationRequest;

