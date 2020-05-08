/**
 * Jira
 * The Jira Cloud Platform REST API
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The InlineObject72 model module.
 * @module model/InlineObject72
 * @version 1.1.0
 */
class InlineObject72 {
    /**
     * Constructs a new <code>InlineObject72</code>.
     * @alias module:model/InlineObject72
     */
    constructor() { 
        
        InlineObject72.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineObject72</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject72} obj Optional instance to populate.
     * @return {module:model/InlineObject72} The populated <code>InlineObject72</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject72();

            if (data.hasOwnProperty('issueType')) {
                obj['issueType'] = ApiClient.convertToType(data['issueType'], 'String');
            }
            if (data.hasOwnProperty('updateDraftIfNeeded')) {
                obj['updateDraftIfNeeded'] = ApiClient.convertToType(data['updateDraftIfNeeded'], 'Boolean');
            }
            if (data.hasOwnProperty('workflow')) {
                obj['workflow'] = ApiClient.convertToType(data['workflow'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The ID of the issue type. Not required if updating the issue type-workflow mapping.
 * @member {String} issueType
 */
InlineObject72.prototype['issueType'] = undefined;

/**
 * Set to true to create or update the draft of a workflow scheme and update the mapping in the draft, when the workflow scheme cannot be edited. Defaults to false. Only applicable when updating the workflow-issue types mapping.
 * @member {Boolean} updateDraftIfNeeded
 */
InlineObject72.prototype['updateDraftIfNeeded'] = undefined;

/**
 * The name of the workflow. For example, jira.
 * @member {String} workflow
 */
InlineObject72.prototype['workflow'] = undefined;






export default InlineObject72;
