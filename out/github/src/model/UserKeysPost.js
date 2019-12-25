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

/**
 * The UserKeysPost model module.
 * @module model/UserKeysPost
 * @version 1.4.0
 */
class UserKeysPost {
    /**
     * Constructs a new <code>UserKeysPost</code>.
     * @alias module:model/UserKeysPost
     */
    constructor() { 
        
        UserKeysPost.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserKeysPost</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserKeysPost} obj Optional instance to populate.
     * @return {module:model/UserKeysPost} The populated <code>UserKeysPost</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserKeysPost();

            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} key
 */
UserKeysPost.prototype['key'] = undefined;

/**
 * @member {String} title
 */
UserKeysPost.prototype['title'] = undefined;






export default UserKeysPost;

