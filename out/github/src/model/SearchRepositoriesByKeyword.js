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
import Repo from './Repo';

/**
 * The SearchRepositoriesByKeyword model module.
 * @module model/SearchRepositoriesByKeyword
 * @version 1.4.6
 */
class SearchRepositoriesByKeyword {
    /**
     * Constructs a new <code>SearchRepositoriesByKeyword</code>.
     * @alias module:model/SearchRepositoriesByKeyword
     */
    constructor() { 
        
        SearchRepositoriesByKeyword.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SearchRepositoriesByKeyword</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SearchRepositoriesByKeyword} obj Optional instance to populate.
     * @return {module:model/SearchRepositoriesByKeyword} The populated <code>SearchRepositoriesByKeyword</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SearchRepositoriesByKeyword();

            if (data.hasOwnProperty('repositories')) {
                obj['repositories'] = ApiClient.convertToType(data['repositories'], [Repo]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/Repo>} repositories
 */
SearchRepositoriesByKeyword.prototype['repositories'] = undefined;






export default SearchRepositoriesByKeyword;

