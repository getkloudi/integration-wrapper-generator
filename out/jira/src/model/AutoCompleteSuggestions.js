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
import AutoCompleteSuggestion from './AutoCompleteSuggestion';

/**
 * The AutoCompleteSuggestions model module.
 * @module model/AutoCompleteSuggestions
 * @version 1.4.0
 */
class AutoCompleteSuggestions {
    /**
     * Constructs a new <code>AutoCompleteSuggestions</code>.
     * The results from a JQL query.
     * @alias module:model/AutoCompleteSuggestions
     */
    constructor() { 
        
        AutoCompleteSuggestions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AutoCompleteSuggestions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AutoCompleteSuggestions} obj Optional instance to populate.
     * @return {module:model/AutoCompleteSuggestions} The populated <code>AutoCompleteSuggestions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AutoCompleteSuggestions();

            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [AutoCompleteSuggestion]);
            }
        }
        return obj;
    }


}

/**
 * The list of suggested item.
 * @member {Array.<module:model/AutoCompleteSuggestion>} results
 */
AutoCompleteSuggestions.prototype['results'] = undefined;






export default AutoCompleteSuggestions;

