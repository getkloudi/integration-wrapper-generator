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
import ServiceTypeDetail from './ServiceTypeDetail';
import Tag from './Tag';

/**
 * The ServiceDetail model module.
 * @module model/ServiceDetail
 * @version 1.1.0
 */
class ServiceDetail {
    /**
     * Constructs a new <code>ServiceDetail</code>.
     * Describes a VPC endpoint service.
     * @alias module:model/ServiceDetail
     */
    constructor() { 
        
        ServiceDetail.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ServiceDetail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceDetail} obj Optional instance to populate.
     * @return {module:model/ServiceDetail} The populated <code>ServiceDetail</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServiceDetail();

            if (data.hasOwnProperty('AcceptanceRequired')) {
                obj['AcceptanceRequired'] = ApiClient.convertToType(data['AcceptanceRequired'], 'Boolean');
            }
            if (data.hasOwnProperty('AvailabilityZones')) {
                obj['AvailabilityZones'] = ApiClient.convertToType(data['AvailabilityZones'], ['String']);
            }
            if (data.hasOwnProperty('BaseEndpointDnsNames')) {
                obj['BaseEndpointDnsNames'] = ApiClient.convertToType(data['BaseEndpointDnsNames'], ['String']);
            }
            if (data.hasOwnProperty('ManagesVpcEndpoints')) {
                obj['ManagesVpcEndpoints'] = ApiClient.convertToType(data['ManagesVpcEndpoints'], 'Boolean');
            }
            if (data.hasOwnProperty('Owner')) {
                obj['Owner'] = ApiClient.convertToType(data['Owner'], 'String');
            }
            if (data.hasOwnProperty('PrivateDnsName')) {
                obj['PrivateDnsName'] = ApiClient.convertToType(data['PrivateDnsName'], 'String');
            }
            if (data.hasOwnProperty('ServiceId')) {
                obj['ServiceId'] = ApiClient.convertToType(data['ServiceId'], 'String');
            }
            if (data.hasOwnProperty('ServiceName')) {
                obj['ServiceName'] = ApiClient.convertToType(data['ServiceName'], 'String');
            }
            if (data.hasOwnProperty('ServiceType')) {
                obj['ServiceType'] = ApiClient.convertToType(data['ServiceType'], [ServiceTypeDetail]);
            }
            if (data.hasOwnProperty('Tags')) {
                obj['Tags'] = ApiClient.convertToType(data['Tags'], [Tag]);
            }
            if (data.hasOwnProperty('VpcEndpointPolicySupported')) {
                obj['VpcEndpointPolicySupported'] = ApiClient.convertToType(data['VpcEndpointPolicySupported'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} AcceptanceRequired
 */
ServiceDetail.prototype['AcceptanceRequired'] = undefined;

/**
 * @member {Array.<String>} AvailabilityZones
 */
ServiceDetail.prototype['AvailabilityZones'] = undefined;

/**
 * @member {Array.<String>} BaseEndpointDnsNames
 */
ServiceDetail.prototype['BaseEndpointDnsNames'] = undefined;

/**
 * @member {Boolean} ManagesVpcEndpoints
 */
ServiceDetail.prototype['ManagesVpcEndpoints'] = undefined;

/**
 * @member {String} Owner
 */
ServiceDetail.prototype['Owner'] = undefined;

/**
 * @member {String} PrivateDnsName
 */
ServiceDetail.prototype['PrivateDnsName'] = undefined;

/**
 * @member {String} ServiceId
 */
ServiceDetail.prototype['ServiceId'] = undefined;

/**
 * @member {String} ServiceName
 */
ServiceDetail.prototype['ServiceName'] = undefined;

/**
 * @member {Array.<module:model/ServiceTypeDetail>} ServiceType
 */
ServiceDetail.prototype['ServiceType'] = undefined;

/**
 * @member {Array.<module:model/Tag>} Tags
 */
ServiceDetail.prototype['Tags'] = undefined;

/**
 * @member {Boolean} VpcEndpointPolicySupported
 */
ServiceDetail.prototype['VpcEndpointPolicySupported'] = undefined;






export default ServiceDetail;

