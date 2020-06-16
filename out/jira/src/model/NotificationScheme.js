/**
 * The Jira Cloud platform REST API
 * Jira Cloud platform REST API documentation
 *
 * The version of the OpenAPI document: 1001.0.0-SNAPSHOT
 * Contact: ecosystem@atlassian.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import NotificationSchemeEvent from './NotificationSchemeEvent';
import Scope from './Scope';

/**
 * The NotificationScheme model module.
 * @module model/NotificationScheme
 * @version 1.4.0
 */
class NotificationScheme {
    /**
     * Constructs a new <code>NotificationScheme</code>.
     * Details about a notification scheme.
     * @alias module:model/NotificationScheme
     */
    constructor() { 
        
        NotificationScheme.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NotificationScheme</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NotificationScheme} obj Optional instance to populate.
     * @return {module:model/NotificationScheme} The populated <code>NotificationScheme</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NotificationScheme();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('expand')) {
                obj['expand'] = ApiClient.convertToType(data['expand'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('notificationSchemeEvents')) {
                obj['notificationSchemeEvents'] = ApiClient.convertToType(data['notificationSchemeEvents'], [NotificationSchemeEvent]);
            }
            if (data.hasOwnProperty('scope')) {
                obj['scope'] = ApiClient.convertToType(data['scope'], Scope);
            }
            if (data.hasOwnProperty('self')) {
                obj['self'] = ApiClient.convertToType(data['self'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The description of the notification scheme.
 * @member {String} description
 */
NotificationScheme.prototype['description'] = undefined;

/**
 * Expand options that include additional notification scheme details in the response.
 * @member {String} expand
 */
NotificationScheme.prototype['expand'] = undefined;

/**
 * The ID of the notification scheme.
 * @member {Number} id
 */
NotificationScheme.prototype['id'] = undefined;

/**
 * The name of the notification scheme.
 * @member {String} name
 */
NotificationScheme.prototype['name'] = undefined;

/**
 * The notification events and associated recipients.
 * @member {Array.<module:model/NotificationSchemeEvent>} notificationSchemeEvents
 */
NotificationScheme.prototype['notificationSchemeEvents'] = undefined;

/**
 * The scope of the notification scheme.
 * @member {module:model/Scope} scope
 */
NotificationScheme.prototype['scope'] = undefined;

/**
 * @member {String} self
 */
NotificationScheme.prototype['self'] = undefined;






export default NotificationScheme;

