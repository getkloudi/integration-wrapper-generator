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
import VpcCidrBlockState from './VpcCidrBlockState';

/**
 * The VpcCidrBlockAssociation model module.
 * @module model/VpcCidrBlockAssociation
 * @version 1.1.0
 */
class VpcCidrBlockAssociation {
    /**
     * Constructs a new <code>VpcCidrBlockAssociation</code>.
     * Describes an IPv4 CIDR block associated with a VPC.
     * @alias module:model/VpcCidrBlockAssociation
     */
    constructor() { 
        
        VpcCidrBlockAssociation.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VpcCidrBlockAssociation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VpcCidrBlockAssociation} obj Optional instance to populate.
     * @return {module:model/VpcCidrBlockAssociation} The populated <code>VpcCidrBlockAssociation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VpcCidrBlockAssociation();

            if (data.hasOwnProperty('AssociationId')) {
                obj['AssociationId'] = ApiClient.convertToType(data['AssociationId'], 'String');
            }
            if (data.hasOwnProperty('CidrBlock')) {
                obj['CidrBlock'] = ApiClient.convertToType(data['CidrBlock'], 'String');
            }
            if (data.hasOwnProperty('CidrBlockState')) {
                obj['CidrBlockState'] = VpcCidrBlockState.constructFromObject(data['CidrBlockState']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} AssociationId
 */
VpcCidrBlockAssociation.prototype['AssociationId'] = undefined;

/**
 * @member {String} CidrBlock
 */
VpcCidrBlockAssociation.prototype['CidrBlock'] = undefined;

/**
 * @member {module:model/VpcCidrBlockState} CidrBlockState
 */
VpcCidrBlockAssociation.prototype['CidrBlockState'] = undefined;






export default VpcCidrBlockAssociation;

