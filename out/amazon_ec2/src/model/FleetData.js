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
import DescribeFleetError from './DescribeFleetError';
import DescribeFleetsInstances from './DescribeFleetsInstances';
import FleetActivityStatus from './FleetActivityStatus';
import FleetExcessCapacityTerminationPolicy from './FleetExcessCapacityTerminationPolicy';
import FleetLaunchTemplateConfig from './FleetLaunchTemplateConfig';
import FleetStateCode from './FleetStateCode';
import FleetType from './FleetType';
import OnDemandOptions from './OnDemandOptions';
import SpotOptions from './SpotOptions';
import Tag from './Tag';
import TargetCapacitySpecification from './TargetCapacitySpecification';

/**
 * The FleetData model module.
 * @module model/FleetData
 * @version 1.1.0
 */
class FleetData {
    /**
     * Constructs a new <code>FleetData</code>.
     * Describes an EC2 Fleet.
     * @alias module:model/FleetData
     */
    constructor() { 
        
        FleetData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FleetData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FleetData} obj Optional instance to populate.
     * @return {module:model/FleetData} The populated <code>FleetData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FleetData();

            if (data.hasOwnProperty('ActivityStatus')) {
                obj['ActivityStatus'] = FleetActivityStatus.constructFromObject(data['ActivityStatus']);
            }
            if (data.hasOwnProperty('ClientToken')) {
                obj['ClientToken'] = ApiClient.convertToType(data['ClientToken'], 'String');
            }
            if (data.hasOwnProperty('CreateTime')) {
                obj['CreateTime'] = ApiClient.convertToType(data['CreateTime'], 'Date');
            }
            if (data.hasOwnProperty('Errors')) {
                obj['Errors'] = ApiClient.convertToType(data['Errors'], [DescribeFleetError]);
            }
            if (data.hasOwnProperty('ExcessCapacityTerminationPolicy')) {
                obj['ExcessCapacityTerminationPolicy'] = FleetExcessCapacityTerminationPolicy.constructFromObject(data['ExcessCapacityTerminationPolicy']);
            }
            if (data.hasOwnProperty('FleetId')) {
                obj['FleetId'] = ApiClient.convertToType(data['FleetId'], 'String');
            }
            if (data.hasOwnProperty('FleetState')) {
                obj['FleetState'] = FleetStateCode.constructFromObject(data['FleetState']);
            }
            if (data.hasOwnProperty('FulfilledCapacity')) {
                obj['FulfilledCapacity'] = ApiClient.convertToType(data['FulfilledCapacity'], 'Number');
            }
            if (data.hasOwnProperty('FulfilledOnDemandCapacity')) {
                obj['FulfilledOnDemandCapacity'] = ApiClient.convertToType(data['FulfilledOnDemandCapacity'], 'Number');
            }
            if (data.hasOwnProperty('Instances')) {
                obj['Instances'] = ApiClient.convertToType(data['Instances'], [DescribeFleetsInstances]);
            }
            if (data.hasOwnProperty('LaunchTemplateConfigs')) {
                obj['LaunchTemplateConfigs'] = ApiClient.convertToType(data['LaunchTemplateConfigs'], [FleetLaunchTemplateConfig]);
            }
            if (data.hasOwnProperty('OnDemandOptions')) {
                obj['OnDemandOptions'] = OnDemandOptions.constructFromObject(data['OnDemandOptions']);
            }
            if (data.hasOwnProperty('ReplaceUnhealthyInstances')) {
                obj['ReplaceUnhealthyInstances'] = ApiClient.convertToType(data['ReplaceUnhealthyInstances'], 'Boolean');
            }
            if (data.hasOwnProperty('SpotOptions')) {
                obj['SpotOptions'] = SpotOptions.constructFromObject(data['SpotOptions']);
            }
            if (data.hasOwnProperty('Tags')) {
                obj['Tags'] = ApiClient.convertToType(data['Tags'], [Tag]);
            }
            if (data.hasOwnProperty('TargetCapacitySpecification')) {
                obj['TargetCapacitySpecification'] = TargetCapacitySpecification.constructFromObject(data['TargetCapacitySpecification']);
            }
            if (data.hasOwnProperty('TerminateInstancesWithExpiration')) {
                obj['TerminateInstancesWithExpiration'] = ApiClient.convertToType(data['TerminateInstancesWithExpiration'], 'Boolean');
            }
            if (data.hasOwnProperty('Type')) {
                obj['Type'] = FleetType.constructFromObject(data['Type']);
            }
            if (data.hasOwnProperty('ValidFrom')) {
                obj['ValidFrom'] = ApiClient.convertToType(data['ValidFrom'], 'Date');
            }
            if (data.hasOwnProperty('ValidUntil')) {
                obj['ValidUntil'] = ApiClient.convertToType(data['ValidUntil'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/FleetActivityStatus} ActivityStatus
 */
FleetData.prototype['ActivityStatus'] = undefined;

/**
 * @member {String} ClientToken
 */
FleetData.prototype['ClientToken'] = undefined;

/**
 * @member {Date} CreateTime
 */
FleetData.prototype['CreateTime'] = undefined;

/**
 * @member {Array.<module:model/DescribeFleetError>} Errors
 */
FleetData.prototype['Errors'] = undefined;

/**
 * @member {module:model/FleetExcessCapacityTerminationPolicy} ExcessCapacityTerminationPolicy
 */
FleetData.prototype['ExcessCapacityTerminationPolicy'] = undefined;

/**
 * @member {String} FleetId
 */
FleetData.prototype['FleetId'] = undefined;

/**
 * @member {module:model/FleetStateCode} FleetState
 */
FleetData.prototype['FleetState'] = undefined;

/**
 * @member {Number} FulfilledCapacity
 */
FleetData.prototype['FulfilledCapacity'] = undefined;

/**
 * @member {Number} FulfilledOnDemandCapacity
 */
FleetData.prototype['FulfilledOnDemandCapacity'] = undefined;

/**
 * @member {Array.<module:model/DescribeFleetsInstances>} Instances
 */
FleetData.prototype['Instances'] = undefined;

/**
 * @member {Array.<module:model/FleetLaunchTemplateConfig>} LaunchTemplateConfigs
 */
FleetData.prototype['LaunchTemplateConfigs'] = undefined;

/**
 * @member {module:model/OnDemandOptions} OnDemandOptions
 */
FleetData.prototype['OnDemandOptions'] = undefined;

/**
 * @member {Boolean} ReplaceUnhealthyInstances
 */
FleetData.prototype['ReplaceUnhealthyInstances'] = undefined;

/**
 * @member {module:model/SpotOptions} SpotOptions
 */
FleetData.prototype['SpotOptions'] = undefined;

/**
 * @member {Array.<module:model/Tag>} Tags
 */
FleetData.prototype['Tags'] = undefined;

/**
 * @member {module:model/TargetCapacitySpecification} TargetCapacitySpecification
 */
FleetData.prototype['TargetCapacitySpecification'] = undefined;

/**
 * @member {Boolean} TerminateInstancesWithExpiration
 */
FleetData.prototype['TerminateInstancesWithExpiration'] = undefined;

/**
 * @member {module:model/FleetType} Type
 */
FleetData.prototype['Type'] = undefined;

/**
 * @member {Date} ValidFrom
 */
FleetData.prototype['ValidFrom'] = undefined;

/**
 * @member {Date} ValidUntil
 */
FleetData.prototype['ValidUntil'] = undefined;






export default FleetData;
