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
 * The Api1ItemRequest1 model module.
 * @module model/Api1ItemRequest1
 * @version 1.1.0
 */
class Api1ItemRequest1 {
    /**
     * Constructs a new <code>Api1ItemRequest1</code>.
     * @alias module:model/Api1ItemRequest1
     */
    constructor() { 
        
        Api1ItemRequest1.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Api1ItemRequest1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Api1ItemRequest1} obj Optional instance to populate.
     * @return {module:model/Api1ItemRequest1} The populated <code>Api1ItemRequest1</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Api1ItemRequest1();

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('resolved_in_version')) {
                obj['resolved_in_version'] = ApiClient.convertToType(data['resolved_in_version'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('level')) {
                obj['level'] = ApiClient.convertToType(data['level'], 'String');
            }
            if (data.hasOwnProperty('assigned_user_id')) {
                obj['assigned_user_id'] = ApiClient.convertToType(data['assigned_user_id'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * If present, the new status. Valid values: `active`, `resolved`, `muted`.
 * @member {String} status
 */
Api1ItemRequest1.prototype['status'] = undefined;

/**
 * If not empty, a string up to 40 characters describing the version that the item was resolved in. Only used if `status` is set to `resolved`.
 * @member {String} resolved_in_version
 */
Api1ItemRequest1.prototype['resolved_in_version'] = undefined;

/**
 * If present, the new title. Should be a string with length 1 to 255.
 * @member {String} title
 */
Api1ItemRequest1.prototype['title'] = undefined;

/**
 * If present, the new level. Valid values: `critical`, `error`, `warning`, `info`, `debug`
 * @member {String} level
 */
Api1ItemRequest1.prototype['level'] = undefined;

/**
 * If present, the new assigned user ID. Valid values are null or any user ID with access to this item.
 * @member {Number} assigned_user_id
 */
Api1ItemRequest1.prototype['assigned_user_id'] = undefined;






export default Api1ItemRequest1;

