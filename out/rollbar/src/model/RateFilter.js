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
 * The RateFilter model module.
 * @module model/RateFilter
 * @version 1.1.0
 */
class RateFilter {
    /**
     * Constructs a new <code>RateFilter</code>.
     * @alias module:model/RateFilter
     * @param type {String} Rate of occurrences of an item
     * @param period {Number} Number of seconds
     * @param count {Number} 
     */
    constructor(type, period, count) { 
        
        RateFilter.initialize(this, type, period, count);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, period, count) { 
        obj['type'] = type;
        obj['period'] = period;
        obj['count'] = count;
    }

    /**
     * Constructs a <code>RateFilter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RateFilter} obj Optional instance to populate.
     * @return {module:model/RateFilter} The populated <code>RateFilter</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RateFilter();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
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
 * Rate of occurrences of an item
 * @member {String} type
 * @default 'rate'
 */
RateFilter.prototype['type'] = 'rate';

/**
 * Number of seconds
 * @member {Number} period
 */
RateFilter.prototype['period'] = undefined;

/**
 * @member {Number} count
 */
RateFilter.prototype['count'] = undefined;






export default RateFilter;
