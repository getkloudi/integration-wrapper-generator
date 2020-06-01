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
import Filter3 from './Filter3';

/**
 * The DeployRule model module.
 * @module model/DeployRule
 * @version 1.1.0
 */
class DeployRule {
    /**
     * Constructs a new <code>DeployRule</code>.
     * @alias module:model/DeployRule
     * @param trigger {String} A new deploy is reported.
     */
    constructor(trigger) { 
        
        DeployRule.initialize(this, trigger);
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
     * Constructs a <code>DeployRule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeployRule} obj Optional instance to populate.
     * @return {module:model/DeployRule} The populated <code>DeployRule</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeployRule();

            if (data.hasOwnProperty('trigger')) {
                obj['trigger'] = ApiClient.convertToType(data['trigger'], 'String');
            }
            if (data.hasOwnProperty('filters')) {
                obj['filters'] = ApiClient.convertToType(data['filters'], [Filter3]);
            }
        }
        return obj;
    }


}

/**
 * A new deploy is reported.
 * @member {String} trigger
 * @default 'deploy'
 */
DeployRule.prototype['trigger'] = 'deploy';

/**
 * To keep your notifications relevant, you'll want to apply filters to limit when they send messages or create incidents.
 * @member {Array.<module:model/Filter3>} filters
 */
DeployRule.prototype['filters'] = undefined;






export default DeployRule;
