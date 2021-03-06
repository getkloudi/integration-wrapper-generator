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
import InstanceInterruptionBehavior from './InstanceInterruptionBehavior';
import RequestSpotLaunchSpecification from './RequestSpotLaunchSpecification';
import SpotInstanceType from './SpotInstanceType';

/**
 * The RequestSpotInstancesRequest model module.
 * @module model/RequestSpotInstancesRequest
 * @version 1.1.0
 */
class RequestSpotInstancesRequest {
    /**
     * Constructs a new <code>RequestSpotInstancesRequest</code>.
     * Contains the parameters for RequestSpotInstances.
     * @alias module:model/RequestSpotInstancesRequest
     */
    constructor() { 
        
        RequestSpotInstancesRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RequestSpotInstancesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RequestSpotInstancesRequest} obj Optional instance to populate.
     * @return {module:model/RequestSpotInstancesRequest} The populated <code>RequestSpotInstancesRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RequestSpotInstancesRequest();

            if (data.hasOwnProperty('AvailabilityZoneGroup')) {
                obj['AvailabilityZoneGroup'] = ApiClient.convertToType(data['AvailabilityZoneGroup'], 'String');
            }
            if (data.hasOwnProperty('BlockDurationMinutes')) {
                obj['BlockDurationMinutes'] = ApiClient.convertToType(data['BlockDurationMinutes'], 'Number');
            }
            if (data.hasOwnProperty('ClientToken')) {
                obj['ClientToken'] = ApiClient.convertToType(data['ClientToken'], 'String');
            }
            if (data.hasOwnProperty('DryRun')) {
                obj['DryRun'] = ApiClient.convertToType(data['DryRun'], 'Boolean');
            }
            if (data.hasOwnProperty('InstanceCount')) {
                obj['InstanceCount'] = ApiClient.convertToType(data['InstanceCount'], 'Number');
            }
            if (data.hasOwnProperty('InstanceInterruptionBehavior')) {
                obj['InstanceInterruptionBehavior'] = InstanceInterruptionBehavior.constructFromObject(data['InstanceInterruptionBehavior']);
            }
            if (data.hasOwnProperty('LaunchGroup')) {
                obj['LaunchGroup'] = ApiClient.convertToType(data['LaunchGroup'], 'String');
            }
            if (data.hasOwnProperty('LaunchSpecification')) {
                obj['LaunchSpecification'] = RequestSpotLaunchSpecification.constructFromObject(data['LaunchSpecification']);
            }
            if (data.hasOwnProperty('SpotPrice')) {
                obj['SpotPrice'] = ApiClient.convertToType(data['SpotPrice'], 'String');
            }
            if (data.hasOwnProperty('Type')) {
                obj['Type'] = SpotInstanceType.constructFromObject(data['Type']);
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
 * @member {String} AvailabilityZoneGroup
 */
RequestSpotInstancesRequest.prototype['AvailabilityZoneGroup'] = undefined;

/**
 * @member {Number} BlockDurationMinutes
 */
RequestSpotInstancesRequest.prototype['BlockDurationMinutes'] = undefined;

/**
 * @member {String} ClientToken
 */
RequestSpotInstancesRequest.prototype['ClientToken'] = undefined;

/**
 * @member {Boolean} DryRun
 */
RequestSpotInstancesRequest.prototype['DryRun'] = undefined;

/**
 * @member {Number} InstanceCount
 */
RequestSpotInstancesRequest.prototype['InstanceCount'] = undefined;

/**
 * @member {module:model/InstanceInterruptionBehavior} InstanceInterruptionBehavior
 */
RequestSpotInstancesRequest.prototype['InstanceInterruptionBehavior'] = undefined;

/**
 * @member {String} LaunchGroup
 */
RequestSpotInstancesRequest.prototype['LaunchGroup'] = undefined;

/**
 * @member {module:model/RequestSpotLaunchSpecification} LaunchSpecification
 */
RequestSpotInstancesRequest.prototype['LaunchSpecification'] = undefined;

/**
 * @member {String} SpotPrice
 */
RequestSpotInstancesRequest.prototype['SpotPrice'] = undefined;

/**
 * @member {module:model/SpotInstanceType} Type
 */
RequestSpotInstancesRequest.prototype['Type'] = undefined;

/**
 * @member {Date} ValidFrom
 */
RequestSpotInstancesRequest.prototype['ValidFrom'] = undefined;

/**
 * @member {Date} ValidUntil
 */
RequestSpotInstancesRequest.prototype['ValidUntil'] = undefined;






export default RequestSpotInstancesRequest;

