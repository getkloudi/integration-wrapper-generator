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
import ClassicLoadBalancersConfig from './ClassicLoadBalancersConfig';
import TargetGroupsConfig from './TargetGroupsConfig';

/**
 * The LoadBalancersConfig model module.
 * @module model/LoadBalancersConfig
 * @version 1.0.0
 */
class LoadBalancersConfig {
    /**
     * Constructs a new <code>LoadBalancersConfig</code>.
     * Describes the Classic Load Balancers and target groups to attach to a Spot Fleet request.
     * @alias module:model/LoadBalancersConfig
     */
    constructor() { 
        
        LoadBalancersConfig.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoadBalancersConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoadBalancersConfig} obj Optional instance to populate.
     * @return {module:model/LoadBalancersConfig} The populated <code>LoadBalancersConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoadBalancersConfig();

            if (data.hasOwnProperty('ClassicLoadBalancersConfig')) {
                obj['ClassicLoadBalancersConfig'] = ClassicLoadBalancersConfig.constructFromObject(data['ClassicLoadBalancersConfig']);
            }
            if (data.hasOwnProperty('TargetGroupsConfig')) {
                obj['TargetGroupsConfig'] = TargetGroupsConfig.constructFromObject(data['TargetGroupsConfig']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ClassicLoadBalancersConfig} ClassicLoadBalancersConfig
 */
LoadBalancersConfig.prototype['ClassicLoadBalancersConfig'] = undefined;

/**
 * @member {module:model/TargetGroupsConfig} TargetGroupsConfig
 */
LoadBalancersConfig.prototype['TargetGroupsConfig'] = undefined;






export default LoadBalancersConfig;

