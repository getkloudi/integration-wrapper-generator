/**
 * The Jira Cloud platform REST API
 * Jira Cloud platform REST API documentation
 *
 * The version of the OpenAPI document: 1001.0.0-SNAPSHOT
 * Contact: ecosystem@atlassian.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The RuleConfiguration model module.
 * @module model/RuleConfiguration
 * @version 1.4.0
 */
class RuleConfiguration {
    /**
     * Constructs a new <code>RuleConfiguration</code>.
     * A rule configuration.
     * @alias module:model/RuleConfiguration
     * @param value {String} Configuration of the rule, as it is stored by the Connect app on the rule configuration page.
     */
    constructor(value) { 
        
        RuleConfiguration.initialize(this, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, value) { 
        obj['value'] = value;
    }

    /**
     * Constructs a <code>RuleConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RuleConfiguration} obj Optional instance to populate.
     * @return {module:model/RuleConfiguration} The populated <code>RuleConfiguration</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RuleConfiguration();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Configuration of the rule, as it is stored by the Connect app on the rule configuration page.
 * @member {String} value
 */
RuleConfiguration.prototype['value'] = undefined;






export default RuleConfiguration;

