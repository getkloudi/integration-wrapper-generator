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
import WorkflowTransitionRule from './WorkflowTransitionRule';

/**
 * The WorkflowRules model module.
 * @module model/WorkflowRules
 * @version 1.4.0
 */
class WorkflowRules {
    /**
     * Constructs a new <code>WorkflowRules</code>.
     * A collection of transition rules.
     * @alias module:model/WorkflowRules
     * @param conditions {Array.<module:model/WorkflowTransitionRule>} The workflow conditions.
     * @param postFunctions {Array.<module:model/WorkflowTransitionRule>} The workflow post functions.
     * @param validators {Array.<module:model/WorkflowTransitionRule>} The workflow validators.
     */
    constructor(conditions, postFunctions, validators) { 
        
        WorkflowRules.initialize(this, conditions, postFunctions, validators);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, conditions, postFunctions, validators) { 
        obj['conditions'] = conditions;
        obj['postFunctions'] = postFunctions;
        obj['validators'] = validators;
    }

    /**
     * Constructs a <code>WorkflowRules</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkflowRules} obj Optional instance to populate.
     * @return {module:model/WorkflowRules} The populated <code>WorkflowRules</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WorkflowRules();

            if (data.hasOwnProperty('conditions')) {
                obj['conditions'] = ApiClient.convertToType(data['conditions'], [WorkflowTransitionRule]);
            }
            if (data.hasOwnProperty('postFunctions')) {
                obj['postFunctions'] = ApiClient.convertToType(data['postFunctions'], [WorkflowTransitionRule]);
            }
            if (data.hasOwnProperty('validators')) {
                obj['validators'] = ApiClient.convertToType(data['validators'], [WorkflowTransitionRule]);
            }
        }
        return obj;
    }


}

/**
 * The workflow conditions.
 * @member {Array.<module:model/WorkflowTransitionRule>} conditions
 */
WorkflowRules.prototype['conditions'] = undefined;

/**
 * The workflow post functions.
 * @member {Array.<module:model/WorkflowTransitionRule>} postFunctions
 */
WorkflowRules.prototype['postFunctions'] = undefined;

/**
 * The workflow validators.
 * @member {Array.<module:model/WorkflowTransitionRule>} validators
 */
WorkflowRules.prototype['validators'] = undefined;






export default WorkflowRules;

