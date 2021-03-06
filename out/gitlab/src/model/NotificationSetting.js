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
 * The NotificationSetting model module.
 * @module model/NotificationSetting
 * @version 1.1.0
 */
class NotificationSetting {
    /**
     * Constructs a new <code>NotificationSetting</code>.
     * This feature was introduced in GitLab 8.12
     * @alias module:model/NotificationSetting
     */
    constructor() { 
        
        NotificationSetting.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NotificationSetting</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NotificationSetting} obj Optional instance to populate.
     * @return {module:model/NotificationSetting} The populated <code>NotificationSetting</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NotificationSetting();

            if (data.hasOwnProperty('events')) {
                obj['events'] = ApiClient.convertToType(data['events'], 'String');
            }
            if (data.hasOwnProperty('level')) {
                obj['level'] = ApiClient.convertToType(data['level'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} events
 */
NotificationSetting.prototype['events'] = undefined;

/**
 * @member {String} level
 */
NotificationSetting.prototype['level'] = undefined;






export default NotificationSetting;

