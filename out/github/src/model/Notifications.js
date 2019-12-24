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
import NotificationsRepository from './NotificationsRepository';
import NotificationsSubject from './NotificationsSubject';

/**
 * The Notifications model module.
 * @module model/Notifications
 * @version 1.3.3
 */
class Notifications {
    /**
     * Constructs a new <code>Notifications</code>.
     * @alias module:model/Notifications
     */
    constructor() { 
        
        Notifications.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Notifications</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Notifications} obj Optional instance to populate.
     * @return {module:model/Notifications} The populated <code>Notifications</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Notifications();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('last_read_at')) {
                obj['last_read_at'] = ApiClient.convertToType(data['last_read_at'], 'String');
            }
            if (data.hasOwnProperty('reason')) {
                obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
            }
            if (data.hasOwnProperty('repository')) {
                obj['repository'] = NotificationsRepository.constructFromObject(data['repository']);
            }
            if (data.hasOwnProperty('subject')) {
                obj['subject'] = NotificationsSubject.constructFromObject(data['subject']);
            }
            if (data.hasOwnProperty('unread')) {
                obj['unread'] = ApiClient.convertToType(data['unread'], 'Boolean');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
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
Notifications.prototype['id'] = undefined;

/**
 * @member {String} last_read_at
 */
Notifications.prototype['last_read_at'] = undefined;

/**
 * @member {String} reason
 */
Notifications.prototype['reason'] = undefined;

/**
 * @member {module:model/NotificationsRepository} repository
 */
Notifications.prototype['repository'] = undefined;

/**
 * @member {module:model/NotificationsSubject} subject
 */
Notifications.prototype['subject'] = undefined;

/**
 * @member {Boolean} unread
 */
Notifications.prototype['unread'] = undefined;

/**
 * @member {String} updated_at
 */
Notifications.prototype['updated_at'] = undefined;

/**
 * @member {String} url
 */
Notifications.prototype['url'] = undefined;






export default Notifications;

