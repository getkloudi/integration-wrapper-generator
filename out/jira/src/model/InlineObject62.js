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
 * The InlineObject62 model module.
 * @module model/InlineObject62
 * @version 1.3.0
 */
class InlineObject62 {
    /**
     * Constructs a new <code>InlineObject62</code>.
     * @alias module:model/InlineObject62
     */
    constructor() { 
        
        InlineObject62.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineObject62</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject62} obj Optional instance to populate.
     * @return {module:model/InlineObject62} The populated <code>InlineObject62</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject62();

            if (data.hasOwnProperty('customFieldReplacementList')) {
                obj['customFieldReplacementList'] = ApiClient.convertToType(data['customFieldReplacementList'], [Object]);
            }
            if (data.hasOwnProperty('moveAffectedIssuesTo')) {
                obj['moveAffectedIssuesTo'] = ApiClient.convertToType(data['moveAffectedIssuesTo'], 'Number');
            }
            if (data.hasOwnProperty('moveFixIssuesTo')) {
                obj['moveFixIssuesTo'] = ApiClient.convertToType(data['moveFixIssuesTo'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * A JSON array of custom field IDs (customFieldId) and version IDs (moveTo) to update when the fields contain the deleted version.
 * @member {Array.<Object>} customFieldReplacementList
 */
InlineObject62.prototype['customFieldReplacementList'] = undefined;

/**
 * The ID of the version to update affectedVersion to when the field contains the deleted version.
 * @member {Number} moveAffectedIssuesTo
 */
InlineObject62.prototype['moveAffectedIssuesTo'] = undefined;

/**
 * The ID of the version to update fixVersion to when the field contains the deleted version.
 * @member {Number} moveFixIssuesTo
 */
InlineObject62.prototype['moveFixIssuesTo'] = undefined;






export default InlineObject62;

