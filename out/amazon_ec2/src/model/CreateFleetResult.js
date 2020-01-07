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
import CreateFleetError from './CreateFleetError';
import CreateFleetInstance from './CreateFleetInstance';

/**
 * The CreateFleetResult model module.
 * @module model/CreateFleetResult
 * @version 1.1.0
 */
class CreateFleetResult {
    /**
     * Constructs a new <code>CreateFleetResult</code>.
     * @alias module:model/CreateFleetResult
     */
    constructor() { 
        
        CreateFleetResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateFleetResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateFleetResult} obj Optional instance to populate.
     * @return {module:model/CreateFleetResult} The populated <code>CreateFleetResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateFleetResult();

            if (data.hasOwnProperty('Errors')) {
                obj['Errors'] = ApiClient.convertToType(data['Errors'], [CreateFleetError]);
            }
            if (data.hasOwnProperty('FleetId')) {
                obj['FleetId'] = ApiClient.convertToType(data['FleetId'], 'String');
            }
            if (data.hasOwnProperty('Instances')) {
                obj['Instances'] = ApiClient.convertToType(data['Instances'], [CreateFleetInstance]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/CreateFleetError>} Errors
 */
CreateFleetResult.prototype['Errors'] = undefined;

/**
 * @member {String} FleetId
 */
CreateFleetResult.prototype['FleetId'] = undefined;

/**
 * @member {Array.<module:model/CreateFleetInstance>} Instances
 */
CreateFleetResult.prototype['Instances'] = undefined;






export default CreateFleetResult;

