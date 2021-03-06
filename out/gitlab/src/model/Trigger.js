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
 * The Trigger model module.
 * @module model/Trigger
 * @version 1.1.0
 */
class Trigger {
    /**
     * Constructs a new <code>Trigger</code>.
     * Delete a trigger
     * @alias module:model/Trigger
     */
    constructor() { 
        
        Trigger.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Trigger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Trigger} obj Optional instance to populate.
     * @return {module:model/Trigger} The populated <code>Trigger</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Trigger();

            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('deleted_at')) {
                obj['deleted_at'] = ApiClient.convertToType(data['deleted_at'], 'String');
            }
            if (data.hasOwnProperty('last_used')) {
                obj['last_used'] = ApiClient.convertToType(data['last_used'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} created_at
 */
Trigger.prototype['created_at'] = undefined;

/**
 * @member {String} deleted_at
 */
Trigger.prototype['deleted_at'] = undefined;

/**
 * @member {String} last_used
 */
Trigger.prototype['last_used'] = undefined;

/**
 * @member {String} token
 */
Trigger.prototype['token'] = undefined;

/**
 * @member {String} updated_at
 */
Trigger.prototype['updated_at'] = undefined;






export default Trigger;

