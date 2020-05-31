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

/**
 * The Filter3 model module.
 * @module model/Filter3
 * @version 1.1.0
 */
class Filter3 {
    /**
     * Constructs a new <code>Filter3</code>.
     * @alias module:model/Filter3
     */
    constructor() { 
        
        Filter3.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Filter3</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Filter3} obj Optional instance to populate.
     * @return {module:model/Filter3} The populated <code>Filter3</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Filter3();

            if (data.hasOwnProperty('type')) {
                obj['type'] = Type.constructFromObject(data['type']);
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
 * @member {module:model/Type} type
 */
Filter3.prototype['type'] = undefined;

/**
 * @member {module:model/Operation} operation
 */
Filter3.prototype['operation'] = undefined;

/**
 * @member {String} value
 */
Filter3.prototype['value'] = undefined;






export default Filter3;

