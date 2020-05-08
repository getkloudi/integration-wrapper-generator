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
 * The InlineObject51 model module.
 * @module model/InlineObject51
 * @version 1.2.0
 */
class InlineObject51 {
    /**
     * Constructs a new <code>InlineObject51</code>.
     * @alias module:model/InlineObject51
     */
    constructor() { 
        
        InlineObject51.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineObject51</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject51} obj Optional instance to populate.
     * @return {module:model/InlineObject51} The populated <code>InlineObject51</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject51();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * A description of the project role. Required when fully updating a project role. Optional when creating or partially updating a project role.
 * @member {String} description
 */
InlineObject51.prototype['description'] = undefined;

/**
 * The name of the project role. Must be unique. Cannot begin or end with whitespace. Max length is 255 characters. Required when creating a project role. Optional when partially updating a project role.
 * @member {String} name
 */
InlineObject51.prototype['name'] = undefined;






export default InlineObject51;

