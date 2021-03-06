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
 * The CreateVpcEndpointServiceConfigurationRequest model module.
 * @module model/CreateVpcEndpointServiceConfigurationRequest
 * @version 1.1.0
 */
class CreateVpcEndpointServiceConfigurationRequest {
    /**
     * Constructs a new <code>CreateVpcEndpointServiceConfigurationRequest</code>.
     * @alias module:model/CreateVpcEndpointServiceConfigurationRequest
     * @param networkLoadBalancerArns {Array.<String>} 
     */
    constructor(networkLoadBalancerArns) { 
        
        CreateVpcEndpointServiceConfigurationRequest.initialize(this, networkLoadBalancerArns);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, networkLoadBalancerArns) { 
        obj['NetworkLoadBalancerArns'] = networkLoadBalancerArns;
    }

    /**
     * Constructs a <code>CreateVpcEndpointServiceConfigurationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateVpcEndpointServiceConfigurationRequest} obj Optional instance to populate.
     * @return {module:model/CreateVpcEndpointServiceConfigurationRequest} The populated <code>CreateVpcEndpointServiceConfigurationRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateVpcEndpointServiceConfigurationRequest();

            if (data.hasOwnProperty('AcceptanceRequired')) {
                obj['AcceptanceRequired'] = ApiClient.convertToType(data['AcceptanceRequired'], 'Boolean');
            }
            if (data.hasOwnProperty('ClientToken')) {
                obj['ClientToken'] = ApiClient.convertToType(data['ClientToken'], 'String');
            }
            if (data.hasOwnProperty('DryRun')) {
                obj['DryRun'] = ApiClient.convertToType(data['DryRun'], 'Boolean');
            }
            if (data.hasOwnProperty('NetworkLoadBalancerArns')) {
                obj['NetworkLoadBalancerArns'] = ApiClient.convertToType(data['NetworkLoadBalancerArns'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} AcceptanceRequired
 */
CreateVpcEndpointServiceConfigurationRequest.prototype['AcceptanceRequired'] = undefined;

/**
 * @member {String} ClientToken
 */
CreateVpcEndpointServiceConfigurationRequest.prototype['ClientToken'] = undefined;

/**
 * @member {Boolean} DryRun
 */
CreateVpcEndpointServiceConfigurationRequest.prototype['DryRun'] = undefined;

/**
 * @member {Array.<String>} NetworkLoadBalancerArns
 */
CreateVpcEndpointServiceConfigurationRequest.prototype['NetworkLoadBalancerArns'] = undefined;






export default CreateVpcEndpointServiceConfigurationRequest;

