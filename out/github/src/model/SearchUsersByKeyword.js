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
import User from './User';

/**
 * The SearchUsersByKeyword model module.
 * @module model/SearchUsersByKeyword
 * @version 1.4.5
 */
class SearchUsersByKeyword {
    /**
     * Constructs a new <code>SearchUsersByKeyword</code>.
     * @alias module:model/SearchUsersByKeyword
     */
    constructor() { 
        
        SearchUsersByKeyword.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SearchUsersByKeyword</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SearchUsersByKeyword} obj Optional instance to populate.
     * @return {module:model/SearchUsersByKeyword} The populated <code>SearchUsersByKeyword</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SearchUsersByKeyword();

            if (data.hasOwnProperty('users')) {
                obj['users'] = ApiClient.convertToType(data['users'], [User]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/User>} users
 */
SearchUsersByKeyword.prototype['users'] = undefined;






export default SearchUsersByKeyword;

