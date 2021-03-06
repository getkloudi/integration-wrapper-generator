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
 * The NotificationsSubject model module.
 * @module model/NotificationsSubject
 * @version 1.4.6
 */
class NotificationsSubject {
    /**
     * Constructs a new <code>NotificationsSubject</code>.
     * @alias module:model/NotificationsSubject
     */
    constructor() { 
        
        NotificationsSubject.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NotificationsSubject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NotificationsSubject} obj Optional instance to populate.
     * @return {module:model/NotificationsSubject} The populated <code>NotificationsSubject</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NotificationsSubject();

            if (data.hasOwnProperty('latest_comment_url')) {
                obj['latest_comment_url'] = ApiClient.convertToType(data['latest_comment_url'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} latest_comment_url
 */
NotificationsSubject.prototype['latest_comment_url'] = undefined;

/**
 * @member {String} title
 */
NotificationsSubject.prototype['title'] = undefined;

/**
 * @member {String} type
 */
NotificationsSubject.prototype['type'] = undefined;

/**
 * @member {String} url
 */
NotificationsSubject.prototype['url'] = undefined;






export default NotificationsSubject;

