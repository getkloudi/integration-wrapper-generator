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
import CreateTransitGatewayVpcAttachmentRequestOptions from './CreateTransitGatewayVpcAttachmentRequestOptions';
import TagSpecification from './TagSpecification';

/**
 * The CreateTransitGatewayVpcAttachmentRequest model module.
 * @module model/CreateTransitGatewayVpcAttachmentRequest
 * @version 1.1.0
 */
class CreateTransitGatewayVpcAttachmentRequest {
    /**
     * Constructs a new <code>CreateTransitGatewayVpcAttachmentRequest</code>.
     * @alias module:model/CreateTransitGatewayVpcAttachmentRequest
     * @param subnetIds {Array.<String>} 
     * @param transitGatewayId {String} 
     * @param vpcId {String} 
     */
    constructor(subnetIds, transitGatewayId, vpcId) { 
        
        CreateTransitGatewayVpcAttachmentRequest.initialize(this, subnetIds, transitGatewayId, vpcId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, subnetIds, transitGatewayId, vpcId) { 
        obj['SubnetIds'] = subnetIds;
        obj['TransitGatewayId'] = transitGatewayId;
        obj['VpcId'] = vpcId;
    }

    /**
     * Constructs a <code>CreateTransitGatewayVpcAttachmentRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateTransitGatewayVpcAttachmentRequest} obj Optional instance to populate.
     * @return {module:model/CreateTransitGatewayVpcAttachmentRequest} The populated <code>CreateTransitGatewayVpcAttachmentRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateTransitGatewayVpcAttachmentRequest();

            if (data.hasOwnProperty('DryRun')) {
                obj['DryRun'] = ApiClient.convertToType(data['DryRun'], 'Boolean');
            }
            if (data.hasOwnProperty('Options')) {
                obj['Options'] = CreateTransitGatewayVpcAttachmentRequestOptions.constructFromObject(data['Options']);
            }
            if (data.hasOwnProperty('SubnetIds')) {
                obj['SubnetIds'] = ApiClient.convertToType(data['SubnetIds'], ['String']);
            }
            if (data.hasOwnProperty('TagSpecifications')) {
                obj['TagSpecifications'] = ApiClient.convertToType(data['TagSpecifications'], [TagSpecification]);
            }
            if (data.hasOwnProperty('TransitGatewayId')) {
                obj['TransitGatewayId'] = ApiClient.convertToType(data['TransitGatewayId'], 'String');
            }
            if (data.hasOwnProperty('VpcId')) {
                obj['VpcId'] = ApiClient.convertToType(data['VpcId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} DryRun
 */
CreateTransitGatewayVpcAttachmentRequest.prototype['DryRun'] = undefined;

/**
 * @member {module:model/CreateTransitGatewayVpcAttachmentRequestOptions} Options
 */
CreateTransitGatewayVpcAttachmentRequest.prototype['Options'] = undefined;

/**
 * @member {Array.<String>} SubnetIds
 */
CreateTransitGatewayVpcAttachmentRequest.prototype['SubnetIds'] = undefined;

/**
 * @member {Array.<module:model/TagSpecification>} TagSpecifications
 */
CreateTransitGatewayVpcAttachmentRequest.prototype['TagSpecifications'] = undefined;

/**
 * @member {String} TransitGatewayId
 */
CreateTransitGatewayVpcAttachmentRequest.prototype['TransitGatewayId'] = undefined;

/**
 * @member {String} VpcId
 */
CreateTransitGatewayVpcAttachmentRequest.prototype['VpcId'] = undefined;






export default CreateTransitGatewayVpcAttachmentRequest;
