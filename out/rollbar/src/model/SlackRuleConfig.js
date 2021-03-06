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

/**
 * The SlackRuleConfig model module.
 * @module model/SlackRuleConfig
 * @version 1.1.0
 */
class SlackRuleConfig {
    /**
     * Constructs a new <code>SlackRuleConfig</code>.
     * @alias module:model/SlackRuleConfig
     */
    constructor() { 
        
        SlackRuleConfig.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SlackRuleConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SlackRuleConfig} obj Optional instance to populate.
     * @return {module:model/SlackRuleConfig} The populated <code>SlackRuleConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SlackRuleConfig();

            if (data.hasOwnProperty('config')) {
                obj['config'] = Config11.constructFromObject(data['config']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Config11} config
 */
SlackRuleConfig.prototype['config'] = undefined;






export default SlackRuleConfig;

