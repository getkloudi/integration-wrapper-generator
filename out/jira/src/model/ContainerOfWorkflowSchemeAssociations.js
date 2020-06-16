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
import WorkflowSchemeAssociations from './WorkflowSchemeAssociations';

/**
 * The ContainerOfWorkflowSchemeAssociations model module.
 * @module model/ContainerOfWorkflowSchemeAssociations
 * @version 1.4.0
 */
class ContainerOfWorkflowSchemeAssociations {
    /**
     * Constructs a new <code>ContainerOfWorkflowSchemeAssociations</code>.
     * A container for a list of workflow schemes together with the projects they are associated with.
     * @alias module:model/ContainerOfWorkflowSchemeAssociations
     * @param values {Array.<module:model/WorkflowSchemeAssociations>} A list of workflow schemes together with projects they are associated with.
     */
    constructor(values) { 
        
        ContainerOfWorkflowSchemeAssociations.initialize(this, values);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, values) { 
        obj['values'] = values;
    }

    /**
     * Constructs a <code>ContainerOfWorkflowSchemeAssociations</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContainerOfWorkflowSchemeAssociations} obj Optional instance to populate.
     * @return {module:model/ContainerOfWorkflowSchemeAssociations} The populated <code>ContainerOfWorkflowSchemeAssociations</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContainerOfWorkflowSchemeAssociations();

            if (data.hasOwnProperty('values')) {
                obj['values'] = ApiClient.convertToType(data['values'], [WorkflowSchemeAssociations]);
            }
        }
        return obj;
    }


}

/**
 * A list of workflow schemes together with projects they are associated with.
 * @member {Array.<module:model/WorkflowSchemeAssociations>} values
 */
ContainerOfWorkflowSchemeAssociations.prototype['values'] = undefined;






export default ContainerOfWorkflowSchemeAssociations;

