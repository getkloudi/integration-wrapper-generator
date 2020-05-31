/**
 * Rollbar API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Api1DeployRequest1 model module.
 * @module model/Api1DeployRequest1
 * @version 1.1.0
 */
class Api1DeployRequest1 {
    /**
     * Constructs a new <code>Api1DeployRequest1</code>.
     * @alias module:model/Api1DeployRequest1
     * @param status {String} New status of build - `started`, `succeeded`, `failed`, or `timed_out`.  This value can only be changed if the current status of the build is `started`.
     */
    constructor(status) { 
        
        Api1DeployRequest1.initialize(this, status);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, status) { 
        obj['status'] = status;
    }

    /**
     * Constructs a <code>Api1DeployRequest1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Api1DeployRequest1} obj Optional instance to populate.
     * @return {module:model/Api1DeployRequest1} The populated <code>Api1DeployRequest1</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Api1DeployRequest1();

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
        }
        return obj;
    }


}

/**
 * New status of build - `started`, `succeeded`, `failed`, or `timed_out`.  This value can only be changed if the current status of the build is `started`.
 * @member {String} status
 */
Api1DeployRequest1.prototype['status'] = undefined;

/**
 * Optional comment to describe the deploy
 * @member {String} comment
 */
Api1DeployRequest1.prototype['comment'] = undefined;






export default Api1DeployRequest1;

