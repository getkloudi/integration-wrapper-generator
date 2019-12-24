/**
 * GitHub
 * Powerful collaboration, code review, and code management for open source and private projects. 
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
 * The RateLimitRate model module.
 * @module model/RateLimitRate
 * @version 1.3.3
 */
class RateLimitRate {
    /**
     * Constructs a new <code>RateLimitRate</code>.
     * @alias module:model/RateLimitRate
     */
    constructor() { 
        
        RateLimitRate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RateLimitRate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RateLimitRate} obj Optional instance to populate.
     * @return {module:model/RateLimitRate} The populated <code>RateLimitRate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RateLimitRate();

            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
            if (data.hasOwnProperty('remaining')) {
                obj['remaining'] = ApiClient.convertToType(data['remaining'], 'Number');
            }
            if (data.hasOwnProperty('reset')) {
                obj['reset'] = ApiClient.convertToType(data['reset'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} limit
 */
RateLimitRate.prototype['limit'] = undefined;

/**
 * @member {Number} remaining
 */
RateLimitRate.prototype['remaining'] = undefined;

/**
 * @member {Number} reset
 */
RateLimitRate.prototype['reset'] = undefined;






export default RateLimitRate;

