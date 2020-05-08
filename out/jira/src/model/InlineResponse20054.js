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

/**
 * The InlineResponse20054 model module.
 * @module model/InlineResponse20054
 * @version 1.1.0
 */
class InlineResponse20054 {
    /**
     * Constructs a new <code>InlineResponse20054</code>.
     * 
     * @alias module:model/InlineResponse20054
     * @param avatarId {Number} 
     * @param description {String} 
     * @param iconUrl {String} 
     * @param id {String} 
     * @param name {String} 
     * @param self {String} 
     * @param subtask {Boolean} 
     */
    constructor(avatarId, description, iconUrl, id, name, self, subtask) { 
        
        InlineResponse20054.initialize(this, avatarId, description, iconUrl, id, name, self, subtask);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, avatarId, description, iconUrl, id, name, self, subtask) { 
        obj['avatarId'] = avatarId;
        obj['description'] = description;
        obj['iconUrl'] = iconUrl;
        obj['id'] = id;
        obj['name'] = name;
        obj['self'] = self;
        obj['subtask'] = subtask;
    }

    /**
     * Constructs a <code>InlineResponse20054</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20054} obj Optional instance to populate.
     * @return {module:model/InlineResponse20054} The populated <code>InlineResponse20054</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20054();

            if (data.hasOwnProperty('avatarId')) {
                obj['avatarId'] = ApiClient.convertToType(data['avatarId'], 'Number');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
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
 * @member {Number} avatarId
 */
InlineResponse20054.prototype['avatarId'] = undefined;

/**
 * @member {String} description
 */
InlineResponse20054.prototype['description'] = undefined;

/**
 * @member {String} iconUrl
 */
InlineResponse20054.prototype['iconUrl'] = undefined;

/**
 * @member {String} id
 */
InlineResponse20054.prototype['id'] = undefined;

/**
 * @member {String} name
 */
InlineResponse20054.prototype['name'] = undefined;

/**
 * @member {String} self
 */
InlineResponse20054.prototype['self'] = undefined;

/**
 * @member {Boolean} subtask
 */
InlineResponse20054.prototype['subtask'] = undefined;






export default InlineResponse20054;
