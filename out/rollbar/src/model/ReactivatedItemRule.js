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
import Filter1 from './Filter1';

/**
 * The ReactivatedItemRule model module.
 * @module model/ReactivatedItemRule
 * @version 1.1.0
 */
class ReactivatedItemRule {
    /**
     * Constructs a new <code>ReactivatedItemRule</code>.
     * @alias module:model/ReactivatedItemRule
     * @param trigger {String} An error/message occurs again after being marked Resolved
     */
    constructor(trigger) { 
        
        ReactivatedItemRule.initialize(this, trigger);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, trigger) { 
        obj['trigger'] = trigger;
    }

    /**
     * Constructs a <code>ReactivatedItemRule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReactivatedItemRule} obj Optional instance to populate.
     * @return {module:model/ReactivatedItemRule} The populated <code>ReactivatedItemRule</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReactivatedItemRule();

            if (data.hasOwnProperty('trigger')) {
                obj['trigger'] = ApiClient.convertToType(data['trigger'], 'String');
            }
            if (data.hasOwnProperty('filters')) {
                obj['filters'] = ApiClient.convertToType(data['filters'], [Filter1]);
            }
        }
        return obj;
    }


}

/**
 * An error/message occurs again after being marked Resolved
 * @member {String} trigger
 * @default 'reactivated_item'
 */
ReactivatedItemRule.prototype['trigger'] = 'reactivated_item';

/**
 * To keep your notifications relevant, you'll want to apply filters to limit when they send messages or create incidents.
 * @member {Array.<module:model/Filter1>} filters
 */
ReactivatedItemRule.prototype['filters'] = undefined;






export default ReactivatedItemRule;
