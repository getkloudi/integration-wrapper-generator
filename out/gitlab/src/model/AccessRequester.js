/**
 * Gitlab
 * The platform for modern developers GitLab unifies issues, code review, CI and CD into a single UI
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
 * The AccessRequester model module.
 * @module model/AccessRequester
 * @version 1.0.0
 */
class AccessRequester {
    /**
     * Constructs a new <code>AccessRequester</code>.
     * This feature was introduced in GitLab 8.11.
     * @alias module:model/AccessRequester
     */
    constructor() { 
        
        AccessRequester.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AccessRequester</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccessRequester} obj Optional instance to populate.
     * @return {module:model/AccessRequester} The populated <code>AccessRequester</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccessRequester();

            if (data.hasOwnProperty('avatar_url')) {
                obj['avatar_url'] = ApiClient.convertToType(data['avatar_url'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('requested_at')) {
                obj['requested_at'] = ApiClient.convertToType(data['requested_at'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('web_url')) {
                obj['web_url'] = ApiClient.convertToType(data['web_url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} avatar_url
 */
AccessRequester.prototype['avatar_url'] = undefined;

/**
 * @member {String} id
 */
AccessRequester.prototype['id'] = undefined;

/**
 * @member {String} name
 */
AccessRequester.prototype['name'] = undefined;

/**
 * @member {String} requested_at
 */
AccessRequester.prototype['requested_at'] = undefined;

/**
 * @member {String} state
 */
AccessRequester.prototype['state'] = undefined;

/**
 * @member {String} username
 */
AccessRequester.prototype['username'] = undefined;

/**
 * @member {String} web_url
 */
AccessRequester.prototype['web_url'] = undefined;






export default AccessRequester;
