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
import IcmpTypeCode from './IcmpTypeCode';
import PortRange from './PortRange';
import RuleAction from './RuleAction';

/**
 * The NetworkAclEntry model module.
 * @module model/NetworkAclEntry
 * @version 1.1.0
 */
class NetworkAclEntry {
    /**
     * Constructs a new <code>NetworkAclEntry</code>.
     * Describes an entry in a network ACL.
     * @alias module:model/NetworkAclEntry
     */
    constructor() { 
        
        NetworkAclEntry.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NetworkAclEntry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NetworkAclEntry} obj Optional instance to populate.
     * @return {module:model/NetworkAclEntry} The populated <code>NetworkAclEntry</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetworkAclEntry();

            if (data.hasOwnProperty('CidrBlock')) {
                obj['CidrBlock'] = ApiClient.convertToType(data['CidrBlock'], 'String');
            }
            if (data.hasOwnProperty('Egress')) {
                obj['Egress'] = ApiClient.convertToType(data['Egress'], 'Boolean');
            }
            if (data.hasOwnProperty('IcmpTypeCode')) {
                obj['IcmpTypeCode'] = IcmpTypeCode.constructFromObject(data['IcmpTypeCode']);
            }
            if (data.hasOwnProperty('Ipv6CidrBlock')) {
                obj['Ipv6CidrBlock'] = ApiClient.convertToType(data['Ipv6CidrBlock'], 'String');
            }
            if (data.hasOwnProperty('PortRange')) {
                obj['PortRange'] = PortRange.constructFromObject(data['PortRange']);
            }
            if (data.hasOwnProperty('Protocol')) {
                obj['Protocol'] = ApiClient.convertToType(data['Protocol'], 'String');
            }
            if (data.hasOwnProperty('RuleAction')) {
                obj['RuleAction'] = RuleAction.constructFromObject(data['RuleAction']);
            }
            if (data.hasOwnProperty('RuleNumber')) {
                obj['RuleNumber'] = ApiClient.convertToType(data['RuleNumber'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} CidrBlock
 */
NetworkAclEntry.prototype['CidrBlock'] = undefined;

/**
 * @member {Boolean} Egress
 */
NetworkAclEntry.prototype['Egress'] = undefined;

/**
 * @member {module:model/IcmpTypeCode} IcmpTypeCode
 */
NetworkAclEntry.prototype['IcmpTypeCode'] = undefined;

/**
 * @member {String} Ipv6CidrBlock
 */
NetworkAclEntry.prototype['Ipv6CidrBlock'] = undefined;

/**
 * @member {module:model/PortRange} PortRange
 */
NetworkAclEntry.prototype['PortRange'] = undefined;

/**
 * @member {String} Protocol
 */
NetworkAclEntry.prototype['Protocol'] = undefined;

/**
 * @member {module:model/RuleAction} RuleAction
 */
NetworkAclEntry.prototype['RuleAction'] = undefined;

/**
 * @member {Number} RuleNumber
 */
NetworkAclEntry.prototype['RuleNumber'] = undefined;






export default NetworkAclEntry;

