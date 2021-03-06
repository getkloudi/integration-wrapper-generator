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
import SubnetIpv6CidrBlockAssociation from './SubnetIpv6CidrBlockAssociation';
import SubnetState from './SubnetState';
import Tag from './Tag';

/**
 * The Subnet model module.
 * @module model/Subnet
 * @version 1.1.0
 */
class Subnet {
    /**
     * Constructs a new <code>Subnet</code>.
     * Describes a subnet.
     * @alias module:model/Subnet
     */
    constructor() { 
        
        Subnet.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Subnet</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Subnet} obj Optional instance to populate.
     * @return {module:model/Subnet} The populated <code>Subnet</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Subnet();

            if (data.hasOwnProperty('AssignIpv6AddressOnCreation')) {
                obj['AssignIpv6AddressOnCreation'] = ApiClient.convertToType(data['AssignIpv6AddressOnCreation'], 'Boolean');
            }
            if (data.hasOwnProperty('AvailabilityZone')) {
                obj['AvailabilityZone'] = ApiClient.convertToType(data['AvailabilityZone'], 'String');
            }
            if (data.hasOwnProperty('AvailabilityZoneId')) {
                obj['AvailabilityZoneId'] = ApiClient.convertToType(data['AvailabilityZoneId'], 'String');
            }
            if (data.hasOwnProperty('AvailableIpAddressCount')) {
                obj['AvailableIpAddressCount'] = ApiClient.convertToType(data['AvailableIpAddressCount'], 'Number');
            }
            if (data.hasOwnProperty('CidrBlock')) {
                obj['CidrBlock'] = ApiClient.convertToType(data['CidrBlock'], 'String');
            }
            if (data.hasOwnProperty('DefaultForAz')) {
                obj['DefaultForAz'] = ApiClient.convertToType(data['DefaultForAz'], 'Boolean');
            }
            if (data.hasOwnProperty('Ipv6CidrBlockAssociationSet')) {
                obj['Ipv6CidrBlockAssociationSet'] = ApiClient.convertToType(data['Ipv6CidrBlockAssociationSet'], [SubnetIpv6CidrBlockAssociation]);
            }
            if (data.hasOwnProperty('MapPublicIpOnLaunch')) {
                obj['MapPublicIpOnLaunch'] = ApiClient.convertToType(data['MapPublicIpOnLaunch'], 'Boolean');
            }
            if (data.hasOwnProperty('OutpostArn')) {
                obj['OutpostArn'] = ApiClient.convertToType(data['OutpostArn'], 'String');
            }
            if (data.hasOwnProperty('OwnerId')) {
                obj['OwnerId'] = ApiClient.convertToType(data['OwnerId'], 'String');
            }
            if (data.hasOwnProperty('State')) {
                obj['State'] = SubnetState.constructFromObject(data['State']);
            }
            if (data.hasOwnProperty('SubnetArn')) {
                obj['SubnetArn'] = ApiClient.convertToType(data['SubnetArn'], 'String');
            }
            if (data.hasOwnProperty('SubnetId')) {
                obj['SubnetId'] = ApiClient.convertToType(data['SubnetId'], 'String');
            }
            if (data.hasOwnProperty('Tags')) {
                obj['Tags'] = ApiClient.convertToType(data['Tags'], [Tag]);
            }
            if (data.hasOwnProperty('VpcId')) {
                obj['VpcId'] = ApiClient.convertToType(data['VpcId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} AssignIpv6AddressOnCreation
 */
Subnet.prototype['AssignIpv6AddressOnCreation'] = undefined;

/**
 * @member {String} AvailabilityZone
 */
Subnet.prototype['AvailabilityZone'] = undefined;

/**
 * @member {String} AvailabilityZoneId
 */
Subnet.prototype['AvailabilityZoneId'] = undefined;

/**
 * @member {Number} AvailableIpAddressCount
 */
Subnet.prototype['AvailableIpAddressCount'] = undefined;

/**
 * @member {String} CidrBlock
 */
Subnet.prototype['CidrBlock'] = undefined;

/**
 * @member {Boolean} DefaultForAz
 */
Subnet.prototype['DefaultForAz'] = undefined;

/**
 * @member {Array.<module:model/SubnetIpv6CidrBlockAssociation>} Ipv6CidrBlockAssociationSet
 */
Subnet.prototype['Ipv6CidrBlockAssociationSet'] = undefined;

/**
 * @member {Boolean} MapPublicIpOnLaunch
 */
Subnet.prototype['MapPublicIpOnLaunch'] = undefined;

/**
 * @member {String} OutpostArn
 */
Subnet.prototype['OutpostArn'] = undefined;

/**
 * @member {String} OwnerId
 */
Subnet.prototype['OwnerId'] = undefined;

/**
 * @member {module:model/SubnetState} State
 */
Subnet.prototype['State'] = undefined;

/**
 * @member {String} SubnetArn
 */
Subnet.prototype['SubnetArn'] = undefined;

/**
 * @member {String} SubnetId
 */
Subnet.prototype['SubnetId'] = undefined;

/**
 * @member {Array.<module:model/Tag>} Tags
 */
Subnet.prototype['Tags'] = undefined;

/**
 * @member {String} VpcId
 */
Subnet.prototype['VpcId'] = undefined;






export default Subnet;

