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
 * The WorkflowStatusProperties model module.
 * @module model/WorkflowStatusProperties
 * @version 1.4.0
 */
class WorkflowStatusProperties {
    /**
     * Constructs a new <code>WorkflowStatusProperties</code>.
     * Properties of a workflow status.
     * @alias module:model/WorkflowStatusProperties
     * @param issueEditable {Boolean} Whether issues are editable in this status.
     */
    constructor(issueEditable) { 
        
        WorkflowStatusProperties.initialize(this, issueEditable);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, issueEditable) { 
        obj['issueEditable'] = issueEditable;
    }

    /**
     * Constructs a <code>WorkflowStatusProperties</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkflowStatusProperties} obj Optional instance to populate.
     * @return {module:model/WorkflowStatusProperties} The populated <code>WorkflowStatusProperties</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WorkflowStatusProperties();

            if (data.hasOwnProperty('issueEditable')) {
                obj['issueEditable'] = ApiClient.convertToType(data['issueEditable'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Whether issues are editable in this status.
 * @member {Boolean} issueEditable
 */
WorkflowStatusProperties.prototype['issueEditable'] = undefined;






export default WorkflowStatusProperties;
