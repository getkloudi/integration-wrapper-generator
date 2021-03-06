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
import Operation from './Operation';

/**
 * The EnvironmentFilter model module.
 * @module model/EnvironmentFilter
 * @version 1.1.0
 */
class EnvironmentFilter {
    /**
     * Constructs a new <code>EnvironmentFilter</code>.
     * @alias module:model/EnvironmentFilter
     * @param type {String} Item Environment
     * @param operation {module:model/Operation} 
     * @param value {String} 
     */
    constructor(type, operation, value) { 
        
        EnvironmentFilter.initialize(this, type, operation, value);
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
     * Constructs a <code>EnvironmentFilter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EnvironmentFilter} obj Optional instance to populate.
     * @return {module:model/EnvironmentFilter} The populated <code>EnvironmentFilter</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EnvironmentFilter();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('operation')) {
                obj['operation'] = Operation.constructFromObject(data['operation']);
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Item Environment
 * @member {String} type
 * @default 'environment'
 */
EnvironmentFilter.prototype['type'] = 'environment';

/**
 * @member {module:model/Operation} operation
 */
EnvironmentFilter.prototype['operation'] = undefined;

/**
 * @member {String} value
 */
EnvironmentFilter.prototype['value'] = undefined;






export default EnvironmentFilter;

