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
import InlineResponse20018Group from './InlineResponse20018Group';

/**
 * The InlineResponse20061Notifications model module.
 * @module model/InlineResponse20061Notifications
 * @version 1.3.1
 */
class InlineResponse20061Notifications {
    /**
     * Constructs a new <code>InlineResponse20061Notifications</code>.
     * @alias module:model/InlineResponse20061Notifications
     * @param expand {String} 
     * @param id {Number} 
     * @param notificationType {String} 
     * @param parameter {String} 
     */
    constructor(expand, id, notificationType, parameter) { 
        
        InlineResponse20061Notifications.initialize(this, expand, id, notificationType, parameter);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, expand, id, notificationType, parameter) { 
        obj['expand'] = expand;
        obj['id'] = id;
        obj['notificationType'] = notificationType;
        obj['parameter'] = parameter;
    }

    /**
     * Constructs a <code>InlineResponse20061Notifications</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20061Notifications} obj Optional instance to populate.
     * @return {module:model/InlineResponse20061Notifications} The populated <code>InlineResponse20061Notifications</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20061Notifications();

            if (data.hasOwnProperty('expand')) {
                obj['expand'] = ApiClient.convertToType(data['expand'], 'String');
            }
            if (data.hasOwnProperty('group')) {
                obj['group'] = InlineResponse20018Group.constructFromObject(data['group']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('notificationType')) {
                obj['notificationType'] = ApiClient.convertToType(data['notificationType'], 'String');
            }
            if (data.hasOwnProperty('parameter')) {
                obj['parameter'] = ApiClient.convertToType(data['parameter'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} expand
 */
InlineResponse20061Notifications.prototype['expand'] = undefined;

/**
 * @member {module:model/InlineResponse20018Group} group
 */
InlineResponse20061Notifications.prototype['group'] = undefined;

/**
 * @member {Number} id
 */
InlineResponse20061Notifications.prototype['id'] = undefined;

/**
 * @member {String} notificationType
 */
InlineResponse20061Notifications.prototype['notificationType'] = undefined;

/**
 * @member {String} parameter
 */
InlineResponse20061Notifications.prototype['parameter'] = undefined;






export default InlineResponse20061Notifications;

