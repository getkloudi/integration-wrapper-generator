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
import TransitGatewayOptions from './TransitGatewayOptions';
import TransitGatewayState from './TransitGatewayState';

/**
 * The TransitGateway model module.
 * @module model/TransitGateway
 * @version 1.0.0
 */
class TransitGateway {
    /**
     * Constructs a new <code>TransitGateway</code>.
     * Describes a transit gateway.
     * @alias module:model/TransitGateway
     */
    constructor() { 
        
        TransitGateway.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TransitGateway</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransitGateway} obj Optional instance to populate.
     * @return {module:model/TransitGateway} The populated <code>TransitGateway</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransitGateway();

            if (data.hasOwnProperty('CreationTime')) {
                obj['CreationTime'] = ApiClient.convertToType(data['CreationTime'], 'Date');
            }
            if (data.hasOwnProperty('Description')) {
                obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
            }
            if (data.hasOwnProperty('Options')) {
                obj['Options'] = TransitGatewayOptions.constructFromObject(data['Options']);
            }
            if (data.hasOwnProperty('OwnerId')) {
                obj['OwnerId'] = ApiClient.convertToType(data['OwnerId'], 'String');
            }
            if (data.hasOwnProperty('State')) {
                obj['State'] = TransitGatewayState.constructFromObject(data['State']);
            }
            if (data.hasOwnProperty('Tags')) {
                obj['Tags'] = ApiClient.convertToType(data['Tags'], [Tag]);
            }
            if (data.hasOwnProperty('TransitGatewayArn')) {
                obj['TransitGatewayArn'] = ApiClient.convertToType(data['TransitGatewayArn'], 'String');
            }
            if (data.hasOwnProperty('TransitGatewayId')) {
                obj['TransitGatewayId'] = ApiClient.convertToType(data['TransitGatewayId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Date} CreationTime
 */
TransitGateway.prototype['CreationTime'] = undefined;

/**
 * @member {String} Description
 */
TransitGateway.prototype['Description'] = undefined;

/**
 * @member {module:model/TransitGatewayOptions} Options
 */
TransitGateway.prototype['Options'] = undefined;

/**
 * @member {String} OwnerId
 */
TransitGateway.prototype['OwnerId'] = undefined;

/**
 * @member {module:model/TransitGatewayState} State
 */
TransitGateway.prototype['State'] = undefined;

/**
 * @member {Array.<module:model/Tag>} Tags
 */
TransitGateway.prototype['Tags'] = undefined;

/**
 * @member {String} TransitGatewayArn
 */
TransitGateway.prototype['TransitGatewayArn'] = undefined;

/**
 * @member {String} TransitGatewayId
 */
TransitGateway.prototype['TransitGatewayId'] = undefined;






export default TransitGateway;

