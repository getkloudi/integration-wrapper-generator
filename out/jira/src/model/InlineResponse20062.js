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
import InlineResponse20061NotificationSchemeEvents from './InlineResponse20061NotificationSchemeEvents';

/**
 * The InlineResponse20062 model module.
 * @module model/InlineResponse20062
 * @version 1.1.0
 */
class InlineResponse20062 {
    /**
     * Constructs a new <code>InlineResponse20062</code>.
     * 
     * @alias module:model/InlineResponse20062
     * @param description {String} 
     * @param expand {String} 
     * @param id {Number} 
     * @param name {String} 
     * @param notificationSchemeEvents {Array.<module:model/InlineResponse20061NotificationSchemeEvents>} 
     * @param self {String} 
     */
    constructor(description, expand, id, name, notificationSchemeEvents, self) { 
        
        InlineResponse20062.initialize(this, description, expand, id, name, notificationSchemeEvents, self);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, description, expand, id, name, notificationSchemeEvents, self) { 
        obj['description'] = description;
        obj['expand'] = expand;
        obj['id'] = id;
        obj['name'] = name;
        obj['notificationSchemeEvents'] = notificationSchemeEvents;
        obj['self'] = self;
    }

    /**
     * Constructs a <code>InlineResponse20062</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20062} obj Optional instance to populate.
     * @return {module:model/InlineResponse20062} The populated <code>InlineResponse20062</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20062();

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
                obj['notificationSchemeEvents'] = ApiClient.convertToType(data['notificationSchemeEvents'], [InlineResponse20061NotificationSchemeEvents]);
            }
            if (data.hasOwnProperty('self')) {
                obj['self'] = ApiClient.convertToType(data['self'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} description
 */
InlineResponse20062.prototype['description'] = undefined;

/**
 * @member {String} expand
 */
InlineResponse20062.prototype['expand'] = undefined;

/**
 * @member {Number} id
 */
InlineResponse20062.prototype['id'] = undefined;

/**
 * @member {String} name
 */
InlineResponse20062.prototype['name'] = undefined;

/**
 * @member {Array.<module:model/InlineResponse20061NotificationSchemeEvents>} notificationSchemeEvents
 */
InlineResponse20062.prototype['notificationSchemeEvents'] = undefined;

/**
 * @member {String} self
 */
InlineResponse20062.prototype['self'] = undefined;






export default InlineResponse20062;
