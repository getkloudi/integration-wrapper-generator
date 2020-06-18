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
import WorkflowStatusProperties from './WorkflowStatusProperties';

/**
 * The WorkflowStatus model module.
 * @module model/WorkflowStatus
 * @version 1.4.0
 */
class WorkflowStatus {
    /**
     * Constructs a new <code>WorkflowStatus</code>.
     * Details of a workflow status.
     * @alias module:model/WorkflowStatus
     * @param id {String} The ID of the issue status.
     * @param name {String} The name of the status in the workflow.
     */
    constructor(id, name) { 
        
        WorkflowStatus.initialize(this, id, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, name) { 
        obj['id'] = id;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>WorkflowStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkflowStatus} obj Optional instance to populate.
     * @return {module:model/WorkflowStatus} The populated <code>WorkflowStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WorkflowStatus();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('properties')) {
                obj['properties'] = WorkflowStatusProperties.constructFromObject(data['properties']);
            }
        }
        return obj;
    }


}

/**
 * The ID of the issue status.
 * @member {String} id
 */
WorkflowStatus.prototype['id'] = undefined;

/**
 * The name of the status in the workflow.
 * @member {String} name
 */
WorkflowStatus.prototype['name'] = undefined;

/**
 * @member {module:model/WorkflowStatusProperties} properties
 */
WorkflowStatus.prototype['properties'] = undefined;






export default WorkflowStatus;
