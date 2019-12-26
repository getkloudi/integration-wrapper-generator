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
 * The NotificationMarkRead model module.
 * @module model/NotificationMarkRead
 * @version 1.4.2
 */
class NotificationMarkRead {
    /**
     * Constructs a new <code>NotificationMarkRead</code>.
     * @alias module:model/NotificationMarkRead
     */
    constructor() { 
        
        NotificationMarkRead.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NotificationMarkRead</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NotificationMarkRead} obj Optional instance to populate.
     * @return {module:model/NotificationMarkRead} The populated <code>NotificationMarkRead</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NotificationMarkRead();

            if (data.hasOwnProperty('last_read_at')) {
                obj['last_read_at'] = ApiClient.convertToType(data['last_read_at'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} last_read_at
 */
NotificationMarkRead.prototype['last_read_at'] = undefined;






export default NotificationMarkRead;

