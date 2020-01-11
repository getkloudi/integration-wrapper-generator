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
import FleetExcessCapacityTerminationPolicy from './FleetExcessCapacityTerminationPolicy';
import FleetLaunchTemplateConfigRequest from './FleetLaunchTemplateConfigRequest';
import FleetType from './FleetType';
import OnDemandOptionsRequest from './OnDemandOptionsRequest';
import SpotOptionsRequest from './SpotOptionsRequest';
import TagSpecification from './TagSpecification';
import TargetCapacitySpecificationRequest from './TargetCapacitySpecificationRequest';

/**
 * The CreateFleetRequest model module.
 * @module model/CreateFleetRequest
 * @version 1.1.0
 */
class CreateFleetRequest {
    /**
     * Constructs a new <code>CreateFleetRequest</code>.
     * @alias module:model/CreateFleetRequest
     * @param launchTemplateConfigs {Array.<module:model/FleetLaunchTemplateConfigRequest>} 
     * @param targetCapacitySpecification {module:model/TargetCapacitySpecificationRequest} 
     */
    constructor(launchTemplateConfigs, targetCapacitySpecification) { 
        
        CreateFleetRequest.initialize(this, launchTemplateConfigs, targetCapacitySpecification);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, launchTemplateConfigs, targetCapacitySpecification) { 
        obj['LaunchTemplateConfigs'] = launchTemplateConfigs;
        obj['TargetCapacitySpecification'] = targetCapacitySpecification;
    }

    /**
     * Constructs a <code>CreateFleetRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateFleetRequest} obj Optional instance to populate.
     * @return {module:model/CreateFleetRequest} The populated <code>CreateFleetRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateFleetRequest();

            if (data.hasOwnProperty('ClientToken')) {
                obj['ClientToken'] = ApiClient.convertToType(data['ClientToken'], 'String');
            }
            if (data.hasOwnProperty('DryRun')) {
                obj['DryRun'] = ApiClient.convertToType(data['DryRun'], 'Boolean');
            }
            if (data.hasOwnProperty('ExcessCapacityTerminationPolicy')) {
                obj['ExcessCapacityTerminationPolicy'] = FleetExcessCapacityTerminationPolicy.constructFromObject(data['ExcessCapacityTerminationPolicy']);
            }
            if (data.hasOwnProperty('LaunchTemplateConfigs')) {
                obj['LaunchTemplateConfigs'] = ApiClient.convertToType(data['LaunchTemplateConfigs'], [FleetLaunchTemplateConfigRequest]);
            }
            if (data.hasOwnProperty('OnDemandOptions')) {
                obj['OnDemandOptions'] = OnDemandOptionsRequest.constructFromObject(data['OnDemandOptions']);
            }
            if (data.hasOwnProperty('ReplaceUnhealthyInstances')) {
                obj['ReplaceUnhealthyInstances'] = ApiClient.convertToType(data['ReplaceUnhealthyInstances'], 'Boolean');
            }
            if (data.hasOwnProperty('SpotOptions')) {
                obj['SpotOptions'] = SpotOptionsRequest.constructFromObject(data['SpotOptions']);
            }
            if (data.hasOwnProperty('TagSpecifications')) {
                obj['TagSpecifications'] = ApiClient.convertToType(data['TagSpecifications'], [TagSpecification]);
            }
            if (data.hasOwnProperty('TargetCapacitySpecification')) {
                obj['TargetCapacitySpecification'] = TargetCapacitySpecificationRequest.constructFromObject(data['TargetCapacitySpecification']);
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
 * @member {String} ClientToken
 */
CreateFleetRequest.prototype['ClientToken'] = undefined;

/**
 * @member {Boolean} DryRun
 */
CreateFleetRequest.prototype['DryRun'] = undefined;

/**
 * @member {module:model/FleetExcessCapacityTerminationPolicy} ExcessCapacityTerminationPolicy
 */
CreateFleetRequest.prototype['ExcessCapacityTerminationPolicy'] = undefined;

/**
 * @member {Array.<module:model/FleetLaunchTemplateConfigRequest>} LaunchTemplateConfigs
 */
CreateFleetRequest.prototype['LaunchTemplateConfigs'] = undefined;

/**
 * @member {module:model/OnDemandOptionsRequest} OnDemandOptions
 */
CreateFleetRequest.prototype['OnDemandOptions'] = undefined;

/**
 * @member {Boolean} ReplaceUnhealthyInstances
 */
CreateFleetRequest.prototype['ReplaceUnhealthyInstances'] = undefined;

/**
 * @member {module:model/SpotOptionsRequest} SpotOptions
 */
CreateFleetRequest.prototype['SpotOptions'] = undefined;

/**
 * @member {Array.<module:model/TagSpecification>} TagSpecifications
 */
CreateFleetRequest.prototype['TagSpecifications'] = undefined;

/**
 * @member {module:model/TargetCapacitySpecificationRequest} TargetCapacitySpecification
 */
CreateFleetRequest.prototype['TargetCapacitySpecification'] = undefined;

/**
 * @member {Boolean} TerminateInstancesWithExpiration
 */
CreateFleetRequest.prototype['TerminateInstancesWithExpiration'] = undefined;

/**
 * @member {module:model/FleetType} Type
 */
CreateFleetRequest.prototype['Type'] = undefined;

/**
 * @member {Date} ValidFrom
 */
CreateFleetRequest.prototype['ValidFrom'] = undefined;

/**
 * @member {Date} ValidUntil
 */
CreateFleetRequest.prototype['ValidUntil'] = undefined;






export default CreateFleetRequest;
