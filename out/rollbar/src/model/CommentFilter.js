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
 * The CommentFilter model module.
 * @module model/CommentFilter
 * @version 1.1.0
 */
class CommentFilter {
    /**
     * Constructs a new <code>CommentFilter</code>.
     * @alias module:model/CommentFilter
     * @param type {String} Body of an item comment
     * @param operation {String} 
     * @param value {String} 
     */
    constructor(type, operation, value) { 
        
        CommentFilter.initialize(this, type, operation, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, operation, value) { 
        obj['type'] = type;
        obj['operation'] = operation;
        obj['value'] = value;
    }

    /**
     * Constructs a <code>CommentFilter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CommentFilter} obj Optional instance to populate.
     * @return {module:model/CommentFilter} The populated <code>CommentFilter</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CommentFilter();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('operation')) {
                obj['operation'] = ApiClient.convertToType(data['operation'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Body of an item comment
 * @member {String} type
 * @default 'comment'
 */
CommentFilter.prototype['type'] = 'comment';

/**
 * @member {String} operation
 * @default 'within'
 */
CommentFilter.prototype['operation'] = 'within';

/**
 * @member {String} value
 */
CommentFilter.prototype['value'] = undefined;






export default CommentFilter;
