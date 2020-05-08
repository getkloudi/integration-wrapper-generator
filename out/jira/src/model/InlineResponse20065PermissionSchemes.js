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
 * The InlineResponse20065PermissionSchemes model module.
 * @module model/InlineResponse20065PermissionSchemes
 * @version 1.1.0
 */
class InlineResponse20065PermissionSchemes {
    /**
     * Constructs a new <code>InlineResponse20065PermissionSchemes</code>.
     * @alias module:model/InlineResponse20065PermissionSchemes
     * @param description {String} 
     * @param id {Number} 
     * @param name {String} 
     * @param self {String} 
     */
    constructor(description, id, name, self) { 
        
        InlineResponse20065PermissionSchemes.initialize(this, description, id, name, self);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, description, id, name, self) { 
        obj['description'] = description;
        obj['id'] = id;
        obj['name'] = name;
        obj['self'] = self;
    }

    /**
     * Constructs a <code>InlineResponse20065PermissionSchemes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20065PermissionSchemes} obj Optional instance to populate.
     * @return {module:model/InlineResponse20065PermissionSchemes} The populated <code>InlineResponse20065PermissionSchemes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20065PermissionSchemes();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
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
InlineResponse20065PermissionSchemes.prototype['description'] = undefined;

/**
 * @member {Number} id
 */
InlineResponse20065PermissionSchemes.prototype['id'] = undefined;

/**
 * @member {String} name
 */
InlineResponse20065PermissionSchemes.prototype['name'] = undefined;

/**
 * @member {String} self
 */
InlineResponse20065PermissionSchemes.prototype['self'] = undefined;






export default InlineResponse20065PermissionSchemes;

