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
import IssuePickerSuggestionsIssueType from './IssuePickerSuggestionsIssueType';

/**
 * The IssuePickerSuggestions model module.
 * @module model/IssuePickerSuggestions
 * @version 1.4.0
 */
class IssuePickerSuggestions {
    /**
     * Constructs a new <code>IssuePickerSuggestions</code>.
     * A list of issues suggested for use in auto-completion.
     * @alias module:model/IssuePickerSuggestions
     */
    constructor() { 
        
        IssuePickerSuggestions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IssuePickerSuggestions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssuePickerSuggestions} obj Optional instance to populate.
     * @return {module:model/IssuePickerSuggestions} The populated <code>IssuePickerSuggestions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IssuePickerSuggestions();

            if (data.hasOwnProperty('sections')) {
                obj['sections'] = ApiClient.convertToType(data['sections'], [IssuePickerSuggestionsIssueType]);
            }
        }
        return obj;
    }


}

/**
 * A list of issues for an issue type suggested for use in auto-completion.
 * @member {Array.<module:model/IssuePickerSuggestionsIssueType>} sections
 */
IssuePickerSuggestions.prototype['sections'] = undefined;






export default IssuePickerSuggestions;

