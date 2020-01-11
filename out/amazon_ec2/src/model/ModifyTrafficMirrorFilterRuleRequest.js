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
import TrafficDirection from './TrafficDirection';
import TrafficMirrorFilterRuleField from './TrafficMirrorFilterRuleField';
import TrafficMirrorPortRangeRequest from './TrafficMirrorPortRangeRequest';
import TrafficMirrorRuleAction from './TrafficMirrorRuleAction';

/**
 * The ModifyTrafficMirrorFilterRuleRequest model module.
 * @module model/ModifyTrafficMirrorFilterRuleRequest
 * @version 1.1.0
 */
class ModifyTrafficMirrorFilterRuleRequest {
    /**
     * Constructs a new <code>ModifyTrafficMirrorFilterRuleRequest</code>.
     * @alias module:model/ModifyTrafficMirrorFilterRuleRequest
     * @param trafficMirrorFilterRuleId {String} 
     */
    constructor(trafficMirrorFilterRuleId) { 
        
        ModifyTrafficMirrorFilterRuleRequest.initialize(this, trafficMirrorFilterRuleId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, trafficMirrorFilterRuleId) { 
        obj['TrafficMirrorFilterRuleId'] = trafficMirrorFilterRuleId;
    }

    /**
     * Constructs a <code>ModifyTrafficMirrorFilterRuleRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModifyTrafficMirrorFilterRuleRequest} obj Optional instance to populate.
     * @return {module:model/ModifyTrafficMirrorFilterRuleRequest} The populated <code>ModifyTrafficMirrorFilterRuleRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModifyTrafficMirrorFilterRuleRequest();

            if (data.hasOwnProperty('Description')) {
                obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
            }
            if (data.hasOwnProperty('DestinationCidrBlock')) {
                obj['DestinationCidrBlock'] = ApiClient.convertToType(data['DestinationCidrBlock'], 'String');
            }
            if (data.hasOwnProperty('DestinationPortRange')) {
                obj['DestinationPortRange'] = TrafficMirrorPortRangeRequest.constructFromObject(data['DestinationPortRange']);
            }
            if (data.hasOwnProperty('DryRun')) {
                obj['DryRun'] = ApiClient.convertToType(data['DryRun'], 'Boolean');
            }
            if (data.hasOwnProperty('Protocol')) {
                obj['Protocol'] = ApiClient.convertToType(data['Protocol'], 'Number');
            }
            if (data.hasOwnProperty('RemoveFields')) {
                obj['RemoveFields'] = ApiClient.convertToType(data['RemoveFields'], [TrafficMirrorFilterRuleField]);
            }
            if (data.hasOwnProperty('RuleAction')) {
                obj['RuleAction'] = TrafficMirrorRuleAction.constructFromObject(data['RuleAction']);
            }
            if (data.hasOwnProperty('RuleNumber')) {
                obj['RuleNumber'] = ApiClient.convertToType(data['RuleNumber'], 'Number');
            }
            if (data.hasOwnProperty('SourceCidrBlock')) {
                obj['SourceCidrBlock'] = ApiClient.convertToType(data['SourceCidrBlock'], 'String');
            }
            if (data.hasOwnProperty('SourcePortRange')) {
                obj['SourcePortRange'] = TrafficMirrorPortRangeRequest.constructFromObject(data['SourcePortRange']);
            }
            if (data.hasOwnProperty('TrafficDirection')) {
                obj['TrafficDirection'] = TrafficDirection.constructFromObject(data['TrafficDirection']);
            }
            if (data.hasOwnProperty('TrafficMirrorFilterRuleId')) {
                obj['TrafficMirrorFilterRuleId'] = ApiClient.convertToType(data['TrafficMirrorFilterRuleId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} Description
 */
ModifyTrafficMirrorFilterRuleRequest.prototype['Description'] = undefined;

/**
 * @member {String} DestinationCidrBlock
 */
ModifyTrafficMirrorFilterRuleRequest.prototype['DestinationCidrBlock'] = undefined;

/**
 * @member {module:model/TrafficMirrorPortRangeRequest} DestinationPortRange
 */
ModifyTrafficMirrorFilterRuleRequest.prototype['DestinationPortRange'] = undefined;

/**
 * @member {Boolean} DryRun
 */
ModifyTrafficMirrorFilterRuleRequest.prototype['DryRun'] = undefined;

/**
 * @member {Number} Protocol
 */
ModifyTrafficMirrorFilterRuleRequest.prototype['Protocol'] = undefined;

/**
 * @member {Array.<module:model/TrafficMirrorFilterRuleField>} RemoveFields
 */
ModifyTrafficMirrorFilterRuleRequest.prototype['RemoveFields'] = undefined;

/**
 * @member {module:model/TrafficMirrorRuleAction} RuleAction
 */
ModifyTrafficMirrorFilterRuleRequest.prototype['RuleAction'] = undefined;

/**
 * @member {Number} RuleNumber
 */
ModifyTrafficMirrorFilterRuleRequest.prototype['RuleNumber'] = undefined;

/**
 * @member {String} SourceCidrBlock
 */
ModifyTrafficMirrorFilterRuleRequest.prototype['SourceCidrBlock'] = undefined;

/**
 * @member {module:model/TrafficMirrorPortRangeRequest} SourcePortRange
 */
ModifyTrafficMirrorFilterRuleRequest.prototype['SourcePortRange'] = undefined;

/**
 * @member {module:model/TrafficDirection} TrafficDirection
 */
ModifyTrafficMirrorFilterRuleRequest.prototype['TrafficDirection'] = undefined;

/**
 * @member {String} TrafficMirrorFilterRuleId
 */
ModifyTrafficMirrorFilterRuleRequest.prototype['TrafficMirrorFilterRuleId'] = undefined;






export default ModifyTrafficMirrorFilterRuleRequest;
