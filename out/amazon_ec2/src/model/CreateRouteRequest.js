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
 * The CreateRouteRequest model module.
 * @module model/CreateRouteRequest
 * @version 1.0.0
 */
class CreateRouteRequest {
    /**
     * Constructs a new <code>CreateRouteRequest</code>.
     * @alias module:model/CreateRouteRequest
     * @param routeTableId {String} 
     */
    constructor(routeTableId) { 
        
        CreateRouteRequest.initialize(this, routeTableId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, routeTableId) { 
        obj['RouteTableId'] = routeTableId;
    }

    /**
     * Constructs a <code>CreateRouteRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateRouteRequest} obj Optional instance to populate.
     * @return {module:model/CreateRouteRequest} The populated <code>CreateRouteRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateRouteRequest();

            if (data.hasOwnProperty('DestinationCidrBlock')) {
                obj['DestinationCidrBlock'] = ApiClient.convertToType(data['DestinationCidrBlock'], 'String');
            }
            if (data.hasOwnProperty('DestinationIpv6CidrBlock')) {
                obj['DestinationIpv6CidrBlock'] = ApiClient.convertToType(data['DestinationIpv6CidrBlock'], 'String');
            }
            if (data.hasOwnProperty('DryRun')) {
                obj['DryRun'] = ApiClient.convertToType(data['DryRun'], 'Boolean');
            }
            if (data.hasOwnProperty('EgressOnlyInternetGatewayId')) {
                obj['EgressOnlyInternetGatewayId'] = ApiClient.convertToType(data['EgressOnlyInternetGatewayId'], 'String');
            }
            if (data.hasOwnProperty('GatewayId')) {
                obj['GatewayId'] = ApiClient.convertToType(data['GatewayId'], 'String');
            }
            if (data.hasOwnProperty('InstanceId')) {
                obj['InstanceId'] = ApiClient.convertToType(data['InstanceId'], 'String');
            }
            if (data.hasOwnProperty('LocalGatewayId')) {
                obj['LocalGatewayId'] = ApiClient.convertToType(data['LocalGatewayId'], 'String');
            }
            if (data.hasOwnProperty('NatGatewayId')) {
                obj['NatGatewayId'] = ApiClient.convertToType(data['NatGatewayId'], 'String');
            }
            if (data.hasOwnProperty('NetworkInterfaceId')) {
                obj['NetworkInterfaceId'] = ApiClient.convertToType(data['NetworkInterfaceId'], 'String');
            }
            if (data.hasOwnProperty('RouteTableId')) {
                obj['RouteTableId'] = ApiClient.convertToType(data['RouteTableId'], 'String');
            }
            if (data.hasOwnProperty('TransitGatewayId')) {
                obj['TransitGatewayId'] = ApiClient.convertToType(data['TransitGatewayId'], 'String');
            }
            if (data.hasOwnProperty('VpcPeeringConnectionId')) {
                obj['VpcPeeringConnectionId'] = ApiClient.convertToType(data['VpcPeeringConnectionId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} DestinationCidrBlock
 */
CreateRouteRequest.prototype['DestinationCidrBlock'] = undefined;

/**
 * @member {String} DestinationIpv6CidrBlock
 */
CreateRouteRequest.prototype['DestinationIpv6CidrBlock'] = undefined;

/**
 * @member {Boolean} DryRun
 */
CreateRouteRequest.prototype['DryRun'] = undefined;

/**
 * @member {String} EgressOnlyInternetGatewayId
 */
CreateRouteRequest.prototype['EgressOnlyInternetGatewayId'] = undefined;

/**
 * @member {String} GatewayId
 */
CreateRouteRequest.prototype['GatewayId'] = undefined;

/**
 * @member {String} InstanceId
 */
CreateRouteRequest.prototype['InstanceId'] = undefined;

/**
 * @member {String} LocalGatewayId
 */
CreateRouteRequest.prototype['LocalGatewayId'] = undefined;

/**
 * @member {String} NatGatewayId
 */
CreateRouteRequest.prototype['NatGatewayId'] = undefined;

/**
 * @member {String} NetworkInterfaceId
 */
CreateRouteRequest.prototype['NetworkInterfaceId'] = undefined;

/**
 * @member {String} RouteTableId
 */
CreateRouteRequest.prototype['RouteTableId'] = undefined;

/**
 * @member {String} TransitGatewayId
 */
CreateRouteRequest.prototype['TransitGatewayId'] = undefined;

/**
 * @member {String} VpcPeeringConnectionId
 */
CreateRouteRequest.prototype['VpcPeeringConnectionId'] = undefined;






export default CreateRouteRequest;

