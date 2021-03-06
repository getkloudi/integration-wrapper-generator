/**
 * Gitlab
 * The platform for modern developers GitLab unifies issues, code review, CI and CD into a single UI
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The TriggerRequest model module.
 * @module model/TriggerRequest
 * @version 1.1.0
 */
class TriggerRequest {
    /**
     * Constructs a new <code>TriggerRequest</code>.
     * Trigger a GitLab project build
     * @alias module:model/TriggerRequest
     */
    constructor() { 
        
        TriggerRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TriggerRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TriggerRequest} obj Optional instance to populate.
     * @return {module:model/TriggerRequest} The populated <code>TriggerRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TriggerRequest();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('variables')) {
                obj['variables'] = ApiClient.convertToType(data['variables'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
TriggerRequest.prototype['id'] = undefined;

/**
 * @member {String} variables
 */
TriggerRequest.prototype['variables'] = undefined;






export default TriggerRequest;

