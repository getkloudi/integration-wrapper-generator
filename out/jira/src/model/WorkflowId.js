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
 * The WorkflowId model module.
 * @module model/WorkflowId
 * @version 1.4.0
 */
class WorkflowId {
    /**
     * Constructs a new <code>WorkflowId</code>.
     * Properties that identify a workflow.
     * @alias module:model/WorkflowId
     * @param draft {Boolean} Whether the workflow is in the draft state.
     * @param name {String} The name of the workflow.
     */
    constructor(draft, name) { 
        
        WorkflowId.initialize(this, draft, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, draft, name) { 
        obj['draft'] = draft;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>WorkflowId</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkflowId} obj Optional instance to populate.
     * @return {module:model/WorkflowId} The populated <code>WorkflowId</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WorkflowId();

            if (data.hasOwnProperty('draft')) {
                obj['draft'] = ApiClient.convertToType(data['draft'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Whether the workflow is in the draft state.
 * @member {Boolean} draft
 */
WorkflowId.prototype['draft'] = undefined;

/**
 * The name of the workflow.
 * @member {String} name
 */
WorkflowId.prototype['name'] = undefined;






export default WorkflowId;

