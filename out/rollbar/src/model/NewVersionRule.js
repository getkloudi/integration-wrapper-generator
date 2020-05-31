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
import EnvironmentFilter from './EnvironmentFilter';

/**
 * The NewVersionRule model module.
 * @module model/NewVersionRule
 * @version 1.1.0
 */
class NewVersionRule {
    /**
     * Constructs a new <code>NewVersionRule</code>.
     * @alias module:model/NewVersionRule
     * @param trigger {String} A new code version is detected
     */
    constructor(trigger) { 
        
        NewVersionRule.initialize(this, trigger);
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
     * Constructs a <code>NewVersionRule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewVersionRule} obj Optional instance to populate.
     * @return {module:model/NewVersionRule} The populated <code>NewVersionRule</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewVersionRule();

            if (data.hasOwnProperty('trigger')) {
                obj['trigger'] = ApiClient.convertToType(data['trigger'], 'String');
            }
            if (data.hasOwnProperty('filters')) {
                obj['filters'] = ApiClient.convertToType(data['filters'], [EnvironmentFilter]);
            }
        }
        return obj;
    }


}

/**
 * A new code version is detected
 * @member {String} trigger
 * @default 'new_version'
 */
NewVersionRule.prototype['trigger'] = 'new_version';

/**
 * To keep your notifications relevant, you'll want to apply filters to limit when they send messages or create incidents.
 * @member {Array.<module:model/EnvironmentFilter>} filters
 */
NewVersionRule.prototype['filters'] = undefined;






export default NewVersionRule;

