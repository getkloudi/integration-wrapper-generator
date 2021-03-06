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
import BundleTaskError from './BundleTaskError';
import BundleTaskState from './BundleTaskState';
import Storage from './Storage';

/**
 * The BundleTask model module.
 * @module model/BundleTask
 * @version 1.1.0
 */
class BundleTask {
    /**
     * Constructs a new <code>BundleTask</code>.
     * Describes a bundle task.
     * @alias module:model/BundleTask
     */
    constructor() { 
        
        BundleTask.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BundleTask</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BundleTask} obj Optional instance to populate.
     * @return {module:model/BundleTask} The populated <code>BundleTask</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BundleTask();

            if (data.hasOwnProperty('BundleId')) {
                obj['BundleId'] = ApiClient.convertToType(data['BundleId'], 'String');
            }
            if (data.hasOwnProperty('BundleTaskError')) {
                obj['BundleTaskError'] = BundleTaskError.constructFromObject(data['BundleTaskError']);
            }
            if (data.hasOwnProperty('InstanceId')) {
                obj['InstanceId'] = ApiClient.convertToType(data['InstanceId'], 'String');
            }
            if (data.hasOwnProperty('Progress')) {
                obj['Progress'] = ApiClient.convertToType(data['Progress'], 'String');
            }
            if (data.hasOwnProperty('StartTime')) {
                obj['StartTime'] = ApiClient.convertToType(data['StartTime'], 'Date');
            }
            if (data.hasOwnProperty('State')) {
                obj['State'] = BundleTaskState.constructFromObject(data['State']);
            }
            if (data.hasOwnProperty('Storage')) {
                obj['Storage'] = Storage.constructFromObject(data['Storage']);
            }
            if (data.hasOwnProperty('UpdateTime')) {
                obj['UpdateTime'] = ApiClient.convertToType(data['UpdateTime'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {String} BundleId
 */
BundleTask.prototype['BundleId'] = undefined;

/**
 * @member {module:model/BundleTaskError} BundleTaskError
 */
BundleTask.prototype['BundleTaskError'] = undefined;

/**
 * @member {String} InstanceId
 */
BundleTask.prototype['InstanceId'] = undefined;

/**
 * @member {String} Progress
 */
BundleTask.prototype['Progress'] = undefined;

/**
 * @member {Date} StartTime
 */
BundleTask.prototype['StartTime'] = undefined;

/**
 * @member {module:model/BundleTaskState} State
 */
BundleTask.prototype['State'] = undefined;

/**
 * @member {module:model/Storage} Storage
 */
BundleTask.prototype['Storage'] = undefined;

/**
 * @member {Date} UpdateTime
 */
BundleTask.prototype['UpdateTime'] = undefined;






export default BundleTask;

