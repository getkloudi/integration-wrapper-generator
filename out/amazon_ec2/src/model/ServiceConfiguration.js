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
import ServiceState from './ServiceState';
import ServiceTypeDetail from './ServiceTypeDetail';
import Tag from './Tag';

/**
 * The ServiceConfiguration model module.
 * @module model/ServiceConfiguration
 * @version 1.1.0
 */
class ServiceConfiguration {
    /**
     * Constructs a new <code>ServiceConfiguration</code>.
     * Describes a service configuration for a VPC endpoint service.
     * @alias module:model/ServiceConfiguration
     */
    constructor() { 
        
        ServiceConfiguration.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ServiceConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceConfiguration} obj Optional instance to populate.
     * @return {module:model/ServiceConfiguration} The populated <code>ServiceConfiguration</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServiceConfiguration();

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
            if (data.hasOwnProperty('NetworkLoadBalancerArns')) {
                obj['NetworkLoadBalancerArns'] = ApiClient.convertToType(data['NetworkLoadBalancerArns'], ['String']);
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
            if (data.hasOwnProperty('ServiceState')) {
                obj['ServiceState'] = ServiceState.constructFromObject(data['ServiceState']);
            }
            if (data.hasOwnProperty('ServiceType')) {
                obj['ServiceType'] = ApiClient.convertToType(data['ServiceType'], [ServiceTypeDetail]);
            }
            if (data.hasOwnProperty('Tags')) {
                obj['Tags'] = ApiClient.convertToType(data['Tags'], [Tag]);
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} AcceptanceRequired
 */
ServiceConfiguration.prototype['AcceptanceRequired'] = undefined;

/**
 * @member {Array.<String>} AvailabilityZones
 */
ServiceConfiguration.prototype['AvailabilityZones'] = undefined;

/**
 * @member {Array.<String>} BaseEndpointDnsNames
 */
ServiceConfiguration.prototype['BaseEndpointDnsNames'] = undefined;

/**
 * @member {Boolean} ManagesVpcEndpoints
 */
ServiceConfiguration.prototype['ManagesVpcEndpoints'] = undefined;

/**
 * @member {Array.<String>} NetworkLoadBalancerArns
 */
ServiceConfiguration.prototype['NetworkLoadBalancerArns'] = undefined;

/**
 * @member {String} PrivateDnsName
 */
ServiceConfiguration.prototype['PrivateDnsName'] = undefined;

/**
 * @member {String} ServiceId
 */
ServiceConfiguration.prototype['ServiceId'] = undefined;

/**
 * @member {String} ServiceName
 */
ServiceConfiguration.prototype['ServiceName'] = undefined;

/**
 * @member {module:model/ServiceState} ServiceState
 */
ServiceConfiguration.prototype['ServiceState'] = undefined;

/**
 * @member {Array.<module:model/ServiceTypeDetail>} ServiceType
 */
ServiceConfiguration.prototype['ServiceType'] = undefined;

/**
 * @member {Array.<module:model/Tag>} Tags
 */
ServiceConfiguration.prototype['Tags'] = undefined;






export default ServiceConfiguration;

