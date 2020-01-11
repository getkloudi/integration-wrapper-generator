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
import BlockDeviceMapping from './BlockDeviceMapping';
import IamInstanceProfileSpecification from './IamInstanceProfileSpecification';
import InstanceNetworkInterfaceSpecification from './InstanceNetworkInterfaceSpecification';
import InstanceType from './InstanceType';
import RunInstancesMonitoringEnabled from './RunInstancesMonitoringEnabled';
import SpotPlacement from './SpotPlacement';

/**
 * The RequestSpotLaunchSpecification model module.
 * @module model/RequestSpotLaunchSpecification
 * @version 1.1.0
 */
class RequestSpotLaunchSpecification {
    /**
     * Constructs a new <code>RequestSpotLaunchSpecification</code>.
     * Describes the launch specification for an instance.
     * @alias module:model/RequestSpotLaunchSpecification
     */
    constructor() { 
        
        RequestSpotLaunchSpecification.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RequestSpotLaunchSpecification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RequestSpotLaunchSpecification} obj Optional instance to populate.
     * @return {module:model/RequestSpotLaunchSpecification} The populated <code>RequestSpotLaunchSpecification</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RequestSpotLaunchSpecification();

            if (data.hasOwnProperty('AddressingType')) {
                obj['AddressingType'] = ApiClient.convertToType(data['AddressingType'], 'String');
            }
            if (data.hasOwnProperty('BlockDeviceMappings')) {
                obj['BlockDeviceMappings'] = ApiClient.convertToType(data['BlockDeviceMappings'], [BlockDeviceMapping]);
            }
            if (data.hasOwnProperty('EbsOptimized')) {
                obj['EbsOptimized'] = ApiClient.convertToType(data['EbsOptimized'], 'Boolean');
            }
            if (data.hasOwnProperty('IamInstanceProfile')) {
                obj['IamInstanceProfile'] = IamInstanceProfileSpecification.constructFromObject(data['IamInstanceProfile']);
            }
            if (data.hasOwnProperty('ImageId')) {
                obj['ImageId'] = ApiClient.convertToType(data['ImageId'], 'String');
            }
            if (data.hasOwnProperty('InstanceType')) {
                obj['InstanceType'] = InstanceType.constructFromObject(data['InstanceType']);
            }
            if (data.hasOwnProperty('KernelId')) {
                obj['KernelId'] = ApiClient.convertToType(data['KernelId'], 'String');
            }
            if (data.hasOwnProperty('KeyName')) {
                obj['KeyName'] = ApiClient.convertToType(data['KeyName'], 'String');
            }
            if (data.hasOwnProperty('Monitoring')) {
                obj['Monitoring'] = RunInstancesMonitoringEnabled.constructFromObject(data['Monitoring']);
            }
            if (data.hasOwnProperty('NetworkInterfaces')) {
                obj['NetworkInterfaces'] = ApiClient.convertToType(data['NetworkInterfaces'], [InstanceNetworkInterfaceSpecification]);
            }
            if (data.hasOwnProperty('Placement')) {
                obj['Placement'] = SpotPlacement.constructFromObject(data['Placement']);
            }
            if (data.hasOwnProperty('RamdiskId')) {
                obj['RamdiskId'] = ApiClient.convertToType(data['RamdiskId'], 'String');
            }
            if (data.hasOwnProperty('SecurityGroupIds')) {
                obj['SecurityGroupIds'] = ApiClient.convertToType(data['SecurityGroupIds'], ['String']);
            }
            if (data.hasOwnProperty('SecurityGroups')) {
                obj['SecurityGroups'] = ApiClient.convertToType(data['SecurityGroups'], ['String']);
            }
            if (data.hasOwnProperty('SubnetId')) {
                obj['SubnetId'] = ApiClient.convertToType(data['SubnetId'], 'String');
            }
            if (data.hasOwnProperty('UserData')) {
                obj['UserData'] = ApiClient.convertToType(data['UserData'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} AddressingType
 */
RequestSpotLaunchSpecification.prototype['AddressingType'] = undefined;

/**
 * @member {Array.<module:model/BlockDeviceMapping>} BlockDeviceMappings
 */
RequestSpotLaunchSpecification.prototype['BlockDeviceMappings'] = undefined;

/**
 * @member {Boolean} EbsOptimized
 */
RequestSpotLaunchSpecification.prototype['EbsOptimized'] = undefined;

/**
 * @member {module:model/IamInstanceProfileSpecification} IamInstanceProfile
 */
RequestSpotLaunchSpecification.prototype['IamInstanceProfile'] = undefined;

/**
 * @member {String} ImageId
 */
RequestSpotLaunchSpecification.prototype['ImageId'] = undefined;

/**
 * @member {module:model/InstanceType} InstanceType
 */
RequestSpotLaunchSpecification.prototype['InstanceType'] = undefined;

/**
 * @member {String} KernelId
 */
RequestSpotLaunchSpecification.prototype['KernelId'] = undefined;

/**
 * @member {String} KeyName
 */
RequestSpotLaunchSpecification.prototype['KeyName'] = undefined;

/**
 * @member {module:model/RunInstancesMonitoringEnabled} Monitoring
 */
RequestSpotLaunchSpecification.prototype['Monitoring'] = undefined;

/**
 * @member {Array.<module:model/InstanceNetworkInterfaceSpecification>} NetworkInterfaces
 */
RequestSpotLaunchSpecification.prototype['NetworkInterfaces'] = undefined;

/**
 * @member {module:model/SpotPlacement} Placement
 */
RequestSpotLaunchSpecification.prototype['Placement'] = undefined;

/**
 * @member {String} RamdiskId
 */
RequestSpotLaunchSpecification.prototype['RamdiskId'] = undefined;

/**
 * @member {Array.<String>} SecurityGroupIds
 */
RequestSpotLaunchSpecification.prototype['SecurityGroupIds'] = undefined;

/**
 * @member {Array.<String>} SecurityGroups
 */
RequestSpotLaunchSpecification.prototype['SecurityGroups'] = undefined;

/**
 * @member {String} SubnetId
 */
RequestSpotLaunchSpecification.prototype['SubnetId'] = undefined;

/**
 * @member {String} UserData
 */
RequestSpotLaunchSpecification.prototype['UserData'] = undefined;






export default RequestSpotLaunchSpecification;
