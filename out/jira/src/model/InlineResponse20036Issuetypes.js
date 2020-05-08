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
import InlineResponse20036Fields from './InlineResponse20036Fields';

/**
 * The InlineResponse20036Issuetypes model module.
 * @module model/InlineResponse20036Issuetypes
 * @version 1.3.0
 */
class InlineResponse20036Issuetypes {
    /**
     * Constructs a new <code>InlineResponse20036Issuetypes</code>.
     * @alias module:model/InlineResponse20036Issuetypes
     * @param description {String} 
     * @param iconUrl {String} 
     * @param id {String} 
     * @param name {String} 
     * @param self {String} 
     * @param subtask {Boolean} 
     */
    constructor(description, iconUrl, id, name, self, subtask) { 
        
        InlineResponse20036Issuetypes.initialize(this, description, iconUrl, id, name, self, subtask);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, description, iconUrl, id, name, self, subtask) { 
        obj['description'] = description;
        obj['iconUrl'] = iconUrl;
        obj['id'] = id;
        obj['name'] = name;
        obj['self'] = self;
        obj['subtask'] = subtask;
    }

    /**
     * Constructs a <code>InlineResponse20036Issuetypes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20036Issuetypes} obj Optional instance to populate.
     * @return {module:model/InlineResponse20036Issuetypes} The populated <code>InlineResponse20036Issuetypes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20036Issuetypes();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('fields')) {
                obj['fields'] = InlineResponse20036Fields.constructFromObject(data['fields']);
            }
            if (data.hasOwnProperty('iconUrl')) {
                obj['iconUrl'] = ApiClient.convertToType(data['iconUrl'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('self')) {
                obj['self'] = ApiClient.convertToType(data['self'], 'String');
            }
            if (data.hasOwnProperty('subtask')) {
                obj['subtask'] = ApiClient.convertToType(data['subtask'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} description
 */
InlineResponse20036Issuetypes.prototype['description'] = undefined;

/**
 * @member {module:model/InlineResponse20036Fields} fields
 */
InlineResponse20036Issuetypes.prototype['fields'] = undefined;

/**
 * @member {String} iconUrl
 */
InlineResponse20036Issuetypes.prototype['iconUrl'] = undefined;

/**
 * @member {String} id
 */
InlineResponse20036Issuetypes.prototype['id'] = undefined;

/**
 * @member {String} name
 */
InlineResponse20036Issuetypes.prototype['name'] = undefined;

/**
 * @member {String} self
 */
InlineResponse20036Issuetypes.prototype['self'] = undefined;

/**
 * @member {Boolean} subtask
 */
InlineResponse20036Issuetypes.prototype['subtask'] = undefined;






export default InlineResponse20036Issuetypes;

