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
import Config from './Config';
import Filter from './Filter';

/**
 * The EmailRule model module.
 * @module model/EmailRule
 * @version 1.1.0
 */
class EmailRule {
    /**
     * Constructs a new <code>EmailRule</code>.
     * @alias module:model/EmailRule
     * @param trigger {String} 
     */
    constructor(trigger) { 
        
        EmailRule.initialize(this, trigger);
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
     * Constructs a <code>EmailRule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmailRule} obj Optional instance to populate.
     * @return {module:model/EmailRule} The populated <code>EmailRule</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailRule();

            if (data.hasOwnProperty('trigger')) {
                obj['trigger'] = ApiClient.convertToType(data['trigger'], 'String');
            }
            if (data.hasOwnProperty('filters')) {
                obj['filters'] = ApiClient.convertToType(data['filters'], [Filter]);
            }
            if (data.hasOwnProperty('config')) {
                obj['config'] = Config.constructFromObject(data['config']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} trigger
 */
EmailRule.prototype['trigger'] = undefined;

/**
 * To keep your notifications relevant, you'll want to apply filters to limit when they send messages or create incidents.
 * @member {Array.<module:model/Filter>} filters
 */
EmailRule.prototype['filters'] = undefined;

/**
 * @member {module:model/Config} config
 */
EmailRule.prototype['config'] = undefined;






export default EmailRule;

