/**
 * Jira
 * The Jira Cloud Platform REST API
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
import InlineResponse20061Event from './InlineResponse20061Event';
import InlineResponse20061Notifications from './InlineResponse20061Notifications';

/**
 * The InlineResponse20061NotificationSchemeEvents model module.
 * @module model/InlineResponse20061NotificationSchemeEvents
 * @version 1.1.0
 */
class InlineResponse20061NotificationSchemeEvents {
    /**
     * Constructs a new <code>InlineResponse20061NotificationSchemeEvents</code>.
     * @alias module:model/InlineResponse20061NotificationSchemeEvents
     */
    constructor() { 
        
        InlineResponse20061NotificationSchemeEvents.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20061NotificationSchemeEvents</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20061NotificationSchemeEvents} obj Optional instance to populate.
     * @return {module:model/InlineResponse20061NotificationSchemeEvents} The populated <code>InlineResponse20061NotificationSchemeEvents</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20061NotificationSchemeEvents();

            if (data.hasOwnProperty('event')) {
                obj['event'] = InlineResponse20061Event.constructFromObject(data['event']);
            }
            if (data.hasOwnProperty('notifications')) {
                obj['notifications'] = ApiClient.convertToType(data['notifications'], [InlineResponse20061Notifications]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse20061Event} event
 */
InlineResponse20061NotificationSchemeEvents.prototype['event'] = undefined;

/**
 * @member {Array.<module:model/InlineResponse20061Notifications>} notifications
 */
InlineResponse20061NotificationSchemeEvents.prototype['notifications'] = undefined;






export default InlineResponse20061NotificationSchemeEvents;
