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
import PlacementGroupState from './PlacementGroupState';
import PlacementStrategy from './PlacementStrategy';
import Tag from './Tag';

/**
 * The PlacementGroup model module.
 * @module model/PlacementGroup
 * @version 1.1.0
 */
class PlacementGroup {
    /**
     * Constructs a new <code>PlacementGroup</code>.
     * Describes a placement group.
     * @alias module:model/PlacementGroup
     */
    constructor() { 
        
        PlacementGroup.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PlacementGroup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PlacementGroup} obj Optional instance to populate.
     * @return {module:model/PlacementGroup} The populated <code>PlacementGroup</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PlacementGroup();

            if (data.hasOwnProperty('GroupId')) {
                obj['GroupId'] = ApiClient.convertToType(data['GroupId'], 'String');
            }
            if (data.hasOwnProperty('GroupName')) {
                obj['GroupName'] = ApiClient.convertToType(data['GroupName'], 'String');
            }
            if (data.hasOwnProperty('PartitionCount')) {
                obj['PartitionCount'] = ApiClient.convertToType(data['PartitionCount'], 'Number');
            }
            if (data.hasOwnProperty('State')) {
                obj['State'] = PlacementGroupState.constructFromObject(data['State']);
            }
            if (data.hasOwnProperty('Strategy')) {
                obj['Strategy'] = PlacementStrategy.constructFromObject(data['Strategy']);
            }
            if (data.hasOwnProperty('Tags')) {
                obj['Tags'] = ApiClient.convertToType(data['Tags'], [Tag]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} GroupId
 */
PlacementGroup.prototype['GroupId'] = undefined;

/**
 * @member {String} GroupName
 */
PlacementGroup.prototype['GroupName'] = undefined;

/**
 * @member {Number} PartitionCount
 */
PlacementGroup.prototype['PartitionCount'] = undefined;

/**
 * @member {module:model/PlacementGroupState} State
 */
PlacementGroup.prototype['State'] = undefined;

/**
 * @member {module:model/PlacementStrategy} Strategy
 */
PlacementGroup.prototype['Strategy'] = undefined;

/**
 * @member {Array.<module:model/Tag>} Tags
 */
PlacementGroup.prototype['Tags'] = undefined;






export default PlacementGroup;
