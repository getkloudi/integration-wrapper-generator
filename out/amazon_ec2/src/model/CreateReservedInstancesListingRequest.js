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
import PriceScheduleSpecification from './PriceScheduleSpecification';

/**
 * The CreateReservedInstancesListingRequest model module.
 * @module model/CreateReservedInstancesListingRequest
 * @version 1.1.0
 */
class CreateReservedInstancesListingRequest {
    /**
     * Constructs a new <code>CreateReservedInstancesListingRequest</code>.
     * Contains the parameters for CreateReservedInstancesListing.
     * @alias module:model/CreateReservedInstancesListingRequest
     * @param clientToken {String} 
     * @param instanceCount {Number} 
     * @param priceSchedules {Array.<module:model/PriceScheduleSpecification>} 
     * @param reservedInstancesId {String} 
     */
    constructor(clientToken, instanceCount, priceSchedules, reservedInstancesId) { 
        
        CreateReservedInstancesListingRequest.initialize(this, clientToken, instanceCount, priceSchedules, reservedInstancesId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, clientToken, instanceCount, priceSchedules, reservedInstancesId) { 
        obj['ClientToken'] = clientToken;
        obj['InstanceCount'] = instanceCount;
        obj['PriceSchedules'] = priceSchedules;
        obj['ReservedInstancesId'] = reservedInstancesId;
    }

    /**
     * Constructs a <code>CreateReservedInstancesListingRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateReservedInstancesListingRequest} obj Optional instance to populate.
     * @return {module:model/CreateReservedInstancesListingRequest} The populated <code>CreateReservedInstancesListingRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateReservedInstancesListingRequest();

            if (data.hasOwnProperty('ClientToken')) {
                obj['ClientToken'] = ApiClient.convertToType(data['ClientToken'], 'String');
            }
            if (data.hasOwnProperty('InstanceCount')) {
                obj['InstanceCount'] = ApiClient.convertToType(data['InstanceCount'], 'Number');
            }
            if (data.hasOwnProperty('PriceSchedules')) {
                obj['PriceSchedules'] = ApiClient.convertToType(data['PriceSchedules'], [PriceScheduleSpecification]);
            }
            if (data.hasOwnProperty('ReservedInstancesId')) {
                obj['ReservedInstancesId'] = ApiClient.convertToType(data['ReservedInstancesId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} ClientToken
 */
CreateReservedInstancesListingRequest.prototype['ClientToken'] = undefined;

/**
 * @member {Number} InstanceCount
 */
CreateReservedInstancesListingRequest.prototype['InstanceCount'] = undefined;

/**
 * @member {Array.<module:model/PriceScheduleSpecification>} PriceSchedules
 */
CreateReservedInstancesListingRequest.prototype['PriceSchedules'] = undefined;

/**
 * @member {String} ReservedInstancesId
 */
CreateReservedInstancesListingRequest.prototype['ReservedInstancesId'] = undefined;






export default CreateReservedInstancesListingRequest;

