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
 * The UserUpdate model module.
 * @module model/UserUpdate
 * @version 1.4.4
 */
class UserUpdate {
    /**
     * Constructs a new <code>UserUpdate</code>.
     * @alias module:model/UserUpdate
     */
    constructor() { 
        
        UserUpdate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserUpdate} obj Optional instance to populate.
     * @return {module:model/UserUpdate} The populated <code>UserUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserUpdate();

            if (data.hasOwnProperty('bio')) {
                obj['bio'] = ApiClient.convertToType(data['bio'], 'String');
            }
            if (data.hasOwnProperty('blog')) {
                obj['blog'] = ApiClient.convertToType(data['blog'], 'String');
            }
            if (data.hasOwnProperty('company')) {
                obj['company'] = ApiClient.convertToType(data['company'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('hireable')) {
                obj['hireable'] = ApiClient.convertToType(data['hireable'], 'Boolean');
            }
            if (data.hasOwnProperty('location')) {
                obj['location'] = ApiClient.convertToType(data['location'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} bio
 */
UserUpdate.prototype['bio'] = undefined;

/**
 * @member {String} blog
 */
UserUpdate.prototype['blog'] = undefined;

/**
 * @member {String} company
 */
UserUpdate.prototype['company'] = undefined;

/**
 * @member {String} email
 */
UserUpdate.prototype['email'] = undefined;

/**
 * @member {Boolean} hireable
 */
UserUpdate.prototype['hireable'] = undefined;

/**
 * @member {String} location
 */
UserUpdate.prototype['location'] = undefined;

/**
 * @member {String} name
 */
UserUpdate.prototype['name'] = undefined;






export default UserUpdate;

