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
import Config11 from './Config11';
import Filter from './Filter';

/**
 * The SlackRule model module.
 * @module model/SlackRule
 * @version 1.1.0
 */
class SlackRule {
    /**
     * Constructs a new <code>SlackRule</code>.
     * @alias module:model/SlackRule
     * @param trigger {String} 
     */
    constructor(trigger) { 
        
        SlackRule.initialize(this, trigger);
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
     * Constructs a <code>SlackRule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SlackRule} obj Optional instance to populate.
     * @return {module:model/SlackRule} The populated <code>SlackRule</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SlackRule();

            if (data.hasOwnProperty('trigger')) {
                obj['trigger'] = ApiClient.convertToType(data['trigger'], 'String');
            }
            if (data.hasOwnProperty('filters')) {
                obj['filters'] = ApiClient.convertToType(data['filters'], [Filter]);
            }
            if (data.hasOwnProperty('config')) {
                obj['config'] = Config11.constructFromObject(data['config']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} trigger
 */
SlackRule.prototype['trigger'] = undefined;

/**
 * To keep your notifications relevant, you'll want to apply filters to limit when they send messages or create incidents.
 * @member {Array.<module:model/Filter>} filters
 */
SlackRule.prototype['filters'] = undefined;

/**
 * @member {module:model/Config11} config
 */
SlackRule.prototype['config'] = undefined;






export default SlackRule;

