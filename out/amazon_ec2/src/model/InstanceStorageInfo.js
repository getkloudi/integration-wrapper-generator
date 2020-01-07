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
import DiskInfo from './DiskInfo';

/**
 * The InstanceStorageInfo model module.
 * @module model/InstanceStorageInfo
 * @version 1.1.0
 */
class InstanceStorageInfo {
    /**
     * Constructs a new <code>InstanceStorageInfo</code>.
     * Describes the disks that are available for the instance type.
     * @alias module:model/InstanceStorageInfo
     */
    constructor() { 
        
        InstanceStorageInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InstanceStorageInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InstanceStorageInfo} obj Optional instance to populate.
     * @return {module:model/InstanceStorageInfo} The populated <code>InstanceStorageInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InstanceStorageInfo();

            if (data.hasOwnProperty('Disks')) {
                obj['Disks'] = ApiClient.convertToType(data['Disks'], [DiskInfo]);
            }
            if (data.hasOwnProperty('TotalSizeInGB')) {
                obj['TotalSizeInGB'] = ApiClient.convertToType(data['TotalSizeInGB'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/DiskInfo>} Disks
 */
InstanceStorageInfo.prototype['Disks'] = undefined;

/**
 * @member {Number} TotalSizeInGB
 */
InstanceStorageInfo.prototype['TotalSizeInGB'] = undefined;






export default InstanceStorageInfo;

