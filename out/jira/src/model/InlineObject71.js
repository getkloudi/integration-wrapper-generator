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
 * The InlineObject71 model module.
 * @module model/InlineObject71
 * @version 1.0.0
 */
class InlineObject71 {
    /**
     * Constructs a new <code>InlineObject71</code>.
     * @alias module:model/InlineObject71
     */
    constructor() { 
        
        InlineObject71.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineObject71</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject71} obj Optional instance to populate.
     * @return {module:model/InlineObject71} The populated <code>InlineObject71</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject71();

            if (data.hasOwnProperty('defaultMapping')) {
                obj['defaultMapping'] = ApiClient.convertToType(data['defaultMapping'], 'Boolean');
            }
            if (data.hasOwnProperty('issueTypes')) {
                obj['issueTypes'] = ApiClient.convertToType(data['issueTypes'], ['String']);
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
 * Indicates whether the workflow is the default workflow for the workflow scheme.
 * @member {Boolean} defaultMapping
 */
InlineObject71.prototype['defaultMapping'] = undefined;

/**
 * The list of issue type IDs.
 * @member {Array.<String>} issueTypes
 */
InlineObject71.prototype['issueTypes'] = undefined;

/**
 * Indicates whether a draft workflow scheme is created or updated when updating an active workflow scheme. The draft is updated with the new workflow-issue types mapping. Defaults to false.
 * @member {Boolean} updateDraftIfNeeded
 */
InlineObject71.prototype['updateDraftIfNeeded'] = undefined;

/**
 * The name of the workflow. For example, jira. Optional if updating the workflow-issue types mapping.
 * @member {String} workflow
 */
InlineObject71.prototype['workflow'] = undefined;






export default InlineObject71;

