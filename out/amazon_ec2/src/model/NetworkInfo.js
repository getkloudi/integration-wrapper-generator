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
import EnaSupport from './EnaSupport';

/**
 * The NetworkInfo model module.
 * @module model/NetworkInfo
 * @version 1.0.0
 */
class NetworkInfo {
    /**
     * Constructs a new <code>NetworkInfo</code>.
     * Describes the networking features of the instance type.
     * @alias module:model/NetworkInfo
     */
    constructor() { 
        
        NetworkInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NetworkInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NetworkInfo} obj Optional instance to populate.
     * @return {module:model/NetworkInfo} The populated <code>NetworkInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetworkInfo();

            if (data.hasOwnProperty('EnaSupport')) {
                obj['EnaSupport'] = EnaSupport.constructFromObject(data['EnaSupport']);
            }
            if (data.hasOwnProperty('Ipv4AddressesPerInterface')) {
                obj['Ipv4AddressesPerInterface'] = ApiClient.convertToType(data['Ipv4AddressesPerInterface'], 'Number');
            }
            if (data.hasOwnProperty('Ipv6AddressesPerInterface')) {
                obj['Ipv6AddressesPerInterface'] = ApiClient.convertToType(data['Ipv6AddressesPerInterface'], 'Number');
            }
            if (data.hasOwnProperty('Ipv6Supported')) {
                obj['Ipv6Supported'] = ApiClient.convertToType(data['Ipv6Supported'], 'Boolean');
            }
            if (data.hasOwnProperty('MaximumNetworkInterfaces')) {
                obj['MaximumNetworkInterfaces'] = ApiClient.convertToType(data['MaximumNetworkInterfaces'], 'Number');
            }
            if (data.hasOwnProperty('NetworkPerformance')) {
                obj['NetworkPerformance'] = ApiClient.convertToType(data['NetworkPerformance'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/EnaSupport} EnaSupport
 */
NetworkInfo.prototype['EnaSupport'] = undefined;

/**
 * @member {Number} Ipv4AddressesPerInterface
 */
NetworkInfo.prototype['Ipv4AddressesPerInterface'] = undefined;

/**
 * @member {Number} Ipv6AddressesPerInterface
 */
NetworkInfo.prototype['Ipv6AddressesPerInterface'] = undefined;

/**
 * @member {Boolean} Ipv6Supported
 */
NetworkInfo.prototype['Ipv6Supported'] = undefined;

/**
 * @member {Number} MaximumNetworkInterfaces
 */
NetworkInfo.prototype['MaximumNetworkInterfaces'] = undefined;

/**
 * @member {String} NetworkPerformance
 */
NetworkInfo.prototype['NetworkPerformance'] = undefined;






export default NetworkInfo;

