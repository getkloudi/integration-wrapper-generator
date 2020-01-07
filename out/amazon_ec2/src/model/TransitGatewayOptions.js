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
import AutoAcceptSharedAttachmentsValue from './AutoAcceptSharedAttachmentsValue';
import DefaultRouteTableAssociationValue from './DefaultRouteTableAssociationValue';
import DefaultRouteTablePropagationValue from './DefaultRouteTablePropagationValue';
import DnsSupportValue from './DnsSupportValue';
import MulticastSupportValue from './MulticastSupportValue';
import VpnEcmpSupportValue from './VpnEcmpSupportValue';

/**
 * The TransitGatewayOptions model module.
 * @module model/TransitGatewayOptions
 * @version 1.1.0
 */
class TransitGatewayOptions {
    /**
     * Constructs a new <code>TransitGatewayOptions</code>.
     * Describes the options for a transit gateway.
     * @alias module:model/TransitGatewayOptions
     */
    constructor() { 
        
        TransitGatewayOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TransitGatewayOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransitGatewayOptions} obj Optional instance to populate.
     * @return {module:model/TransitGatewayOptions} The populated <code>TransitGatewayOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransitGatewayOptions();

            if (data.hasOwnProperty('AmazonSideAsn')) {
                obj['AmazonSideAsn'] = ApiClient.convertToType(data['AmazonSideAsn'], 'Number');
            }
            if (data.hasOwnProperty('AssociationDefaultRouteTableId')) {
                obj['AssociationDefaultRouteTableId'] = ApiClient.convertToType(data['AssociationDefaultRouteTableId'], 'String');
            }
            if (data.hasOwnProperty('AutoAcceptSharedAttachments')) {
                obj['AutoAcceptSharedAttachments'] = AutoAcceptSharedAttachmentsValue.constructFromObject(data['AutoAcceptSharedAttachments']);
            }
            if (data.hasOwnProperty('DefaultRouteTableAssociation')) {
                obj['DefaultRouteTableAssociation'] = DefaultRouteTableAssociationValue.constructFromObject(data['DefaultRouteTableAssociation']);
            }
            if (data.hasOwnProperty('DefaultRouteTablePropagation')) {
                obj['DefaultRouteTablePropagation'] = DefaultRouteTablePropagationValue.constructFromObject(data['DefaultRouteTablePropagation']);
            }
            if (data.hasOwnProperty('DnsSupport')) {
                obj['DnsSupport'] = DnsSupportValue.constructFromObject(data['DnsSupport']);
            }
            if (data.hasOwnProperty('MulticastSupport')) {
                obj['MulticastSupport'] = MulticastSupportValue.constructFromObject(data['MulticastSupport']);
            }
            if (data.hasOwnProperty('PropagationDefaultRouteTableId')) {
                obj['PropagationDefaultRouteTableId'] = ApiClient.convertToType(data['PropagationDefaultRouteTableId'], 'String');
            }
            if (data.hasOwnProperty('VpnEcmpSupport')) {
                obj['VpnEcmpSupport'] = VpnEcmpSupportValue.constructFromObject(data['VpnEcmpSupport']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} AmazonSideAsn
 */
TransitGatewayOptions.prototype['AmazonSideAsn'] = undefined;

/**
 * @member {String} AssociationDefaultRouteTableId
 */
TransitGatewayOptions.prototype['AssociationDefaultRouteTableId'] = undefined;

/**
 * @member {module:model/AutoAcceptSharedAttachmentsValue} AutoAcceptSharedAttachments
 */
TransitGatewayOptions.prototype['AutoAcceptSharedAttachments'] = undefined;

/**
 * @member {module:model/DefaultRouteTableAssociationValue} DefaultRouteTableAssociation
 */
TransitGatewayOptions.prototype['DefaultRouteTableAssociation'] = undefined;

/**
 * @member {module:model/DefaultRouteTablePropagationValue} DefaultRouteTablePropagation
 */
TransitGatewayOptions.prototype['DefaultRouteTablePropagation'] = undefined;

/**
 * @member {module:model/DnsSupportValue} DnsSupport
 */
TransitGatewayOptions.prototype['DnsSupport'] = undefined;

/**
 * @member {module:model/MulticastSupportValue} MulticastSupport
 */
TransitGatewayOptions.prototype['MulticastSupport'] = undefined;

/**
 * @member {String} PropagationDefaultRouteTableId
 */
TransitGatewayOptions.prototype['PropagationDefaultRouteTableId'] = undefined;

/**
 * @member {module:model/VpnEcmpSupportValue} VpnEcmpSupport
 */
TransitGatewayOptions.prototype['VpnEcmpSupport'] = undefined;






export default TransitGatewayOptions;

