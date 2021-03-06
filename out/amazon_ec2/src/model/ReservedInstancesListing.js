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
import InstanceCount from './InstanceCount';
import ListingStatus from './ListingStatus';
import PriceSchedule from './PriceSchedule';
import Tag from './Tag';

/**
 * The ReservedInstancesListing model module.
 * @module model/ReservedInstancesListing
 * @version 1.1.0
 */
class ReservedInstancesListing {
    /**
     * Constructs a new <code>ReservedInstancesListing</code>.
     * Describes a Reserved Instance listing.
     * @alias module:model/ReservedInstancesListing
     */
    constructor() { 
        
        ReservedInstancesListing.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReservedInstancesListing</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReservedInstancesListing} obj Optional instance to populate.
     * @return {module:model/ReservedInstancesListing} The populated <code>ReservedInstancesListing</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReservedInstancesListing();

            if (data.hasOwnProperty('ClientToken')) {
                obj['ClientToken'] = ApiClient.convertToType(data['ClientToken'], 'String');
            }
            if (data.hasOwnProperty('CreateDate')) {
                obj['CreateDate'] = ApiClient.convertToType(data['CreateDate'], 'Date');
            }
            if (data.hasOwnProperty('InstanceCounts')) {
                obj['InstanceCounts'] = ApiClient.convertToType(data['InstanceCounts'], [InstanceCount]);
            }
            if (data.hasOwnProperty('PriceSchedules')) {
                obj['PriceSchedules'] = ApiClient.convertToType(data['PriceSchedules'], [PriceSchedule]);
            }
            if (data.hasOwnProperty('ReservedInstancesId')) {
                obj['ReservedInstancesId'] = ApiClient.convertToType(data['ReservedInstancesId'], 'String');
            }
            if (data.hasOwnProperty('ReservedInstancesListingId')) {
                obj['ReservedInstancesListingId'] = ApiClient.convertToType(data['ReservedInstancesListingId'], 'String');
            }
            if (data.hasOwnProperty('Status')) {
                obj['Status'] = ListingStatus.constructFromObject(data['Status']);
            }
            if (data.hasOwnProperty('StatusMessage')) {
                obj['StatusMessage'] = ApiClient.convertToType(data['StatusMessage'], 'String');
            }
            if (data.hasOwnProperty('Tags')) {
                obj['Tags'] = ApiClient.convertToType(data['Tags'], [Tag]);
            }
            if (data.hasOwnProperty('UpdateDate')) {
                obj['UpdateDate'] = ApiClient.convertToType(data['UpdateDate'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {String} ClientToken
 */
ReservedInstancesListing.prototype['ClientToken'] = undefined;

/**
 * @member {Date} CreateDate
 */
ReservedInstancesListing.prototype['CreateDate'] = undefined;

/**
 * @member {Array.<module:model/InstanceCount>} InstanceCounts
 */
ReservedInstancesListing.prototype['InstanceCounts'] = undefined;

/**
 * @member {Array.<module:model/PriceSchedule>} PriceSchedules
 */
ReservedInstancesListing.prototype['PriceSchedules'] = undefined;

/**
 * @member {String} ReservedInstancesId
 */
ReservedInstancesListing.prototype['ReservedInstancesId'] = undefined;

/**
 * @member {String} ReservedInstancesListingId
 */
ReservedInstancesListing.prototype['ReservedInstancesListingId'] = undefined;

/**
 * @member {module:model/ListingStatus} Status
 */
ReservedInstancesListing.prototype['Status'] = undefined;

/**
 * @member {String} StatusMessage
 */
ReservedInstancesListing.prototype['StatusMessage'] = undefined;

/**
 * @member {Array.<module:model/Tag>} Tags
 */
ReservedInstancesListing.prototype['Tags'] = undefined;

/**
 * @member {Date} UpdateDate
 */
ReservedInstancesListing.prototype['UpdateDate'] = undefined;






export default ReservedInstancesListing;

