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
 * The SearchUserByEmail model module.
 * @module model/SearchUserByEmail
 * @version 1.4.3
 */
class SearchUserByEmail {
    /**
     * Constructs a new <code>SearchUserByEmail</code>.
     * @alias module:model/SearchUserByEmail
     */
    constructor() { 
        
        SearchUserByEmail.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SearchUserByEmail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SearchUserByEmail} obj Optional instance to populate.
     * @return {module:model/SearchUserByEmail} The populated <code>SearchUserByEmail</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SearchUserByEmail();

            if (data.hasOwnProperty('user')) {
                obj['user'] = User.constructFromObject(data['user']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/User} user
 */
SearchUserByEmail.prototype['user'] = undefined;






export default SearchUserByEmail;

