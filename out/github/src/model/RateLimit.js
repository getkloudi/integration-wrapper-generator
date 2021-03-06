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
import RateLimitRate from './RateLimitRate';

/**
 * The RateLimit model module.
 * @module model/RateLimit
 * @version 1.4.6
 */
class RateLimit {
    /**
     * Constructs a new <code>RateLimit</code>.
     * @alias module:model/RateLimit
     */
    constructor() { 
        
        RateLimit.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RateLimit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RateLimit} obj Optional instance to populate.
     * @return {module:model/RateLimit} The populated <code>RateLimit</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RateLimit();

            if (data.hasOwnProperty('rate')) {
                obj['rate'] = RateLimitRate.constructFromObject(data['rate']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/RateLimitRate} rate
 */
RateLimit.prototype['rate'] = undefined;






export default RateLimit;

