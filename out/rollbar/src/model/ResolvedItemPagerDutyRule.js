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
import Config23 from './Config23';
import Filter1 from './Filter1';

/**
 * The ResolvedItemPagerDutyRule model module.
 * @module model/ResolvedItemPagerDutyRule
 * @version 1.1.0
 */
class ResolvedItemPagerDutyRule {
    /**
     * Constructs a new <code>ResolvedItemPagerDutyRule</code>.
     * @alias module:model/ResolvedItemPagerDutyRule
     * @param trigger {String} An error/message is marked Resolved.
     */
    constructor(trigger) { 
        
        ResolvedItemPagerDutyRule.initialize(this, trigger);
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
     * Constructs a <code>ResolvedItemPagerDutyRule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResolvedItemPagerDutyRule} obj Optional instance to populate.
     * @return {module:model/ResolvedItemPagerDutyRule} The populated <code>ResolvedItemPagerDutyRule</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ResolvedItemPagerDutyRule();

            if (data.hasOwnProperty('trigger')) {
                obj['trigger'] = ApiClient.convertToType(data['trigger'], 'String');
            }
            if (data.hasOwnProperty('filters')) {
                obj['filters'] = ApiClient.convertToType(data['filters'], [Filter1]);
            }
            if (data.hasOwnProperty('config')) {
                obj['config'] = Config23.constructFromObject(data['config']);
            }
        }
        return obj;
    }


}

/**
 * An error/message is marked Resolved.
 * @member {String} trigger
 * @default 'resolved_item'
 */
ResolvedItemPagerDutyRule.prototype['trigger'] = 'resolved_item';

/**
 * @member {Array.<module:model/Filter1>} filters
 */
ResolvedItemPagerDutyRule.prototype['filters'] = undefined;

/**
 * @member {module:model/Config23} config
 */
ResolvedItemPagerDutyRule.prototype['config'] = undefined;






export default ResolvedItemPagerDutyRule;

