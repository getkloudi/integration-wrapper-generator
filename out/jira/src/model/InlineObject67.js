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
 * The InlineObject67 model module.
 * @module model/InlineObject67
 * @version 1.3.1
 */
class InlineObject67 {
    /**
     * Constructs a new <code>InlineObject67</code>.
     * @alias module:model/InlineObject67
     */
    constructor() { 
        
        InlineObject67.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineObject67</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject67} obj Optional instance to populate.
     * @return {module:model/InlineObject67} The populated <code>InlineObject67</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject67();

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
 * Indicates whether a draft workflow scheme is created or updated when updating an active workflow scheme. The draft is updated with the new default workflow. Defaults to false.
 * @member {Boolean} updateDraftIfNeeded
 */
InlineObject67.prototype['updateDraftIfNeeded'] = undefined;

/**
 * The name of the workflow to set as the default workflow. For example, jira.
 * @member {String} workflow
 */
InlineObject67.prototype['workflow'] = undefined;






export default InlineObject67;

