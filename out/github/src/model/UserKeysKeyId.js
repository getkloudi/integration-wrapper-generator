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
 * The UserKeysKeyId model module.
 * @module model/UserKeysKeyId
 * @version 1.4.0
 */
class UserKeysKeyId {
    /**
     * Constructs a new <code>UserKeysKeyId</code>.
     * @alias module:model/UserKeysKeyId
     */
    constructor() { 
        
        UserKeysKeyId.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserKeysKeyId</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserKeysKeyId} obj Optional instance to populate.
     * @return {module:model/UserKeysKeyId} The populated <code>UserKeysKeyId</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserKeysKeyId();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
UserKeysKeyId.prototype['id'] = undefined;

/**
 * @member {String} key
 */
UserKeysKeyId.prototype['key'] = undefined;

/**
 * @member {String} title
 */
UserKeysKeyId.prototype['title'] = undefined;

/**
 * @member {String} url
 */
UserKeysKeyId.prototype['url'] = undefined;






export default UserKeysKeyId;

