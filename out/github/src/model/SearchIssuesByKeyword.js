/**
 * GitHub
 * Powerful collaboration, code review, and code management for open source and private projects. 
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
import SearchIssuesByKeywordIssues from './SearchIssuesByKeywordIssues';

/**
 * The SearchIssuesByKeyword model module.
 * @module model/SearchIssuesByKeyword
 * @version 1.3.2
 */
class SearchIssuesByKeyword {
    /**
     * Constructs a new <code>SearchIssuesByKeyword</code>.
     * @alias module:model/SearchIssuesByKeyword
     */
    constructor() { 
        
        SearchIssuesByKeyword.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SearchIssuesByKeyword</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SearchIssuesByKeyword} obj Optional instance to populate.
     * @return {module:model/SearchIssuesByKeyword} The populated <code>SearchIssuesByKeyword</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SearchIssuesByKeyword();

            if (data.hasOwnProperty('issues')) {
                obj['issues'] = ApiClient.convertToType(data['issues'], [SearchIssuesByKeywordIssues]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/SearchIssuesByKeywordIssues>} issues
 */
SearchIssuesByKeyword.prototype['issues'] = undefined;






export default SearchIssuesByKeyword;

