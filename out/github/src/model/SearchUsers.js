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
 * The SearchUsers model module.
 * @module model/SearchUsers
 * @version 1.4.3
 */
class SearchUsers {
    /**
     * Constructs a new <code>SearchUsers</code>.
     * @alias module:model/SearchUsers
     */
    constructor() { 
        
        SearchUsers.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SearchUsers</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SearchUsers} obj Optional instance to populate.
     * @return {module:model/SearchUsers} The populated <code>SearchUsers</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SearchUsers();

            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [User]);
            }
            if (data.hasOwnProperty('total_count')) {
                obj['total_count'] = ApiClient.convertToType(data['total_count'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/User>} items
 */
SearchUsers.prototype['items'] = undefined;

/**
 * @member {Number} total_count
 */
SearchUsers.prototype['total_count'] = undefined;






export default SearchUsers;

