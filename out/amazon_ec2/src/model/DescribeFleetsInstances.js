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
import InstanceLifecycle from './InstanceLifecycle';
import InstanceType from './InstanceType';
import LaunchTemplateAndOverridesResponse from './LaunchTemplateAndOverridesResponse';
import PlatformValues from './PlatformValues';

/**
 * The DescribeFleetsInstances model module.
 * @module model/DescribeFleetsInstances
 * @version 1.0.0
 */
class DescribeFleetsInstances {
    /**
     * Constructs a new <code>DescribeFleetsInstances</code>.
     * Describes the instances that were launched by the fleet.
     * @alias module:model/DescribeFleetsInstances
     */
    constructor() { 
        
        DescribeFleetsInstances.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DescribeFleetsInstances</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeFleetsInstances} obj Optional instance to populate.
     * @return {module:model/DescribeFleetsInstances} The populated <code>DescribeFleetsInstances</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DescribeFleetsInstances();

            if (data.hasOwnProperty('InstanceIds')) {
                obj['InstanceIds'] = ApiClient.convertToType(data['InstanceIds'], ['String']);
            }
            if (data.hasOwnProperty('InstanceType')) {
                obj['InstanceType'] = InstanceType.constructFromObject(data['InstanceType']);
            }
            if (data.hasOwnProperty('LaunchTemplateAndOverrides')) {
                obj['LaunchTemplateAndOverrides'] = LaunchTemplateAndOverridesResponse.constructFromObject(data['LaunchTemplateAndOverrides']);
            }
            if (data.hasOwnProperty('Lifecycle')) {
                obj['Lifecycle'] = InstanceLifecycle.constructFromObject(data['Lifecycle']);
            }
            if (data.hasOwnProperty('Platform')) {
                obj['Platform'] = PlatformValues.constructFromObject(data['Platform']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} InstanceIds
 */
DescribeFleetsInstances.prototype['InstanceIds'] = undefined;

/**
 * @member {module:model/InstanceType} InstanceType
 */
DescribeFleetsInstances.prototype['InstanceType'] = undefined;

/**
 * @member {module:model/LaunchTemplateAndOverridesResponse} LaunchTemplateAndOverrides
 */
DescribeFleetsInstances.prototype['LaunchTemplateAndOverrides'] = undefined;

/**
 * @member {module:model/InstanceLifecycle} Lifecycle
 */
DescribeFleetsInstances.prototype['Lifecycle'] = undefined;

/**
 * @member {module:model/PlatformValues} Platform
 */
DescribeFleetsInstances.prototype['Platform'] = undefined;






export default DescribeFleetsInstances;

