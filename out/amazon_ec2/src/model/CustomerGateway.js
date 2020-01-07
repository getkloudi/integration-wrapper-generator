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
import Tag from './Tag';

/**
 * The CustomerGateway model module.
 * @module model/CustomerGateway
 * @version 1.1.0
 */
class CustomerGateway {
    /**
     * Constructs a new <code>CustomerGateway</code>.
     * Describes a customer gateway.
     * @alias module:model/CustomerGateway
     */
    constructor() { 
        
        CustomerGateway.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomerGateway</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomerGateway} obj Optional instance to populate.
     * @return {module:model/CustomerGateway} The populated <code>CustomerGateway</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomerGateway();

            if (data.hasOwnProperty('BgpAsn')) {
                obj['BgpAsn'] = ApiClient.convertToType(data['BgpAsn'], 'String');
            }
            if (data.hasOwnProperty('CertificateArn')) {
                obj['CertificateArn'] = ApiClient.convertToType(data['CertificateArn'], 'String');
            }
            if (data.hasOwnProperty('CustomerGatewayId')) {
                obj['CustomerGatewayId'] = ApiClient.convertToType(data['CustomerGatewayId'], 'String');
            }
            if (data.hasOwnProperty('DeviceName')) {
                obj['DeviceName'] = ApiClient.convertToType(data['DeviceName'], 'String');
            }
            if (data.hasOwnProperty('IpAddress')) {
                obj['IpAddress'] = ApiClient.convertToType(data['IpAddress'], 'String');
            }
            if (data.hasOwnProperty('State')) {
                obj['State'] = ApiClient.convertToType(data['State'], 'String');
            }
            if (data.hasOwnProperty('Tags')) {
                obj['Tags'] = ApiClient.convertToType(data['Tags'], [Tag]);
            }
            if (data.hasOwnProperty('Type')) {
                obj['Type'] = ApiClient.convertToType(data['Type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} BgpAsn
 */
CustomerGateway.prototype['BgpAsn'] = undefined;

/**
 * @member {String} CertificateArn
 */
CustomerGateway.prototype['CertificateArn'] = undefined;

/**
 * @member {String} CustomerGatewayId
 */
CustomerGateway.prototype['CustomerGatewayId'] = undefined;

/**
 * @member {String} DeviceName
 */
CustomerGateway.prototype['DeviceName'] = undefined;

/**
 * @member {String} IpAddress
 */
CustomerGateway.prototype['IpAddress'] = undefined;

/**
 * @member {String} State
 */
CustomerGateway.prototype['State'] = undefined;

/**
 * @member {Array.<module:model/Tag>} Tags
 */
CustomerGateway.prototype['Tags'] = undefined;

/**
 * @member {String} Type
 */
CustomerGateway.prototype['Type'] = undefined;






export default CustomerGateway;

