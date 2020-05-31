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
import Operation33 from './Operation33';

/**
 * The PathFilter model module.
 * @module model/PathFilter
 * @version 1.1.0
 */
class PathFilter {
    /**
     * Constructs a new <code>PathFilter</code>.
     * @alias module:model/PathFilter
     * @param path {String} 
     * @param type {String} Allows for filtering based on any data in the JSON payload. To view the JSON structure of your errors, check out the Raw JSON section of any occurrence
     * @param value {String} 
     * @param operation {module:model/Operation33} 
     */
    constructor(path, type, value, operation) { 
        
        PathFilter.initialize(this, path, type, value, operation);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, path, type, value, operation) { 
        obj['path'] = path;
        obj['type'] = type;
        obj['value'] = value;
        obj['operation'] = operation;
    }

    /**
     * Constructs a <code>PathFilter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PathFilter} obj Optional instance to populate.
     * @return {module:model/PathFilter} The populated <code>PathFilter</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PathFilter();

            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('operation')) {
                obj['operation'] = Operation33.constructFromObject(data['operation']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} path
 */
PathFilter.prototype['path'] = undefined;

/**
 * Allows for filtering based on any data in the JSON payload. To view the JSON structure of your errors, check out the Raw JSON section of any occurrence
 * @member {String} type
 * @default 'path'
 */
PathFilter.prototype['type'] = 'path';

/**
 * @member {String} value
 */
PathFilter.prototype['value'] = undefined;

/**
 * @member {module:model/Operation33} operation
 */
PathFilter.prototype['operation'] = undefined;






export default PathFilter;

