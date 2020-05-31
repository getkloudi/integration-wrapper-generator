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
import Filter1 from './Filter1';

/**
 * The NewItemEmailRule model module.
 * @module model/NewItemEmailRule
 * @version 1.1.0
 */
class NewItemEmailRule {
    /**
     * Constructs a new <code>NewItemEmailRule</code>.
     * @alias module:model/NewItemEmailRule
     * @param trigger {String} An error/ message is seen for the first time
     */
    constructor(trigger) { 
        
        NewItemEmailRule.initialize(this, trigger);
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
     * Constructs a <code>NewItemEmailRule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewItemEmailRule} obj Optional instance to populate.
     * @return {module:model/NewItemEmailRule} The populated <code>NewItemEmailRule</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewItemEmailRule();

            if (data.hasOwnProperty('trigger')) {
                obj['trigger'] = ApiClient.convertToType(data['trigger'], 'String');
            }
            if (data.hasOwnProperty('filters')) {
                obj['filters'] = ApiClient.convertToType(data['filters'], [Filter1]);
            }
            if (data.hasOwnProperty('config')) {
                obj['config'] = Config.constructFromObject(data['config']);
            }
        }
        return obj;
    }


}

/**
 * An error/ message is seen for the first time
 * @member {String} trigger
 * @default 'new_item'
 */
NewItemEmailRule.prototype['trigger'] = 'new_item';

/**
 * To keep your notifications relevant, you'll want to apply filters to limit when they send messages or create incidents.
 * @member {Array.<module:model/Filter1>} filters
 */
NewItemEmailRule.prototype['filters'] = undefined;

/**
 * @member {module:model/Config} config
 */
NewItemEmailRule.prototype['config'] = undefined;






export default NewItemEmailRule;

