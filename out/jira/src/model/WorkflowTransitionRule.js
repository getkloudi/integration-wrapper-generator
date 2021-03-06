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
 * The WorkflowTransitionRule model module.
 * @module model/WorkflowTransitionRule
 * @version 1.4.0
 */
class WorkflowTransitionRule {
    /**
     * Constructs a new <code>WorkflowTransitionRule</code>.
     * A workflow transition rule.
     * @alias module:model/WorkflowTransitionRule
     * @param type {String} The type of the transition rule.
     */
    constructor(type) { 
        
        WorkflowTransitionRule.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
        obj['type'] = type;
    }

    /**
     * Constructs a <code>WorkflowTransitionRule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkflowTransitionRule} obj Optional instance to populate.
     * @return {module:model/WorkflowTransitionRule} The populated <code>WorkflowTransitionRule</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WorkflowTransitionRule();

            if (data.hasOwnProperty('configuration')) {
                obj['configuration'] = ApiClient.convertToType(data['configuration'], Object);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The configuration of the transition rule. This is currently returned only for some of the rule types. Availability of this property is subject to change.
 * @member {Object} configuration
 */
WorkflowTransitionRule.prototype['configuration'] = undefined;

/**
 * The type of the transition rule.
 * @member {String} type
 */
WorkflowTransitionRule.prototype['type'] = undefined;






export default WorkflowTransitionRule;

