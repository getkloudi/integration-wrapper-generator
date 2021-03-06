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
import Type from './Type';
import Value from './Value';

/**
 * The Filter model module.
 * @module model/Filter
 * @version 1.1.0
 */
class Filter {
    /**
     * Constructs a new <code>Filter</code>.
     * @alias module:model/Filter
     */
    constructor() { 
        
        Filter.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Filter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Filter} obj Optional instance to populate.
     * @return {module:model/Filter} The populated <code>Filter</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Filter();

            if (data.hasOwnProperty('type')) {
                obj['type'] = Type.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('operation')) {
                obj['operation'] = Operation.constructFromObject(data['operation']);
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = Value.constructFromObject(data['value']);
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('period')) {
                obj['period'] = ApiClient.convertToType(data['period'], 'Number');
            }
            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Type} type
 */
Filter.prototype['type'] = undefined;

/**
 * @member {module:model/Operation} operation
 */
Filter.prototype['operation'] = undefined;

/**
 * @member {module:model/Value} value
 */
Filter.prototype['value'] = undefined;

/**
 * @member {String} path
 */
Filter.prototype['path'] = undefined;

/**
 * Number of seconds
 * @member {Number} period
 */
Filter.prototype['period'] = undefined;

/**
 * @member {Number} count
 */
Filter.prototype['count'] = undefined;






export default Filter;

