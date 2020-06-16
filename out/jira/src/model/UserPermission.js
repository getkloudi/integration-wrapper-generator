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

/**
 * The UserPermission model module.
 * @module model/UserPermission
 * @version 1.4.0
 */
class UserPermission {
    /**
     * Constructs a new <code>UserPermission</code>.
     * Details of a permission and its availability to a user.
     * @alias module:model/UserPermission
     */
    constructor() { 
        
        UserPermission.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserPermission</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserPermission} obj Optional instance to populate.
     * @return {module:model/UserPermission} The populated <code>UserPermission</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserPermission();

            if (data.hasOwnProperty('deprecatedKey')) {
                obj['deprecatedKey'] = ApiClient.convertToType(data['deprecatedKey'], 'Boolean');
            }
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
 * Indicate whether the permission key is deprecated. Note that deprecated keys cannot be used in the `permissions parameter of Get my permissions. Deprecated keys are not returned by Get all permissions.`
 * @member {Boolean} deprecatedKey
 */
UserPermission.prototype['deprecatedKey'] = undefined;

/**
 * The description of the permission.
 * @member {String} description
 */
UserPermission.prototype['description'] = undefined;

/**
 * Whether the permission is available to the user in the queried context.
 * @member {Boolean} havePermission
 */
UserPermission.prototype['havePermission'] = undefined;

/**
 * The ID of the permission. Either `id` or `key` must be specified. Use [Get all permissions](#api-rest-api-3-permissions-get) to get the list of permissions.
 * @member {String} id
 */
UserPermission.prototype['id'] = undefined;

/**
 * The key of the permission. Either `id` or `key` must be specified. Use [Get all permissions](#api-rest-api-3-permissions-get) to get the list of permissions.
 * @member {String} key
 */
UserPermission.prototype['key'] = undefined;

/**
 * The name of the permission.
 * @member {String} name
 */
UserPermission.prototype['name'] = undefined;

/**
 * The type of the permission.
 * @member {module:model/UserPermission.TypeEnum} type
 */
UserPermission.prototype['type'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
UserPermission['TypeEnum'] = {

    /**
     * value: "GLOBAL"
     * @const
     */
    "GLOBAL": "GLOBAL",

    /**
     * value: "PROJECT"
     * @const
     */
    "PROJECT": "PROJECT"
};



export default UserPermission;

