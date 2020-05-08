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
 * The InlineResponse20058PermissionsEDITISSUE model module.
 * @module model/InlineResponse20058PermissionsEDITISSUE
 * @version 1.1.0
 */
class InlineResponse20058PermissionsEDITISSUE {
    /**
     * Constructs a new <code>InlineResponse20058PermissionsEDITISSUE</code>.
     * @alias module:model/InlineResponse20058PermissionsEDITISSUE
     * @param description {String} 
     * @param havePermission {Boolean} 
     * @param id {String} 
     * @param key {String} 
     * @param name {String} 
     * @param type {String} 
     */
    constructor(description, havePermission, id, key, name, type) { 
        
        InlineResponse20058PermissionsEDITISSUE.initialize(this, description, havePermission, id, key, name, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, description, havePermission, id, key, name, type) { 
        obj['description'] = description;
        obj['havePermission'] = havePermission;
        obj['id'] = id;
        obj['key'] = key;
        obj['name'] = name;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>InlineResponse20058PermissionsEDITISSUE</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20058PermissionsEDITISSUE} obj Optional instance to populate.
     * @return {module:model/InlineResponse20058PermissionsEDITISSUE} The populated <code>InlineResponse20058PermissionsEDITISSUE</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20058PermissionsEDITISSUE();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('havePermission')) {
                obj['havePermission'] = ApiClient.convertToType(data['havePermission'], 'Boolean');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} description
 */
InlineResponse20058PermissionsEDITISSUE.prototype['description'] = undefined;

/**
 * @member {Boolean} havePermission
 */
InlineResponse20058PermissionsEDITISSUE.prototype['havePermission'] = undefined;

/**
 * @member {String} id
 */
InlineResponse20058PermissionsEDITISSUE.prototype['id'] = undefined;

/**
 * @member {String} key
 */
InlineResponse20058PermissionsEDITISSUE.prototype['key'] = undefined;

/**
 * @member {String} name
 */
InlineResponse20058PermissionsEDITISSUE.prototype['name'] = undefined;

/**
 * @member {String} type
 */
InlineResponse20058PermissionsEDITISSUE.prototype['type'] = undefined;






export default InlineResponse20058PermissionsEDITISSUE;

