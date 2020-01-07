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
 * The PublicIpv4PoolRange model module.
 * @module model/PublicIpv4PoolRange
 * @version 1.1.0
 */
class PublicIpv4PoolRange {
    /**
     * Constructs a new <code>PublicIpv4PoolRange</code>.
     * Describes an address range of an IPv4 address pool.
     * @alias module:model/PublicIpv4PoolRange
     */
    constructor() { 
        
        PublicIpv4PoolRange.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PublicIpv4PoolRange</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PublicIpv4PoolRange} obj Optional instance to populate.
     * @return {module:model/PublicIpv4PoolRange} The populated <code>PublicIpv4PoolRange</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PublicIpv4PoolRange();

            if (data.hasOwnProperty('AddressCount')) {
                obj['AddressCount'] = ApiClient.convertToType(data['AddressCount'], 'Number');
            }
            if (data.hasOwnProperty('AvailableAddressCount')) {
                obj['AvailableAddressCount'] = ApiClient.convertToType(data['AvailableAddressCount'], 'Number');
            }
            if (data.hasOwnProperty('FirstAddress')) {
                obj['FirstAddress'] = ApiClient.convertToType(data['FirstAddress'], 'String');
            }
            if (data.hasOwnProperty('LastAddress')) {
                obj['LastAddress'] = ApiClient.convertToType(data['LastAddress'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} AddressCount
 */
PublicIpv4PoolRange.prototype['AddressCount'] = undefined;

/**
 * @member {Number} AvailableAddressCount
 */
PublicIpv4PoolRange.prototype['AvailableAddressCount'] = undefined;

/**
 * @member {String} FirstAddress
 */
PublicIpv4PoolRange.prototype['FirstAddress'] = undefined;

/**
 * @member {String} LastAddress
 */
PublicIpv4PoolRange.prototype['LastAddress'] = undefined;






export default PublicIpv4PoolRange;

